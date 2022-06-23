import React, { useState, useEffect } from 'react';
import { View } from 'remax/wechat';
import { Form } from 'remax/one';
import styles from './index.css';
import classNames from 'classnames';
import { Input, Picker, Button, Popup, ImageUpload } from 'anna-remax-ui';
import { Block, Frame, Loading, Grid, GridItem } from '../../common';
import { isEmpty, compact, filter, formatTime, formatDateTime, formatTimeToYear } from "../../utils/index"
import FormData from '../../utils/formData'

const options = [
    { key: '0', value: '闲置' },
    { key: '1', value: '在用' },
    { key: '2', value: '缺货' },
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
    const [productStatus, seProductStatus] = React.useState(null);
    const [files, setFiles] = useState([])
    const [productTypes, setProductTypes] = useState([])

    const queryProductTypes = () => {
        wx.request({
            url: `${process.env.REMAX_APP_BASE_URL}/productGroups`,
            method: 'GET',
            success: res => {
                console.log('获取资产类型列表成功！')
                const result = res.data.map((item) => {
                    if (!item._deleted) {
                        return {
                            key: item.value,
                            value: item.label
                        }
                    }
                })
                console.log('result:', compact(result))
                setProductTypes(compact(result))
            },
            fail: err => {
                console.log(err)
                wx.navigateTo({
                    url: '../error/index',
                })
            }
        })
    }

    useEffect(() => {
        queryProductTypes()
    }, [])

    const onChange = (key, value) => {
        setData({
            ...submitData,
            ...{
                [key]: value
            }
        })
        setSubmitData({
            ...submitData,
            ...{
                [key]: value
            }
        })
        if (key === 'type') {
            const type = filter(productTypes, (item) => {
                if (item.key === value) {
                    return item
                }
            })[0].value;
            wx.request({
                url: `${process.env.REMAX_APP_BASE_URL}/products/queryProductByType`,
                method: 'POST',
                data: {
                    type: type
                },
                success: (res) => {
                    if (!res.error) {
                        let num = '';
                        switch (String(res.data.length).length) {
                            case 0:
                                num = '0001';
                                break
                            case 1:
                                num = '000' + (Number(res.data.length) + 1);
                                break;
                            case 2:
                                num = '00' + (Number(res.data.length) + 1);
                                break;
                            case 3:
                                num = '0' + (Number(res.data.length) + 1);
                                break;
                            case 4:
                                num = Number(res.data.length) + 1;
                                break;
                            default:
                                num = '0000';
                                break;
                        }
                        const date = new Date()
                        setData({
                            ...submitData,
                            ...{
                                [key]: type,
                                code: `${value.slice(0, 2)}${formatTimeToYear(date)}${value.slice(2)}${num}`
                            }
                        })
                        setSubmitData({
                            ...submitData,
                            ...{
                                [key]: type,
                                code: `${value.slice(0, 2)}${formatTimeToYear(date)}${value.slice(2)}${num}`
                            }
                        })
                    }
                }
            })
        } else if (key === 'total') {
            if (value.length > 0 && submitData.price.length >0) {
                const result = Number(value) * Number(submitData.price)
                if (result !== NaN) {
                    setData({
                        ...submitData,
                        ...{
                            [key]: value,
                            totalPrice: result
                        }
                    })
                    setSubmitData({
                        ...submitData,
                        ...{
                            [key]: value,
                            totalPrice: result
                        }
                    })
                }
            }
        } else if (key === 'price') {
            if (submitData.total.length > 0 && value.length >0) {
                const result = Number(submitData.total) * Number(value)
                if (result !== NaN) {
                    setData({
                        ...submitData,
                        ...{
                            [key]: value,
                            totalPrice: result
                        }
                    })
                    setSubmitData({
                        ...submitData,
                        ...{
                            [key]: value,
                            totalPrice: result
                        }
                    })
                }
            }
        }
    }

    const submit = () => {
        if (loading) return
        setLoading(true)
        if (!isEmpty(files)) {
            const formData = new FormData()
            const date = new Date()
            const name = `${formatDateTime(date)}`
            formData.appendFile('file', files[0], files[0], name)
            const data = formData.getData()
            wx.request({
                url: `${process.env.REMAX_APP_BASE_URL}/upload`,
                method: 'POST',
                header: {
                    'Content-Type': data.contentType,
                },
                data: data.buffer,
                success: (res) => {
                    console.log('图片上传成功！')
                    console.log('upload data: ', res.data)
                    wx.request({
                        url: `${process.env.REMAX_APP_BASE_URL}/products/create`,
                        method: 'POST',
                        data: {
                            ...submitData,
                            ...{img: res.data.url}
                        },
                        success: () => {
                            console.log('资产入库成功！')
                            wx.navigateTo({
                                url: '../success/index',
                            })
                            setLoading(false)
                        }
                    })
                }
            })
        } else {
            wx.request({
                url: `${process.env.REMAX_APP_BASE_URL}/products/create`,
                method: 'POST',
                data: submitData,
                success: () => {
                    console.log('资产入库成功！')
                    wx.navigateTo({
                        url: '../success/index',
                    })
                    setLoading(false)
                }
            })
        }
    };

    const checkForm = () => {
        const {
            name,
            type,
            status,
            total,
            price,
            unit,
            manager,
        } = submitData;
        console.log('submitData', submitData)
        if (isEmpty(name)) {
            setErrorText('资产名称不能为空！')
            setShow(true)
            return
        } else if (isEmpty(type)) {
            setErrorText('资产类型不能为空！')
            setShow(true)
            return
        } else if (isEmpty(status)) {
            setErrorText('资产状态不能为空！')
            setShow(true)
            return
        } else if (isEmpty(total)) {
            setErrorText('资数量态不能为空！')
            setShow(true)
            return
        } else if (isEmpty(price)) {
            setErrorText('单价不能为空！')
            setShow(true)
            return
        }else if (isEmpty(unit)) {
            setErrorText('单位不能为空！')
            setShow(true)
            return
        }  else if (isEmpty(manager)) {
            setErrorText('管理人不能为空！')
            setShow(true)
            return
        } else {
            submit()
        }
    }

    const handleFileChange = (files) => {
        setFiles(files)
    }

    return (
        <View className={styles.form}>
            <Frame grayBg>
                <Block title="资产名称">
                    <Input value={data?.name} onChange={(e) => onChange('name', e.target.value)} border={false} />
                </Block>
                <Block title="资产图片">
                    <ImageUpload files={files} onChange={handleFileChange} multiple={false} multipleCount={1} maxCount={1} />
                </Block>
                <Block title="资产类型">
                    <Picker
                        value={value}
                        onChange={v => {
                            setValue(v.key)
                            onChange('type', v.key)
                        }}
                        options={productTypes}
                        placeholder="请选择"
                    />
                </Block>
                <Block title="资产编码">
                    <Input value={data?.code} border={false} disabled />
                </Block>
                <Block title="资产状态">
                    <Picker
                        value={productStatus}
                        onChange={v => {
                            seProductStatus(v.key)
                            onChange('status', v.key)
                        }}
                        options={options}
                        placeholder="请选择"
                    />
                </Block>
                <Block title="资产数量" type="number">
                    <Input value={data?.total} border={false} onChange={(e) => onChange('total', e.target.value)} />
                </Block>
                <Block title="单价">
                    <Input value={data?.price} border={false} onChange={(e) => onChange('price', e.target.value)} />
                </Block>
                <Block title="总价">
                    <Input value={data?.totalPrice} border={false} disabled />
                </Block>
                <Block title="单位">
                    <Input value={data?.unit} border={false} onChange={(e) => onChange('unit', e.target.value)} />
                </Block>
                <Block title="管理人" >
                    <Input value={data?.manger} border={false} onChange={(e) => onChange('manager', e.target.value)} />
                </Block>
                <Block title="入库日期" >
                    <Input value={formatTime(date)} border={false} disabled />
                </Block>
                <Button className={styles.confirm} size="large" shape="square" block type="primary" onTap={checkForm} loading={loading}>
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
