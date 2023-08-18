import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AuthStackNavigator,
  MainStackNavigator, MenuStackNavigator,
} from "./StackNavigator";
import CustomTabBar from "./shared/CustomTabBar/CustomTabBar";


const Tab = createBottomTabNavigator();
// const countMessages: number = 101;
// options={{
//   tabBarBadge: countMessages > 99 ? "99+" : countMessages
// }}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props: any) => (<CustomTabBar {...props} />)}
      screenOptions={
        (): {headerShown: boolean, tabBarShowLabel: boolean } => ({
          headerShown: false,
          tabBarShowLabel: false,
        })
      }
    >
      <Tab.Screen name="SignTab" component={AuthStackNavigator} />
      <Tab.Screen name="HomeTab" component={MainStackNavigator} />
      <Tab.Screen name="MenuTab" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;