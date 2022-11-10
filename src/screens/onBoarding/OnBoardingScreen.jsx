import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import ListItem from './component/listItem';
import {useAppData} from '../../context/QuizContext';
import Button from '../../shared-copmonents/button/Button';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const {navigate} = useNavigation();

  const {fetchQuestions} = useAppData();

  const listString = [
    '• Multiple Ways Of Testing 💡',
    '• Millions Of Questions 👀',
    '• More And More Categories 📚',
    '• Clean And Uniqe Style 💅',
  ];

  useEffect(() => {
    console.log('Effected....');
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/Illustration.png')}
        style={styles.img}
        resizeMode={'contain'}
      />
      <View>
        <Text style={styles.title}>Test Your Knowledge</Text>
      </View>
      <View style={styles.list}>
        {listString.map((item, index) => (
          <ListItem key={index} text={item} />
        ))}
      </View>
      <Button
        action={() => navigate('FiltersScreen')}
        lable="Get Started"
        mt={80}
        fs={24}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#264F59'
  },
  img: {
    marginVertical: 80,
    height: 300,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#328ba8',
    marginVertical: 30,
  },
  list: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 120,
  },
});
