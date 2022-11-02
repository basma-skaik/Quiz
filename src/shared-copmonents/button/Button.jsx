import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({lable}) => {
  return (
    <Pressable>
      <Text>{lable}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressableStyle: {
    backgroundColor: 'orange',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
