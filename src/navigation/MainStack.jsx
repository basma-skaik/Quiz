import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FiltersScreen from '../screens/filters/FiltersScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import QuizScreen from '../screens/quiz/QuizScreen';
import QuizResultScreen from '../screens/quizResult/QuizResultScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="FiltersScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
