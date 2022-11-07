import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../shared-copmonents/button/Button';
import {useNavigation} from '@react-navigation/native';
import {Data} from './Data';
import { QuestionCOM } from "../components/Question";
import { Answer } from './Question';
const QuizScreen = () => {
  const navigation = useNavigation();
  const [Activeindex, setActiveindex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setindex(index + 1);
      setIsClicked(false);
    }
  };
  return (
    <View style={styles.container}>
    {/* {index === questions.length - 1 && isClicked && (
          <Typography
            text={"You got " + scoure + " / " + questions.length}
            m={"4rem 0 0"}
            p={"0.5rem 1rem"}
            fS={"3rem"}
            style={{
              backgroundColor: "#05e182",
            }}
            c="#f6ffff"
          />
        )} */}
        <QuestionCOM
          index={Activeindex}
          numOfQuestions={Data.length}
          question={Data[Activeindex].Qustion}
          nextQuestion={nextQuestion}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          isFinshed={Data.length - 1 === Activeindex}
        />
    </View>
  );
};
      // <Text style={styles.Qustion}>
      //   {Activeindex + 1}/10 {Data[Activeindex].Qustion}
      // </Text>
      // <View style={styles.ListContainer}>
      //   {Data[Activeindex].Answers.map((item, inedx) => {
      //     return (
      //       <Answer Activeindex={Activeindex} Data={Data} item={item} key={inedx}/>
       
      //     );
      //   })}
      // </View>
      // <Button
      //   lable={'Start'}
      //   action={() => setActiveindex(pre => pre + 1)}
      //   // action={() => navigation.navigate('FiltersScreen')}
      // />

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-around',
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
