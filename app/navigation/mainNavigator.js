import React from 'react';
//navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//auth
import LoadingScreen from '../pages/auth/LoadingScreen';
import SignInScreen from '../pages/auth/SignInScreen';
import SignUpScreen from '../pages/auth/SignUpScreen';
//Home
import HomeScreen from '../pages/home/HomeScreen';
import CartScreen from '../pages/home/CartScreen';
import ProductScreen from '../pages/home/ProductScreen';
import ProfileScreen from '../pages/home/ProfileScreen';
import DetailsScreen from '../pages/home/DetailsScreen';
import AboutScreen from '../pages/home/AboutScreen';
// initialize navigator
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
  <Stack.Navigator
    screenOptions={() => ({
      // headerShown: false,
    })}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Product" component={ProductScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Details" component={DetailsScreen} />
    <Drawer.Screen name="Cart" component={CartScreen} />
  </Drawer.Navigator>
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
        <Stack.Screen name="Home" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
