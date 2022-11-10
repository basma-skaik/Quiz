import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../shared-copmonents/button/Button';
import {useNavigation} from '@react-navigation/native';
import {Data} from './Data';

import {QuestionCOM} from './Question';
import {Answer} from './Question';
import {useAppData} from '../../context/QuizContext';
const QuizScreen = () => {
  const navigation = useNavigation();
  const [Activeindex, setActiveindex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const nextQuestion = () => {
    if (Activeindex < questions.length - 1) {
      setActiveindex(Activeindex + 1);
      setIsClicked(false);
    }
  };
  const {questions} = useAppData();
  console.log(questions);
  return (
    <ScrollView style={styles.container}>
      <QuestionCOM
        index={Activeindex}
        numOfQuestions={questions.length}
        question={questions[Activeindex]}
        nextQuestion={nextQuestion}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isFinshed={questions.length - 1 === Activeindex}
      />
    </ScrollView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:35,
    backgroundColor:'#264F59',
    height:800
  },
  Qustion: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#000',
    textAlign: 'center',
    // marginTop: 80,
  },
  ListContainer: {
    marginTop: -80,
  },
  AnswerContainer: {
    width: 280,
    backgroundColor: '#555',
    alignItems: 'center',
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
  AnswerContainer1: {
    width: 280,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
  Answers: {
    fontSize: 16,
    color: '#05e182',
    fontWeight: 'bold',
  },
});
