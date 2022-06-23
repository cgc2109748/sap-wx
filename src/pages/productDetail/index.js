import React, { useState, useEffect } from 'react';
import { navigateTo, View, Image } from 'remax/wechat';
import styles from './index.css';
import { Input, Picker, Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import { formatTime } from "../../utils/index"

const options = [
    { key: '0', value: '领取' },
    { key: '1', value: '借取' },
    { key: '2', value: '归还' },
    { key: '3', value: '补货' },
];

export default (props) => {
    const [data, setData] = useState(props.location.query)
    useEffect(() => {
        console.log('props.location.query:', props.location.query)
        setData(props.location.query)
    }, [props, props.location.query])

    const routeHandler = () => {
        navigateTo({
            url: `/pages/qrCode/index?name=${data.name}&code=${data.code}&img=${data.img}&type=${data.type}&status=${data.status}&total=${data.total}&used=${data.used}&left=${data.left}&unit=${data.unit}&price=${data.price}&totalPrice=${data.totalPrice}&user=${data.user ? data.user : '-'}&manager=${data.manager}&updatedDate=${data.updatedDate}`,
        })
    }

    return (
        <View className={styles.form}>
            <Frame grayBg>
                <Block title="资产图片" >
                    <View style={{display: 'flex', justifyContent: 'center'}}>
                        {(data?.img && data?.img !== 'undefined') ? <Image src={data?.img} mode="widthFix" /> : '暂无图片'}
                    </View>
                </Block>
                <Block title="资产名称">
                    <Input value={data?.name} border={false} disabled />
                </Block>
                <Block title="资产编码">
                    <Input value={data?.code} border={false} disabled />
                </Block>
                <Block title="资产类型">
                    <Input value={data?.type} border={false} disabled />
                </Block>
                <Block title="资产数量" type="number">
                    <Input value={data?.total} border={false} disabled />
                </Block>
                <Block title="使用数量">
                    <Input value={data?.used} border={false} disabled />
                </Block>
                <Block title="剩余数量">
                    <Input value={data?.left} border={false} disabled />
                </Block>
                <Block title="单位">
                    <Input value={data?.unit} border={false} disabled />
                </Block>
                <Block title="单价">
                    <Input value={data?.price} border={false} disabled />
                </Block>
                <Block title="总价">
                    <Input value={data?.totalPrice} border={false} disabled />
                </Block>
                <Block title="更新日期" >
                    <Input value={data?.updatedDate} border={false} disabled />
                </Block>
                <Block title="管理人" >
                    <Input value={data?.manager} border={false} disabled />
                </Block>
                <Button className={styles.confirm} size="large" shape="square" block type="primary"
                    onTap={routeHandler}>
                    显示二维码
                </Button>
            </Frame>
        </View>
    );
};
