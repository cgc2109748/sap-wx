import React, { useState, useEffect } from 'react';
import { View, Text, navigateTo } from 'remax/wechat';
import styles from './index.css';
import { Popup, Cell, Tag } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default (props) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [indexData, setIndexData] = useState({})

    const fetchData = () => {
        wx.request({
            url: `${process.env.REMAX_APP_BASE_URL}/products`,
            data,
            method: 'GET',
            success: res => {
                console.log('获取资产列表成功！')
                console.log('data:', res.data)
                setData(res.data)
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
        fetchData()
    }, [])

    const statusHandler = (str) => {
        switch (str) {
            case '0':
                return '闲置'
            case '1':
                return '在用'
            case '2':
                return '缺货'
        }
    }
    const colorHandler = (str) => {
        switch (str) {
            case '0':
                return 'green'
            case '1':
                return 'blue'
            case '2':
                return 'red'
        }
    }

    const showDetail = (data) => {
        console.log('data:', data)
        navigateTo({
            url: `/pages/productDetail/index?name=${data.name}&code=${data.code}&img=${data.img}&type=${data.type}&status=${data.status}&total=${data.total}&used=${data.used}&left=${data.left}&unit=${data.unit}&price=${data.price}&totalPrice=${data.totalPrice}&user=${data.user ? data.user : '-'}&manager=${data.manager}&updatedDate=${data.updatedDate}`,
        })
    }

    return (
        <View className={styles.form}>
            <Frame grayBg style={{ padding: 0, height: '100vh', overflow: 'scroll' }}>
                <Block title="资产使用情况">
                    {data && data.map(item => {
                        return (
                            <Cell key={item._id} label={item.name} arrow border={true}
                                onTap={() => showDetail(item)}
                                description={
                                    <>
                                        <Tag color={colorHandler(item.status)}>{statusHandler(item.status)}</Tag>
                                        <Text style={{ marginLeft: '24px' }}>{item.code}</Text>
                                    </>
                                }>
                                详情
                            </Cell>
                        )
                    })}
                </Block>
                <Popup open={show} onClose={() => { setShow(false) }} >
                    <View style={{ padding: '80px', fontSize: '32px', textAlign: 'center' }} >
                        {indexData.toString()}
                    </View>
                </Popup>
            </Frame>
        </View>
    )
}