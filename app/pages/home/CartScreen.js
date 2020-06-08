import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
const CartScreen = props => {
  return (
    <View>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Cart"
        rightAction={() => props.navigation.navigate('Cart')}
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <View style={styles.container}>
        <Text>vCartScreen CartScreen</Text>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
