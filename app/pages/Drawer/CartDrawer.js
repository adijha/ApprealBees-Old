import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import {ScrollView} from 'react-native-gesture-handler';

const CartScreen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="My Cart"
        rightAction={() => props.navigation.navigate('My Cart')}
      />
      <View style={{backgroundColor: '#fff'}}>
        <ScrollView>
          <CartProduct
            product="Green Top"
            size="S"
            color="Green"
            quantity={2}
            price={2220}
            img="https://source.unsplash.com/weekly?pink%20girl"
          />
          <CartProduct
            product="Red Pant"
            size="L"
            color="Grey"
            quantity={1}
            price={2100}
            img="https://source.unsplash.com/weekly?red%20girl"
          />
          <CartProduct
            product="Yellow Pant"
            size="XL"
            color="Yellow"
            quantity={3}
            price={2100}
            img="https://source.unsplash.com/weekly?yellow%20girl"
          />
        </ScrollView>

        <View style={styles.pricebar}>
          <View>
            <Text style={{fontSize: 14, marginBottom: 5}}>Price (6 items)</Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
              Delivery
            </Text>
            <Text style={{fontSize: 15, marginBottom: 5, color: '#819088'}}>
              Total Amount
            </Text>
          </View>
          <View style={{marginRight: 10}}>
            <Text style={{fontSize: 14, marginBottom: 5}}>60$</Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#25E786'}}>
              Free
            </Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
              60$
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 20,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 8,
          }}>
          <Text style={{fontSize: 26, margin: 20}}>₹ 12,495</Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              backgroundColor: '#F45245',
              borderRadius: 5,
              margin: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: 20, margin: 10}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  Navbar: {
    height: 65,
    backgroundColor: '#F45245',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    justifyContent: 'flex-start',
  },
  itemarea: {
    backgroundColor: '#ffffff',
    margin: 5,
    flexDirection: 'row',
  },
  pricebar: {
    backgroundColor: '#ffffff',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
  },
  continue: {
    backgroundColor: '#ffffff',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
});
