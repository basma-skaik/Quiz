import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Button from '../../shared-copmonents/button/Button';

const OnBoardingScreen = () => {
  const window = useWindowDimensions();
  return (
    <View style={[styles.container, window.height]}>
      <Text>OnBoardingScreen</Text>
      <View style={styles.btnContainer}>
        <Button pressedScreen={''} lable={'Get started'} />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
  },
});
