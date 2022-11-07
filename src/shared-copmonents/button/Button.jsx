import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Button = ({lable, action, bg, c, mt, mb}) => {
  const width = useWindowDimensions();
  return (
    // <TouchableOpacity style={[styles.btnStyle, width]}>
    // ()=>
    <TouchableOpacity
      onPress={action}
      style={[
        styles.btnStyle,
        {
          backgroundColor: bg || '#33539E',
          marginBottom: mb || 0,
          marginTop: mt || 0,
        },
      ]}>
      <Text
        style={[
          styles.btnLabel,
          {
            color: c || 'white',
          },
        ]}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#6ab6d4',
    paddingVertical: 8,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLabel: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});
