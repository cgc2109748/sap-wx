import React, {useState} from 'react';
import { View } from 'remax/wechat';
import {  Button, Icon } from 'anna-remax-ui';
import {navigateTo} from 'remax/one'
import styles from './index.css';
import { Block, Frame, Grid, GridItem } from '../../common';

export default () => {
    const scanner = () => {
        navigateTo({
            url: `/pages/scan/index?code=${'BG202200010001'}`,
        })
        // wx.scanCode({
        //   onlyFromCamera: true,
        //   scanType: 'QR_CODE',
        //   success: ({result}) => {
        //     navigateTo({
        //         url: `/pages/scan/index?code=${result}`,
        //     })
        //   }
        // })
    }

    const routeHandler = (path) => {
        navigateTo({
            url: `/pages/${path}/index`
        })
    }

  return (
    <View className={styles.app}>
        <Frame grayBg>
            <Block title="操作">
                <Grid>
                    <GridItem name="资产使用情况" onClick={() => routeHandler('history')}>
                        <Icon type="edit_light" size="50px" />
                    </GridItem>
                    <GridItem name="使用资产"  onClick={scanner}>
                        <Icon type="qr_code_light" size="50px" />
                    </GridItem>
                </Grid>
            </Block>
        </Frame>
    </View>
  );
};
