import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Button from '../../shared-copmonents/button/Button';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const window = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, window.height]}>
      <Text>OnBoardingScreen</Text>
      <View style={styles.btnContainer}>
        <Button
          lable={'Get started'}
          action={() => navigation.navigate('QuizScreen')}
        />
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
