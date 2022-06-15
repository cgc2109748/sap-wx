
import React from 'react';
import { View } from 'remax/wechat';
import { Button, Result } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
export default (props) => {
    return (
        <Frame grayBg>
            <Block>
                <Result height="100vh" status="success" title="提交成功"
                    subTitle=""
                    extra={
                        <View>
                            <Button onTap={() => {
                                wx.navigateTo({
                                    url: '../index/index',
                                })
                            }}>返回首页</Button>
                        </View>
                    }
                />
            </Block>
        </Frame>
    )
}