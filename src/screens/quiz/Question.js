// import { useState } from "react";
// import { TouchableOpacity,Text } from "react-native";

// export const QuestionCOM = ({
//   question,
//   nextQuestion,
//   index,
//   numOfQuestions,
//   isClicked,
//   isFinshed,
//   setIsClicked,
// }) => {
//   const [userAnswer, setUserAnswer] = useState("");
//   const allAnswers = [
//     ...question.incorrect_answers,
//     question.correct_answer,
//   ].sort();
// }
// return(
//   {allAnswers.map((ans) => (
//     <Button
//       title={ans}
//       p={"1rem 1.5rem"}
//       style={{ marginBottom: "1.5rem" }}
//       key={ans}
//       w={"27rem"}
//       onClick={(e) => answerCheck(ans)}
//       bg={
//         isClicked && question.correct_answer === ans
//           ? "#23b86d"
//           : isClicked && userAnswer === ans
//           ? "#bd1919"
//           : "white  "
//       }
//       disabled={isClicked}
//     />
//   ))}
// )