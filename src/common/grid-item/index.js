import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';

const GridItem = (props) => {
  const { name, children, onClick} = props;
  return (
    <View className={styles.gridItem} onClick={onClick}>
      {children}
      <View className={styles.name}>{name}</View>
    </View>
  );
};
export default GridItem;