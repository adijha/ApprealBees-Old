import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import {ScrollView} from 'react-native-gesture-handler';

const CartScreen = props => {
  const [firstQuantity, setFirstQuantity] = useState(3);
  const [secondQuantity, setsecondQuantity] = useState(3);
  const [thirdQuantity, setthirdQuantity] = useState(3);
  const [price1, setprice1] = useState(200);
  const [price2, setprice2] = useState(200);
  const [price3, setprice3] = useState(200);
  const [totalPrice, setTotalPrice] = useState(600);

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
            quantity={firstQuantity}
            price={price1 * firstQuantity}
            img="https://source.unsplash.com/weekly?pink%20girl"
            plusPress={() => {
              if (firstQuantity > 0) {
                setFirstQuantity(firstQuantity + 1);
              }
            }}
            minusPress={() => {
              if (firstQuantity > 0) {
                setFirstQuantity(firstQuantity - 1);
              }
            }}
          />
          <CartProduct
            product="Red Pant"
            size="L"
            color="Grey"
            quantity={secondQuantity}
            price={price2 * secondQuantity}
            img="https://source.unsplash.com/weekly?red%20girl"
            plusPress={() => {
              if (secondQuantity > 0) {
                setsecondQuantity(secondQuantity + 1);
              }
            }}
            minusPress={() => {
              if (secondQuantity > 0) {
                setsecondQuantity(secondQuantity - 1);
              }
            }}
          />
          <CartProduct
            product="Yellow Pant"
            size="XL"
            color="Yellow"
            quantity={thirdQuantity}
            price={price3 * thirdQuantity}
            img="https://source.unsplash.com/weekly?yellow%20girl"
            plusPress={() => {
              if (thirdQuantity > 0) {
                setthirdQuantity(thirdQuantity + 1);
              }
            }}
            minusPress={() => {
              if (thirdQuantity > 0) {
                setthirdQuantity(thirdQuantity - 1);
              }
            }}
          />
        </ScrollView>

        <View style={styles.bar}>
          <View>
            <Text style={{fontSize: 14, marginBottom: 5}}>Items: </Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
              Delivery
            </Text>
            <Text style={{fontSize: 15, marginBottom: 5, color: '#819088'}}>
              Total Amount
            </Text>
          </View>
          <View style={{marginRight: 10}}>
            <Text style={{fontSize: 14, marginBottom: 5}}>
              ₹ {firstQuantity + secondQuantity + thirdQuantity}
            </Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#25E786'}}>
              Free
            </Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
              ₹{' '}
              {price1 * firstQuantity +
                price2 * secondQuantity +
                price3 * thirdQuantity}
            </Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={{fontSize: 26, margin: 20}}>
            ₹{' '}
            {price1 * firstQuantity +
              price2 * secondQuantity +
              price3 * thirdQuantity}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate('Checkout')}>
            <Text style={styles.btnText}>Continue</Text>
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
  bar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  btn: {
    height: 50,
    width: 170,
    backgroundColor: '#F45245',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {color: '#ffffff', fontSize: 20, margin: 10},
  price: {
    paddingBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
});
