import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css'

const Loading = (props) => {
    const { style, type, color = '#999', gapColor = '#FDFFFD', radius = '42px' } = props;
    if (type === 'anna') {
        return (
            <View
                className={styles['loading-anna']}>
                <View style={{ backgroundColor: color }} />
                <View style={{ backgroundColor: color }} />
                <View style={{ backgroundColor: color }} />
            </View>
        );
    }
    return (
        <View
            className={styles.loading}
            style={{
                ...style,
                height: radius,
                width: radius,
                borderColor: `${color} ${color} transparent`,
            }}
        />
    );
};

export default Loading;