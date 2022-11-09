import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../shared-copmonents/button/Button';
import {useAppData} from '../../context/QuizContext';

const QuizResultScreen = () => {
  const {navigate} = useNavigation();
  const {scoure} = useAppData();

  const renderScoure = () => {
    if (scoure >= 9) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#0c521c'}]}>
            Excellent 🤩
          </Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {(scoure * 10 * 100) / 100} %
          </Text>
          <Text style={styles.msg}>You're very smart bro! You did amazing</Text>
        </View>
      );
    } else if (scoure >= 7) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#1ac441'}]}>Good 😊</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {(scoure * 10 * 100) / 100} %
          </Text>
          <Text style={styles.msg}>
            You have a thinking mind, try study hard next time to get an
            excellent scoure
          </Text>
        </View>
      );
    } else if (scoure >= 5) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#dec802'}]}>Fair 🙂</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {(scoure * 10 * 100) / 100} %
          </Text>
          <Text style={styles.msg}>You can do better next time</Text>
        </View>
      );
    } else if (scoure >= 3) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#de8a02'}]}>Poor 😶</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {(scoure * 10 * 100) / 100} %
          </Text>
          <Text style={styles.msg}>
            Sorry, you have to study well next time
          </Text>
        </View>
      );
    } else if (scoure >= 0) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#de0202'}]}>Bad 😭</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {(scoure * 10 * 100) / 100} %
          </Text>
          <Text style={styles.msg}>You're very smart man!</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Result</Text>
      <Image
        source={require('../../../assets/img/creditscore.jpg')}
        style={styles.img}
        resizeMode={'contain'}
      />
      {renderScoure()}
      <Button
        action={() => navigate('OnBoardingScreen')}
        lable="Reset"
        mt={80}
        w={'80%'}
        fs={24}
      />
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 23,
    color: '#33539E',
  },
  ScoureText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 6,
  },
  scoureValue: {
    fontSize: 18,
    padding: 6,
    color: 'black',
    textAlign: 'center',
  },
  msg: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  img: {
    width: 400,
    height: 400,
  },
});
