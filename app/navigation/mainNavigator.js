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
import WomenDrawer from '../pages/Drawer/WomenDrawer';
import MenScreen from '../pages/Drawer/MenDrawer';
import ElectronicsDrawer from '../pages/Drawer/ElectronicsDrawer';
import CartDrawer from '../pages/Drawer/CartDrawer';
import ComboDrawer from '../pages/Drawer/ComboDrawer';
import HelpDrawer from '../pages/Drawer/HelpCenter';
import HerbalDrawer from '../pages/Drawer/HerbalDrawer';
import KitchenDrawer from '../pages/Drawer/KitchenDrawer';
import KidsDrawer from '../pages/Drawer/KidsDrawer';
import NotificationDrawer from '../pages/Drawer/NotificationDrawer';
import OrdersDrawer from '../pages/Drawer/OrdersDrawer';
import PrivacyDrawer from '../pages/Drawer/PrivacyPolicyDrawer';
import WalletDrawer from '../pages/Drawer/WalletDrawer';
import WishlistDrawer from '../pages/Drawer/WishListDrawer';

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
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
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
          <MaterialCommunityIconsI name="shoe-heel" size={23} color="#e91e63" />
        ),
      }}
      name="Women"
      component={WomenDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="cellphone-iphone"
            size={23}
            color="#e91e63"
          />
        ),
      }}
      name="Electronics"
      component={ElectronicsDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="cart" size={23} color="#e91e63" />
        ),
      }}
      name="Cart"
      component={CartDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="apps" size={23} color="#e91e63" />
        ),
      }}
      name="Combo"
      component={ComboDrawer}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="leaf" size={23} color="#e91e63" />
        ),
      }}
      name="Herbal"
      component={HerbalDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="lamp" size={23} color="#e91e63" />
        ),
      }}
      name="Home & Kitchen"
      component={KitchenDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="record-player"
            size={23}
            color="#e91e63"
          />
        ),
      }}
      name="Kids"
      component={KidsDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="bell-ring" size={23} color="#e91e63" />
        ),
      }}
      name="Notification"
      component={NotificationDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="basket" size={23} color="#e91e63" />
        ),
      }}
      name="Orders"
      component={OrdersDrawer}
    />

    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI
            name="wallet-outline"
            size={23}
            color="#e91e63"
          />
        ),
      }}
      name="My Wallet"
      component={WalletDrawer}
    />
    <Drawer.Screen
      options={{
        drawerIcon: () => (
          <MaterialCommunityIconsI name="heart" size={23} color="#e91e63" />
        ),
      }}
      name="My Wishlist"
      component={WishlistDrawer}
    />
    <Drawer.Screen name="Help Center" component={HelpDrawer} />
    <Drawer.Screen name="Privacy Policy" component={PrivacyDrawer} />
    <Drawer.Screen name="About Us" component={AboutScreen} />
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
