import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IoniconsI from 'react-native-vector-icons/Ionicons';
import EntypoI from 'react-native-vector-icons/Entypo';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated from 'react-native-reanimated';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
//auth
import LoadingScreen from '../pages/auth/LoadingScreen';
import SignInScreen from '../pages/auth/SignInScreen';
import SignUpScreen from '../pages/auth/SignUpScreen';
import ResetPasswordScreen from '../pages/auth/ResetPasswordScreen';
//Home
import HomeScreen from '../pages/home/HomeScreen';
import CartScreen from '../pages/home/CartScreen';
import SettingsScreen from '../pages/home/SettingsScreen';
import ProfileScreen from '../pages/home/ProfileScreen';
import DetailsScreen from '../pages/home/DetailsScreen';
import AboutScreen from '../pages/home/AboutScreen';
//drawer categories
import ElectronicsScreen from '../pages/Categories/ElectronicsScreen';
import MenScreen from '../pages/Drawer/MenDrawer';
import KitchenScreen from '../pages/Categories/KitchenScreen';
import MoreCategoriesScreen from '../pages/Categories/MoreCategoriesScreen';
import OffersScreen from '../pages/Categories/OffersScreen';
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
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

function CustomDrawerContent({progress, ...rest}) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View
        style={{
          transform: [
            {
              translateX,
            },
          ],
        }}>
        <DrawerItem label="Home" onPress={() => alert('Link to help')} />
        <DrawerItemList {...rest} />
        <View>
          <Text>Hello</Text>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    // drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      labelStyle: {marginVertical: -10},
    }}>
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
      name="Home"
      component={HomeNavigator}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="tshirt" size={20} color="#e91e63" />
        ),
      }}
      name="Men"
      component={MenScreen}
      noHeader={false}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
      name="Electronics"
      component={ElectronicsScreen}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
      name="Kitchen"
      component={KitchenScreen}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
      name="Offers"
      component={OffersScreen}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
      name="More Categories"
      component={MoreCategoriesScreen}
    />

    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingsScreen}
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
    />
    <Drawer.Screen
      name="About"
      component={AboutScreen}
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
    />
    <Drawer.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
    />
    <Drawer.Screen
      name="Cart"
      component={CartScreen}
      options={{
        drawerIcon: () => (
          <FontAwesome5I name="home" size={20} color="#e91e63" />
        ),
      }}
    />
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
