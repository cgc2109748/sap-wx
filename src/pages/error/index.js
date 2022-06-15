
import React from 'react';
import { View } from 'remax/wechat';
import { Button, Result } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
export default (props) => {
    return (
        <Frame grayBg>
            <Block title="Success">
                <Result
                  height="1000px"
                  status="error"
                  title="提交失败"
                  subTitle="请仔细检查核对信息后在提交"
                  extra={
                      <View>
                          <Button onTap={() => {
                              wx.navigateTo({
                                  url: '../index/index',
                              })
                          }}>返回首页</Button>
                      </View>
                  }
                >
                  {/* <View className={styles.item}>1. 请根据图片信息填写相关信息。</View> */}
                </Result>
            </Block>
        </Frame>
    )
}