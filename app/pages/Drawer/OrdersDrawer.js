import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import OrderProduct from '../../components/OrderProduct';

const Screen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.name}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <ScrollView style={styles.container}>
        <OrderProduct
          product="OnePlus Bullets Wireless Z Bluetooth Headset"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?oneplus"
          rating={5}
        />
        <OrderProduct
          product="Lipstick"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?lipstick"
          rating={3}
        />
        <OrderProduct
          product="Hilander Tshirt"
          date="17 aug 1990"
          img="https://source.unsplash.com/weekly?wear"
          rating={3}
        />
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 17,
  },
});
