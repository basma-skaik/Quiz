import {useState, useContext, createContext} from 'react';

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [scoure, setScoure] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateScoure = value => {
    value === 0 ? setScoure(0) : setScoure(prev => prev + 1);
  };


  const fetchQuestions = (
    numOfQues = 10,
    category = '',
    difficulty = '',
    type = '',
  ) => {
    console.log('fetchQuestions is runningx', {
      numOfQues,
      category,
      difficulty,
      type,
    });
    setIsLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=${numOfQues}&category=${category}&difficulty=${difficulty}&type=${type}`,
    )
      .then(res => res.json())
      .then(res => {
        setQuestions(res.results);
        console.log({res});
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert(err);
      });
  };
  const resetQuiz = () => {
    setQuestions([]);
    setScoure(0);
  };

  return (
    <AppContext.Provider
      value={{
        scoure,
        setScoure,
        questions,
        isLoading,
        fetchQuestions,
        updateScoure,
        resetQuiz,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => useContext(AppContext);
