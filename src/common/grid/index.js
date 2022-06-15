import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';

const Grid = (props) => {
  const { children } = props;
  return <View className={styles.grid}>{children}</View>;
};
export default Grid;