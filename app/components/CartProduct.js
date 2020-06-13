import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FeatherI from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';

const CartProduct = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 28,
          justifyContent: 'space-between',
          borderBottomColor: '#F1F1F1',
          borderBottomWidth: 1,
          paddingVertical: 10,
        }}>
        <View
          style={{
            borderRadious: 10,
            borderColor: 'grey',
            borderWidth: 0.2,
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 3,
          }}>
          <FastImage
            source={{
              uri: props.img,
            }}
            style={{
              width: 80,
              resizeMode: 'cover',
              height: 80,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{}}>
          <Text style={{fontSize: 20}}>{props.product}</Text>
          <Text style={{fontSize: 14, color: '#819088'}}>
            Size: {props.size} Color: {props.color}
          </Text>
          <Text style={{fontSize: 23, color: '#1FB5EE'}}>₹ 20</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FeatherI name="plus" size={25} color="#D0D0D0" />
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#fafafa',
              borderWidth: 1,
              borderColor: '#F8F8F8',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 3,
            }}>
            <Text style={{fontSize: 25, color: '#1FB5EE'}}>
              {props.quantity}
            </Text>
          </View>
          <FeatherI name="minus" size={25} color="#D0D0D0" />
        </View>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({});
