import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../shared-copmonents/button/Button';
import {useAppData} from '../../context/QuizContext';

const QuizResultScreen = () => {
  const {navigate} = useNavigation();
  const {scoure, resetQuiz, questions} = useAppData();
  const numOfQustion = questions.length;
  const scourePers = (scoure * 100) / numOfQustion;
  const renderScoure = () => {
    if (scourePers >= 90) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#0c521c'}]}>
            Excellent 🤩
          </Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {scourePers} %
          </Text>
          <Text style={[styles.msg,{color: '#0c521c'}]}>You're very smart bro! You did amazing</Text>
        </View>
      );
    } else if (scourePers >= 70) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#1ac441'}]}>Good 😊</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {scourePers} %
          </Text>
          <Text style={[styles.msg,{color: '#1ac441'}]}>
            You have a thinking mind, try study hard next time to get an
            excellent scoure
          </Text>
        </View>
      );
    } else if (scourePers >= 50) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#dec802'}]}>Fair 🙂</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {scourePers} %
          </Text>
          <Text style={[styles.msg,{color: '#dec802'}]}>You can do better next time</Text>
        </View>
      );
    } else if (scourePers >= 30) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#de8a02'}]}>Poor 😶</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {scourePers} %
          </Text>
          <Text style={[styles.msg,{color: '#de8a02'}]}>
            Sorry, you have to study well next time
          </Text>
        </View>
      );
    } else if (scourePers >= 0) {
      return (
        <View>
          <Text style={[styles.ScoureText, {color: '#de0202'}]}>Bad 😭</Text>
          <Text style={styles.scoureValue}>
            Your final scoure is {scourePers} %
          </Text>
          <Text style={[styles.msg,{color: '#de0202'}]}>You're very smart man!</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Result</Text>
      <Image
        source={require('../../../assets/img/creditscore.png')}
        style={styles.img}
        resizeMode={'contain'}
      />
      {renderScoure()}
      <Button
        action={() => {
          navigate('OnBoardingScreen');
          resetQuiz();
        }}
        lable="Reset"
        mt={80}
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
    backgroundColor: '#264F59',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
<<<<<<< HEAD
    marginTop: -100,
    color: '#33539E',
=======
    color: '#caaeaa',
    padding: 23,
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
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
    color: '#FFF',
    textAlign: 'center',
  },
  msg: {
    fontSize: 16,
    color: '#7FACD6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  img: {
    width: 400,
    height: 400,
  },
});
