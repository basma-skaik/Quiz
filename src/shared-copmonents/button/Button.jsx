import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

<<<<<<< HEAD
const Button = ({lable, action, bg, c, mt, mb, w, fs, disabled, style}) => {
=======
const Button = ({lable, action, bg, c, mt, mb, w, fs, disabled,pv}) => {
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
  const width = useWindowDimensions();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={action}
      style={[
        styles.btnStyle,
        {
          backgroundColor: bg || '#7FACD6',
          marginBottom: mb || 0,
          marginTop: mt || 0,
<<<<<<< HEAD
          width: w || '60%',
          alignSelf: 'center',
        },
        style,
=======
          width: w || '100%',
          paddingVertical: pv ||16
        },
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
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
