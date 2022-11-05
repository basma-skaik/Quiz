import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const listItem = ({text}) => {
  return (
 <Text style={styles.listItem}>{text}</Text>

  );
};

export default listItem;

const styles = StyleSheet.create({
  listItem: {
    fontSize: 18,
    color: '#92e4f1',
    marginVertical:5
  },
});
