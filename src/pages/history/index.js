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
            url: `${process.env.REMAX_APP_BASE_URL}/productLogs`,
            data,
            method: 'GET',
            success: res => {
                console.log('获取日志成功！')
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

    const typeHandler = (str) => {
        switch (str) {
            case '0':
                return '领取'
            case '1':
                return '借取'
            case '2':
                return '归还'
            case '3':
                return '补货'
        }
    }
    const colorHandler = (str) => {
        switch (str) {
            case '0':
                return 'blue'
            case '1':
                return 'yellow'
            case '2':
                return 'green'
            case '3':
                return 'red'
        }
    }

    const showDetail = (data) => {
        console.log('data:', data)
        navigateTo({
            url: `/pages/detail/index?name=${data.name}&code=${data.code}&type=${data.type}&num=${data.num}&user=${data.user ? data.user : '-'}&manager=${data.manager}&createDate=${data.createDate}`,
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
                                        <Tag color={colorHandler(item.type)}>{typeHandler(item.type)}</Tag>
                                        <Text style={{ marginLeft: '24px' }}>{item.createDate}</Text>
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