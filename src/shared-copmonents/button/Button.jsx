import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Button = ({lable, pressedScreen}) => {
  const width = useWindowDimensions();
  return (
    // <TouchableOpacity style={[styles.btnStyle, width]}>
    <TouchableOpacity style={styles.btnStyle}>
      <Text style={styles.btnLabel} onPress={{pressedScreen}}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#6ab6d4',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    width: 270,
    height: 60,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
});
