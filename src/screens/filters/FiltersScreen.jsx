import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectInput from '../../shared-copmonents/selectInput/SelectInput';
import {
  CategoryOptions,
  DifficultyOptions,
  QuestionsTypeOptions,
} from '../../utils/filterOptions';
import Button from '../../shared-copmonents/button/Button';
import {useAppData} from '../../context/QuizContext';
import {useNavigation} from '@react-navigation/native';

const FiltersScreen = () => {
  const [category, setCategory] = useState('');
  const [numOfQues, setNumOfQues] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [QuestionsType, setQuestionsType] = useState('');

  const {fetchQuestions, isLoading, questions} = useAppData();

  const {navigate} = useNavigation();

  useEffect(() => {
    questions.length > 0 && navigate('QuizScreen');
    return () => {
      setCategory('');
      setDifficulty('');
      setQuestionsType('');
    };
  }, [questions]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Quiz Filters</Text>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Enter Number Of Questions:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={text => setNumOfQues(text)}
            value={numOfQues.toString()}
            defaultValue={10}
          />
        </View>
        <SelectInput
          options={CategoryOptions}
          handleChange={setCategory}
          label="Select Category:"
        />
        <SelectInput
          options={DifficultyOptions}
          handleChange={setDifficulty}
          label="Select Difficulty:"
        />
        <SelectInput
          options={QuestionsTypeOptions}
          handleChange={setQuestionsType}
          label="Select Type:"
        />
        <Button
          mt={60}
          lable={isLoading ? 'Loading....' : 'Start'}
          action={() =>
            fetchQuestions(numOfQues, category, difficulty, QuestionsType)
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 80,
    backgroundColor: '#264F59',
  },
  mainTitle: {
    fontSize: 35,
    borderBottomColor: '#caaeaa',
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    paddingRight: 12,
    marginBottom: 30,
    color: '#caaeaa',
  },
  label: {
    fontSize: 24,
    marginBottom: 3,
    color: '#92e4f1',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 0,
    borderRadius: 6,
    paddingLeft: 8,
    fontSize: 25,
    backgroundColor: '#FFF',
    color: '#000',
    marginBottom: 20,
  },
});
