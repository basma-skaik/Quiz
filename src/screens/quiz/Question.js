import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppData} from '../../context/QuizContext';
import Button from '../../shared-copmonents/button/Button';

export const QuestionCOM = ({
  question,
  nextQuestion,
  index,
  numOfQuestions,
  isClicked,
  isFinshed,
  setIsClicked,
}) => {
  const {navigate} = useNavigation();
  const [userAnswer, setUserAnswer] = useState('');
  const {updateScoure, scoure, resetQuiz} = useAppData();

  const allAnswers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();
  const answerCheck = ua => {
    setUserAnswer(ua);
    setIsClicked(true);
    if (question.correct_answer === ua) updateScoure(1);
  };

  return (
    <View>
      {isFinshed && isClicked && (
        <Text
          style={[
            styles.scoure,
            {backgroundColor: scoure < 5 ? 'red' : 'green'},
          ]}>
          YOU Got {scoure} / {numOfQuestions}
        </Text>
      )}
      <View style={{marginVertical: 45}}>
        <Text style={[styles.Question,{padding:5,alignSelf:'flex-start',borderWidth:1,borderRadius:8,borderColor:'#7FACD6',marginBottom:20}]}>
          Q{index + 1 + '/' + numOfQuestions}
        </Text>
        <Text style={styles.Question}>{question.question}</Text>
      </View>
      <View style={styles.allAnswers}>
        {allAnswers.map(ans => (
          <Button
            lable={ans}
            style={styles.Answer}
            key={ans}
            w={'100%'}
            mt={35}
            action={e => answerCheck(ans)}
            bg={
              isClicked && question.correct_answer === ans
                ? '#23b86d'
                : isClicked && userAnswer === ans
                ? '#bd1919'
                : '#BFB8DA'
            }
            disabled={isClicked}
          />
        ))}
      </View>
      <View>
        <Button
          mb={60}
          disabled={!isClicked}
          lable={isFinshed ? 'Finsh Quiz' : 'Next Question'}
          fs={24}
          mt={100}
          action={
            index + 1 === numOfQuestions
              ? () => {
                  resetQuiz();
                  navigate('OnBoardingScreen');
                }
              : () => nextQuestion()
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Question: {
    fontSize: 22,
    color: '#FFF',
    textAlign: 'left',
  },

  Answer: {
    marginVertical: 20,
  },
  scoure: {
    width: 200,
    paddingVertical: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    color: '#FFF',
    marginTop: 50,
  },
});
