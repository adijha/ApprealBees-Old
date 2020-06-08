import React from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../components/Header';

import {useNavigation} from '@react-navigation/native';
const Screen = props => {
  const navigation = useNavigation();
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.name}
        leftIcon
        leftAction={() => navigation.goBack()}
      />
      <ScrollView style={styles.container} />
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 7,
  },
});
