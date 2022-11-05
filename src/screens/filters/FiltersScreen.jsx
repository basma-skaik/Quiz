import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../shared-copmonents/button/Button';

const FiltersScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>FiltersScreen</Text>
      <Button
        lable={'Finish quiz'}
        action={() => navigation.goBack('OnBoardingScreen')}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({});
