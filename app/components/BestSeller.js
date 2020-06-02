import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Hr from './Hr';
import ProductCard from './ProductCard';
const Card = ({img, text, onPress, title, btn}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Hr />
      <Text style={styles.title}>BEST SELLERS</Text>
      <Hr />
      <View style={[styles.product, {marginTop: 10}]}>
        <ProductCard
          img="https://source.unsplash.com/weekly?pink%20girl"
          text="Pink Shirt"
          price="49"
        />
        <ProductCard
          img="https://source.unsplash.com/weekly?camera"
          text="Canon Camera"
          price="4900"
        />
      </View>
      <View style={styles.product}>
        <ProductCard
          img="https://source.unsplash.com/weekly?app"
          text="Realme XT (6gb)"
          price="10,000"
        />
        <ProductCard
          img="https://source.unsplash.com/weekly?beard"
          text="Mi trimmer"
          price="900"
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    marginTop: 10,
  },
  text: {
    paddingBottom: 15,
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  btn: {width: 100},
  product: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
