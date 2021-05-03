import React, { useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button
} from "react-native";
import ExamData from "../../src/ExamData";
import {
  Card,
  Title,
  Paragraph,
  RadioButton,
  Surface,
} from "react-native-paper";
import { setStatusBarHidden } from "expo-status-bar";
import { Formik } from "formik";
import Question from "./Question";


// const Item = ({ itemNumber, question, answerOptions }) => {
//   // <View style={styles.item}>
//   //   <Text style={styles.title}>{title}</Text>
//   // </View>

//   setStatusBarHidden(true);
//   const [arrayOfAnswers, setArrayofAnswers] = React.useState([]);

//   // useEffect(() => {
//   //   // Update the document title using the browser API
//   //   setArrayofAnswers((oldValue) => [...oldValue, value]);
//   //   console.log(arrayOfAnswers);
//   // }, [value]);
//   return (
//     <View style={styles.formWrapper}>
//       <View style={styles.formDetails}>
//         <Text style={styles.title}>{itemNumber}</Text>
//         <View style={styles.divider}></View>
//         <Text style={styles.question}>{question}</Text>
//       </View>

//       <View style={styles.radioGroup}>
//         {answerOptions.map((choices) => {
//           return (
//             <View style={styles.choiceContainer}>
//               <RadioButton value={choices.choiceText} />
//               <Text style={styles.choiceText}>{choices.choiceText}</Text>
//             </View>
//           );
//         })}

//         {/* <View style={styles.choiceContainer}>
//             <RadioButton value="B" />
//             <Text style={styles.choiceText}>{choiceB}</Text>
//           </View>
//           <View style={styles.choiceContainer}>
//             <RadioButton value="C" />
//             <Text style={styles.choiceText}>{choiceC}</Text>
//           </View>
//           <View style={styles.choiceContainer}>
//             <RadioButton value="D" />
//             <Text style={styles.choiceText}>{choiceD}</Text>
//           </View> */}
//       </View>
//     </View>
//   );
// };

// function Examv3(props) {
//   const renderItem = ({ item }) => (
//     <Item
//       itemNumber={item.itemNumber}
//       question={item.question}
//       answerOptions={item.answerOptions}
//     />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={ExamData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//       <Text>asdasd</Text>
//       <FormikSample />
//     </SafeAreaView>
//   );
// }



function Examv3() {
  const Questions = [
    {
      "question": "asdasd",
      "choices": ["asd", "asd", "asd", 'asd'],
      "correctAnswer": "a",
    },
    {
      "question": "asdasd",
      "choices": ["asd", "asd", "asd", 'asd'],
      "correctAnswer": "a",
    },
    {
      "question": "asdasd",
      "choices": ["asd", "asd", "asd", 'asd'],
      "correctAnswer": "a",
    },
    {
      "question": "asdasd",
      "choices": ["asd", "asd", "asd", 'asd'],
      "correctAnswer": "a",
    },
    {
      "question": "asdasd",
      "choices": ["asd", "asd", "asd", 'asd'],
      "correctAnswer": "a",
    },

  ];

  const Answers = {};

  const handleAnswers = (questionID, answer) => {
    Answers[questionID] = answer;
  }

  const handleSubmit = () => {
    let correct = 0;

    for(let i = 0; i < Questions.length ; i++) {
      if(Questions[i].correctAnswer == Answers[i+1]) {
        correct++;
      }
    }

    console.log("Correct Answer: ", correct);


  }

  return (
    <SafeAreaView> 
      {
        Questions &&
        Questions.map((query, index) => {
          return (
            <Question 
              index={index+1}
              question={query.question}
              choices={query.choices}
              correctAnswer={query.correctAnswer}
              handleAnswers={ handleAnswers }
            />
          )
        })
      }

      <Button title="Submit" onPress={() => handleSubmit()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,

    paddingHorizontal: 3,
  },
  timeWrapper: {
    height: 50,
    width: 200,
    marginVertical: 30,
    backgroundColor: "#caefd1",
  },
  formWrapper: {
    flex: 1,
    marginVertical: 70,
  },
  formDetails: {
    paddingHorizontal: 30,
  },
  title: {
    marginVertical: 10,
    fontSize: 25,
    fontFamily: "MontserratBold",
  },
  question: {
    fontSize: 20,
    fontFamily: "MontserratRegular",
  },
  radioGroup: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginVertical: 50,
  },
  choiceContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 50,

    elevation: 2,
    borderRadius: 10,
  },
});

export default Examv3;