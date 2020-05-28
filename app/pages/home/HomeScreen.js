import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = props => {
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('Auth');
  };

  return (
    <View>
      <Text>HomeScreen HomeScreen</Text>
      <Button title="Log Out" onPress={logOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
