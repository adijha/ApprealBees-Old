import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Bag from '../../assets/icons/bag.png';
export default function LoadingScreen(props) {
  const tryLogin = useCallback(async () => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('token');
      props.navigation.navigate(token ? 'Home' : 'SignIn');
    }, 1500);
  }, [props.navigation]);
  useEffect(() => {
    tryLogin();
  }, [tryLogin]);

  return (
    <View style={styles.container}>
      <Image source={Bag} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
