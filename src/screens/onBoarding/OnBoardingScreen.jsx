import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ListItem from './component/listItem';
import Button from './component/Button/Button';

const OnBoardingScreen = () => {
  const listString = [
    '• Multiple Ways Of Testing 💡',
    '• Millions Of Questions 👀',
    '• More And More Categories 📚',
    '• Clean And Uniqe Style 💅',
  ];
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
      <Button buttonStyle={styles.button} title="Get Started" />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  img: {
    marginTop: 50,
    height: 300,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c6ceff',
    marginVertical: 30,
  },
  list: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 120,
  },
});
