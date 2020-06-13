import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Hr from './Hr';
import ProductCard from './ProductCard';

import {useNavigation} from '@react-navigation/native';
const Card = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Hr />
      <Text style={styles.title}>{props.title}</Text>
      <Hr />
      <View style={[styles.product, {marginTop: 10}]}>
        <ProductCard
          img="https://source.unsplash.com/weekly?pink%20girl"
          text="Pink Shirt"
          price="49"
          onPress={() =>
            navigation.push('Product', {
              title: 'Pink Shirt',
              img: 'https://source.unsplash.com/weekly?pink%20girl',
              img1: 'https://source.unsplash.com/weekly?pink%20baby',
              img2: 'https://source.unsplash.com/weekly?pink%20child',
              img3: 'https://source.unsplash.com/weekly?pink%20lady',
              price: '49',
            })
          }
        />
        <ProductCard
          img="https://source.unsplash.com/weekly?hammer"
          text="Canon Hammer"
          price="4900"
          onPress={() =>
            navigation.push('Product', {
              title: 'Canon Hammer',
              img: 'https://source.unsplash.com/weekly?hammer',
              img1: 'https://source.unsplash.com/weekly?wood',
              img2: 'https://source.unsplash.com/weekly?pin',
              img3: 'https://source.unsplash.com/weekly?axe',
              price: '4900',
            })
          }
        />
      </View>
      <View style={styles.product}>
        <ProductCard
          img="https://source.unsplash.com/weekly?app"
          text="Realme XT (6gb)"
          price="10,000"
          onPress={() =>
            navigation.push('Product', {
              title: 'Realme XT (6gb)',
              img: 'https://source.unsplash.com/weekly?app',
              img1: 'https://source.unsplash.com/weekly?phone',
              img2: 'https://source.unsplash.com/weekly?mobile',
              img3: 'https://source.unsplash.com/weekly?android',
              price: '10,000',
            })
          }
        />
        <ProductCard
          img="https://source.unsplash.com/weekly?beard"
          text="Mi trimmer"
          price="900"
          onPress={() =>
            navigation.push('Product', {
              title: 'Mi trimmer',
              img: 'https://source.unsplash.com/weekly?beard',
              img1: 'https://source.unsplash.com/weekly?trimmer',
              img2: 'https://source.unsplash.com/weekly?sissor',
              img3: 'https://source.unsplash.com/weekly?trim',
              price: '900',
            })
          }
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
