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

const HomeScreen = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    checkLogin();
  });
  const checkLogin = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  };

  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Shop"
        noBack
      />
    ),
  });

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Text style={{textAlign: 'center', marginVertical: 50, fontSize: 20}}>
        This is home Screen
      </Text>
      {loggedIn ? <Button title="Log Out" onPress={logOut} /> : null}
    </View>
  );
};

function MyTabs(props) {
  props.navigation.setOptions({
    header: () => (
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Shop"
        noBack
      />
    ),
  });
  return (
    <Tab.Navigator
      initialRouteName="Offers"
      tabBarOptions={{
        activeTintColor: '#fff',
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
