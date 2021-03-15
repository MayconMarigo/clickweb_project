import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InitialScreen from "../screens/InitialScreen";
import Account from "../screens/Account";
import Notifications from "../screens/Notifications";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="InitialScreen"
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="InitialScreen" component={InitialScreen} />
    <Tab.Screen name="Notifications" component={Notifications} />
  </Tab.Navigator>
);
