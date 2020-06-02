import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//categories
import ElectronicsScreen from '../Categories/ElectronicsScreen';
import KitchenScreen from '../Categories/KitchenScreen';
import MenScreen from '../Categories/MenScreen';
import MoreCategoriesScreen from '../Categories/MoreCategoriesScreen';
import OffersScreen from '../Categories/OffersScreen';
//icons
import IoniconsI from 'react-native-vector-icons/Ionicons';
import EntypoI from 'react-native-vector-icons/Entypo';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();

function MyTabs(props) {
  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Shop"
        rightAction={() => props.navigation.navigate('Cart')}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        rightIcon
      />
    ),
  });
  return (
    <Tab.Navigator
      initialRouteName="Offers"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fafafa',
        indicatorStyle: {backgroundColor: '#F45245'},
        labelStyle: {fontSize: 12},
        showIcon: true,
        style: {backgroundColor: '#F45245', height: 78},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Offers') {
            iconName = 'price-tag';
            return <EntypoI name={iconName} size={25} color={color} />;
          } else if (route.name === 'Electronics') {
            return <EntypoI name="mobile" size={25} color={color} />;
          } else if (route.name === 'Men') {
            return <FontAwesome5I name="tshirt" size={20} color={color} />;
          } else if (route.name === 'Kitchen') {
            return (
              <MaterialCommunityIconsI name="lamp" size={25} color={color} />
            );
          } else if (route.name === 'More') {
            return <IoniconsI name="md-apps" size={30} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Offers" component={OffersScreen} />
      <Tab.Screen name="Electronics" component={ElectronicsScreen} />
      <Tab.Screen name="Men" component={MenScreen} />
      <Tab.Screen
        name="Kitchen"
        component={KitchenScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen name="More" component={MoreCategoriesScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({});
