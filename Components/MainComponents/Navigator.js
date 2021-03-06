import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Landing from "../../Screens/Auth/Landing";
import ForgotPass from "../../Screens/Auth/Forgot";
import Main from "../../Screens/Main/Main";
import schoolDetail from "../../Screens/Main/SchoolDetail";
import Exam from "../../Screens/Exam/Exam";
import TestTimeType from "../../Screens/Checkpoints/TestTimeType";
import SubjectPicker from "../../Screens/Checkpoints/SubjectPicker";
import Score from "../../Screens/Exam/Score";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Main"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={Main} />

      <Stack.Screen name="Landing" component={Landing} />

      <Stack.Screen name="Exam" component={Exam} />
      <Stack.Screen name="TestTimeType" component={TestTimeType} />
      <Stack.Screen name="SubjectPicker" component={SubjectPicker} />
      <Stack.Screen name="Score" component={Score} />
      <Stack.Screen
        name="schoolDetail"
        component={schoolDetail}
        headerShown={true}
      />

      <Stack.Screen
        name="Forgot"
        component={ForgotPass}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
