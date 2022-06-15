import React, { useState, useEffect } from 'react';
import { navigateTo, View } from 'remax/wechat';
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

    const back = () => {
        navigateTo({
            url: '/pages/history/index'
        })
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
                        value={data?.type}
                        options={options}
                        placeholder="请选择"
                        disabled
                    />
                </Block>
                <Block title="使用数量" type="number">
                    <Input value={data?.num} border={false} disabled />
                </Block>
                <Block title="使用人">
                    <Input value={data?.user} border={false} disabled />
                </Block>
                <Block title="经办人" >
                    <Input value={data?.manager} border={false} disabled />
                </Block>
                <Block title="使用日期" >
                    <Input value={data?.createDate} border={false} disabled />
                </Block>
                <Button className={styles.confirm} size="large" shape="square" block type="primary"
                    onTap={back}>
                    返回
                </Button>
            </Frame>
        </View>
    );
};
