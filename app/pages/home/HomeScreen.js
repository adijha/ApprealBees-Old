import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';

const HomeScreen = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    checkLogin();
  });
  const checkLogin = async () => {
    let token = AsyncStorage.getItem('token');
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

export default HomeScreen;

const styles = StyleSheet.create({});
