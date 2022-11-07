import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../shared-copmonents/button/Button';
import {useNavigation} from '@react-navigation/native';

const QuizScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>QuizScreen</Text>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
