import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Shipping from './ShippingCheckout';
import Payments from './PaymentsCheckout';
import Confirmation from './ConfirmationCheckout';

//icons
import IoniconsI from 'react-native-vector-icons/Ionicons';
import EntypoI from 'react-native-vector-icons/Entypo';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();

const Checkout = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Checkout"
        rightAction={() => props.navigation.navigate('Cart')}
      />
      <Tab.Navigator
        initialRouteName="Offers"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fafafa',
          indicatorStyle: {backgroundColor: '#9E0C00'},
          labelStyle: {fontSize: 12},
          showIcon: true,
          style: {backgroundColor: '#F45245'},
        }}>
        <Tab.Screen name="Shipping" component={Shipping} />
        <Tab.Screen name="Confirmation" component={Confirmation} />
        <Tab.Screen name="Payments" component={Payments} />
      </Tab.Navigator>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  bar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  btn: {
    height: 50,
    width: 170,
    backgroundColor: '#F45245',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {color: '#ffffff', fontSize: 20, margin: 10},
  price: {
    paddingBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
});
