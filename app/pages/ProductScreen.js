import React from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import Header from '../components/Header';

import {useNavigation} from '@react-navigation/native';
const Screen = props => {
  const navigation = useNavigation();
  console.log(props.route.params.img);
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.params.title}
        leftIcon
        leftAction={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <Image source={{uri: props.route.params.img}} style={styles.image} />

        <Text style={styles.title}>{props.route.params.title}</Text>
        <Text style={styles.price}>₹ {props.route.params.price}</Text>
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    marginTop: 20,
  },
  price: {
    fontSize: 19,
    marginTop: 20,
    color: 'red',
  },
});
