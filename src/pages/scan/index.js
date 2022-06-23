import React, { useState, useEffect } from 'react';
import { View } from 'remax/wechat';
import { Form } from 'remax/one';
import styles from './index.css';
import classNames from 'classnames';
import { Input, Picker, Button, Popup, Result } from 'anna-remax-ui';
import { Block, Frame, Loading, Grid, GridItem } from '../../common';
import { isEmpty, formatTime } from "../../utils/index"

const options = [
    { key: '0', value: '领取' },
    { key: '1', value: '借取' },
    { key: '2', value: '归还' },
    { key: '3', value: '补货' },
];

export default (props) => {
    const [show, setShow] = useState(false);
    const [errorText, setErrorText] = useState('')
    const [data, setData] = useState({
        _id: '',
        name: '',
        code: '',
        type: '',
        num: '',
        user: '',
        manager: '',
    })
    const [submitData, setSubmitData] = useState({})
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(null);
    useEffect(() => {
        fetchData(props.location.query?.code)
    }, [props, props.location.query?.code])

    const fetchData = (code) => {
        if (loading) return
        setLoading(true)
        wx.request({
            method: 'POST',
            url: `${process.env.REMAX_APP_BASE_URL}/products/queryProductByCode`,
            data: {
                code
            },
            success: res => {
                const data = res.data[0]
                setLoading(false)
                setData(data)
                const { _id, name, code, type, } = data
                setSubmitData({
                    _id,
                    name,
                    code,
                    productType: type
                })
                // console.log('data', data)
                // console.log('submitData', {
                //     _id,
                //     name,
                //     code,
                //     productType: type
                // })
            },
            cail: err => {
                console.error(err)
            }
        })
    }

    const onChange = (key, value) => {
        setSubmitData({
            ...submitData,
            ...{
                [key]: value
            }
        })
    }

    const createProductLog = (data, productData) => {
        if (loading) return;
        setLoading(true);
        wx.request({
            url: `${process.env.REMAX_APP_BASE_URL}/productLogs/create`,
            data,
            method: 'POST',
            success: res => {
                console.log('创建日志成功！')
                updateProduct(productData)
            },
            fail: err => {
                console.log(err)
                wx.navigateTo({
                    url: '../error/index',
                })
            }
        })
    }
    const updateProduct = (data) => {
        wx.request({
            url: `${process.env.REMAX_APP_BASE_URL}/products/${data._id}`,
            data,
            method: 'PUT',
            success: res => {
                console.log('更新资产信息成功！')
                wx.navigateTo({
                    url: '../success/index',
                })
            },
            fail: err => {
                console.log(err)
                wx.navigateTo({
                    url: '../error/index',
                })
            }
        })
    }

    const submit = () => {
        const {
            _id,
            name,
            code,
            type,
            num,
            user,
            manager,
        } = submitData;

        const logData = {
            name,
            code,
            productType: data.type,
            type,
            num,
            user,
            manager,
        };

        let productData = {
            _id,
        };
        if (type) {
            switch (type) {
                case "0"://领取
                    productData['used'] = Number(data.used) + Number(submitData.num)
                    if (Number(data.left) - Number(submitData.num) < 0) {
                        setErrorText('领取数量超过剩余数量，请重新填写！')
                        setShow(true)
                    }
                    productData['left'] = Number(data.left) - Number(submitData.num)
                    if (parseInt(data.amountOfBrrow) !== null) {
                        productData['amountOfBrrow'] = data.amountOfBrrow;
                    }
                    if (parseInt(data.total) !== null) {
                        productData['total'] = data.total;
                    }
                    createProductLog(logData, productData)
                    break
                case "1"://借取
                    if (((Number(data.left) - Number(submitData.num)) > 0) || ((Number(data.left) - Number(submitData.num)) == 0)) {
                        productData['used'] = Number(data.used) + Number(submitData.num)
                        productData['left'] = Number(data.left) - Number(submitData.num)
                        productData['amountOfBrrow'] = Number(data.amountOfBrrow) + Number(submitData.num)
                        createProductLog(logData, productData)
                    } else {
                        setErrorText('使用数量不能大于剩余数量！')
                        setShow(true)
                        break
                    }
                    break
                case "2": //归还
                    if (((Number(data.amountOfBrrow) - Number(submitData.num)) > 0) || ((Number(data.amountOfBrrow) - Number(submitData.num)) == 0)) {
                        productData['used'] = Number(data.used) - Number(submitData.num)
                        productData['left'] = Number(data.left) + Number(submitData.num)
                        productData['amountOfBrrow'] = Number(data.amountOfBrrow) - Number(submitData.num)
                        createProductLog(logData, productData)
                    } else {
                        setErrorText('归还数量有误，请确认后再提交！')
                        setShow(true)
                        break
                    }
                    break
                case "3": //补货
                    productData['left'] = Number(data.left) + Number(submitData.num)
                    productData['total'] = Number(data.total) + Number(submitData.num)
                    createProductLog(logData, productData)
                    break
                default:
                    break
            }
        }
    };

    const checkForm = () => {
        const {
            type,
            num,
            user,
            manager,
        } = submitData;
        console.log('submitData', submitData)
        if (isEmpty(type)) {
            setErrorText('使用方式不能为空！')
            setShow(true)
            return
        } else if (isEmpty(num)) {
            setErrorText('使用数量不能为空！')
            setShow(true)
            return
        } else if (isEmpty(user)) {
            if (type !== '2' && type !== '3') {
                setErrorText('使用人不能为空！')
                setShow(true)
                return
            } else {
                submit()
            }
        } else if (isEmpty(manager)) {
            setErrorText('经办人不能为空！')
            setShow(true)
            return
        } else {
            submit()
        }
    }

    return (
        <View className={styles.form}>
            <Frame grayBg>
                <Block title="资产名称">
                    <Input value={data?.name} border={false} disabled />
                </Block>
                <Block title="资产编码">
                    <Input value={data?.code} border={false} disabled />
                </Block>
                <Block title="使用方式">
                    <Picker
                        value={value}
                        onChange={v => {
                            setValue(v.key)
                            onChange('type', v.key)
                        }}
                        options={options}
                        placeholder="请选择"
                    />
                </Block>
                <Block title="使用数量" type="number">
                    <Input value={data?.num} border={false} onChange={(e) => onChange('num', e.target.value)} />
                </Block>
                <Block title="使用人">
                    <Input value={data?.user} border={false} onChange={(e) => onChange('user', e.target.value)} />
                </Block>
                <Block title="经办人" >
                    <Input value={data?.manger} border={false} onChange={(e) => onChange('manager', e.target.value)} />
                </Block>
                <Block title="使用日期" >
                    <Input value={formatTime(date)} border={false} disabled />
                </Block>
                <Button className={styles.confirm} size="large" shape="square" block type="primary" onTap={checkForm}>
                    确定
            </Button>
                <Popup open={show} onClose={() => { setShow(false) }} >
                    <View style={{ padding: '80px', fontSize: '32px', textAlign: 'center' }} >
                        {errorText}
                    </View>
                </Popup>
                <Popup open={loading} onClose={() => { setLoading(false) }} style={{ transform: 'translate(-50%, -300px)' }} >
                    <View className={styles.main} >
                        <Loading type="anna" />
                    </View>
                </Popup>
            </Frame>
        </View>
    );
};
