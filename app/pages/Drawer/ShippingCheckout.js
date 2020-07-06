import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../assets/colors';
const CartScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderWidth: 1,
            margin: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: COLORS.primary,
            borderRadius: 4,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              // borderRightWidth: 1,
              padding: 15,
              flex: 1,
            }}>
            <Text style={{color: '#BEB7B8', fontSize: 15}}>New address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              padding: 15,
              flex: 1,
              backgroundColor: COLORS.primary,
            }}>
            <Text style={{color: '#fff', fontSize: 15}}>Saved address</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#F0f0f0',
            borderBottomWidth: 1,
            padding: 18,
          }}>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Brajesh Patel</Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>
            1099 Blogh, Hulas Nagar
          </Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Bihar, Jharkhand</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#F0f0f0',
            borderBottomWidth: 1,
            padding: 18,
          }}>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Brajesh Patel</Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>
            1099 Blogh, Hulas Nagar
          </Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Bihar, Jharkhand</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#F0f0f0',
            borderBottomWidth: 1,
            padding: 18,
          }}>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Brajesh Patel</Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>
            1099 Blogh, Hulas Nagar
          </Text>
          <Text style={{color: '#9B9B9B', fontSize: 16}}>Bihar, Jharkhand</Text>
        </View>

        <View style={{backgroundColor: '#F1F1F1', padding: 20}}>
          <Text style={{fontSize: 18, color: '#383838'}}>Delivery</Text>
          <View
            style={{
              borderColor: '#99DBF5',
              borderWidth: 1,
              backgroundColor: '#fff',
              width: 130,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{color:COLORS.green, fontSize: 17}}>Free</Text>
            <Text style={{color:COLORS.primary, fontSize: 14}}>Standard</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: COLORS.white}}>CONTINUE TO PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  btn: {
    height: 50,
    backgroundColor:COLORS.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
