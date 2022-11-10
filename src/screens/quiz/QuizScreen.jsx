<<<<<<< HEAD
import {StyleSheet, View} from 'react-native';
=======
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
import React, {useState} from 'react';
import {QuestionCOM} from './Question';
import {useAppData} from '../../context/QuizContext';

const QuizScreen = () => {
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
<<<<<<< HEAD
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
=======
    paddingHorizontal:35,
    backgroundColor:'#264F59',
    height:800
>>>>>>> 09b4a69bec891198fe2db7650aaae0c0f4161983
  },
  Qustion: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#000',
    textAlign: 'center',
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
