import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.css';

const Block = (props) => {
  const { title, children, noTitlePadding, contentStyle, className } = props;
  return (
    <View className={classNames(styles.block, className)}>
      <View className={styles.title} style={{ paddingLeft: noTitlePadding ? '0' : '24px' }}>
        {title}
      </View>
      <View className={styles.content} style={contentStyle}>
        {children}
      </View>
    </View>
  );
};
export default Block;