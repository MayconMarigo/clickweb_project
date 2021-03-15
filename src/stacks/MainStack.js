import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/Signup";
import InitialScreen from "../screens/InitialScreen";
import TabBar from "../stacks/MainTab";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="InitialScreen" component={InitialScreen} />
    <Stack.Screen name="TabBar" component={TabBar} />
  </Stack.Navigator>
);
