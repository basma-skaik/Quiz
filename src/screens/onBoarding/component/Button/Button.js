import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({
  onPress,
  title,
  icon,
  buttonStyle,
  titleStyle,
  iconStyle,
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.iconStyle, iconStyle]}>{icon}</View>
        <Text style={[styles.title, titleStyle]}>{title || 'Title'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
