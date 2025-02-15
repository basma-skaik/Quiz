import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Button = ({lable, action, bg, c, mt, mb, w, fs, disabled,pv}) => {
  const width = useWindowDimensions();
  return (
    // <TouchableOpacity style={[styles.btnStyle, width]}>
    // ()=>
    <TouchableOpacity
      disabled={disabled}
      onPress={action}
      style={[
        styles.btnStyle,
        {
          backgroundColor: bg || '#7FACD6',
          marginBottom: mb || 0,
          marginTop: mt || 0,
          width: w || '100%',
          paddingVertical: pv ||16
        },
      ]}>
      <Text
        style={[
          styles.btnLabel,
          {
            color: c || 'white',
            fontSize: fs || 24,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLabel: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});
