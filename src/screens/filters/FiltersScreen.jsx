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

const FiltersScreen = () => {
  const [category, setCategory] = useState('');
  const [numOfQues, setNumOfQues] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [QuestionsType, setQuestionsType] = useState('');

  useEffect(() => {
    console.log({numOfQues});
  }, [numOfQues]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Quiz Filters</Text>
        <View>
          <Text style={styles.label}>Enter Number Of Questions:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={numOfQues}
            defaultValue={10}
            onChangeText={text => setNumOfQues(text)}
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
        <Button lable={'Start'} />
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
    paddingTop: 60,
  },
  mainTitle: {
    fontSize: 35,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    paddingRight: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 24,
    marginBottom: 3,
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
    backgroundColor: '#CEDFCC',
    marginBottom: 20,
  },
});
