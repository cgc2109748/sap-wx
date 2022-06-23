import React, { useEffect, useMemo, useState } from 'react';
import { View, Image } from 'remax/wechat';
import { Button, Icon } from 'anna-remax-ui';
import { navigateTo } from 'remax/one'
import styles from './index.css';
import { Block, Frame, Grid, GridItem } from '../../common';
import QRCode from '../../utils/qrcode';

export default (props) => {
    const [data, setData] = useState(props.location.query)
    const [qrCode, setQrCode] = useState('')
    useEffect(() => {
        setData(props.location.query)
    }, [props, props.location.query])

    const w = useMemo(() => {
        return wx.getSystemInfoSync().windowWidth
    }, [wx.getSystemInfoSync()?.windowWidth, data?.code])

    const qrcode_w = useMemo(() => {
        const rate = 750.0 / w;
        return 300 / rate;
    }, [w])

    useEffect(() => {
        const qrcode = new QRCode('canvas', {
            text: data.code,
            padding: 12,
            width: '200',
            height: '200',
            colorDark: "#000",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
            callback: (res) => {
                // 生成二维码的临时文件
                console.log(res.path)
            }
        })
        // const qurey = wx.createSelectorQuery()
        // const qrcode =new QRCode(qurey.select('#qrcode'), {text: data.code})
        // QRCode.toDataURL(data.code).then((res) => {
        //     setQrCode(res)
        //     console.log('qrCode:', res)
        // })
    }, [data?.code])

    const back = () => {
        navigateTo({
            url: `/pages/productDetail/index?name=${data?.name}&code=${data?.code}&img=${data?.img}&type=${data?.type}&status=${data?.status}&total=${data?.total}&used=${data?.used}&left=${data?.left}&unit=${data?.unit}&price=${data?.price}&totalPrice=${data?.totalPrice}&user=${data?.user ? data?.user : '-'}&manager=${data?.manager}&updatedDate=${data?.updatedDate}`,
        })
    }

    return (
        <View >
            <Frame grayBg >
                <View className={styles.wrapper}> 
                    <canvas  canvas-id='canvas' style={{ height: '400px', width: '400px' }} />
                </View>
                <Button className={styles.confirm} size="large" shape="square" block type="primary"
                    onTap={back}>
                    返回
                </Button>
            </Frame>
        </View>
    );
};
