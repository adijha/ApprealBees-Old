import React from 'react';
//navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//auth
import LoadingScreen from '../pages/auth/LoadingScreen';
import SignInScreen from '../pages/auth/SignInScreen';
import SignUpScreen from '../pages/auth/SignUpScreen';
//Home
import HomeScreen from '../pages/home/HomeScreen';
// initialize navigator
const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Loading"
      component={LoadingScreen}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="Auth"
          component={AuthNavigator}
        />
        <Stack.Screen name="Home" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
