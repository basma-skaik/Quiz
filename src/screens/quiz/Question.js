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
  const {updateScoure, scoure} = useAppData();

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
          YOU Got {scoure} / 10
        </Text>
      )}
      <Text style={styles.Question}>
        {index + 1 + '/' + numOfQuestions + ' ' + question.question}
      </Text>
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
          disabled={!isClicked}
          lable={isFinshed ? 'Finsh Quiz' : 'Next Question'}
          bg="#53a3d1"
          c="#f6ffff"
          fS="22"
          action={
            index + 1 === numOfQuestions
              ? () => {
                  navigate('OnBoardingScreen');
                  updateScoure(0);
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
    fontSize: 18,
    color: '#252525',
    marginTop: 100,
    textAlign: 'center',
  },
  allAnswers: {
    marginVertical: 50,
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
