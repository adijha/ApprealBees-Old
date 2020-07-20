import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../assets/colors';
import {CartContext} from '../../App';

const CartScreen = props => {
  const {cartProduct, setCartProduct} = useContext(CartContext);
  console.log(cartProduct, 'cartProduct');
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
          {cartProduct
            ? cartProduct.map((item,index) => (
                <CartProduct
                  key={index+1}
                  product={item.title}
                  size={item.size}
                  color={item.color}
                  quantity={item.quantity?item.quantity:1}
                  price={item.price * item.quantity}
                  img={item.img}
                  plusPress={() => {
                    if (item.quantity > 0) {
                      setFirstQuantity(firstQuantity + 1);
                    }
                  }}
                  minusPress={() => {
                    if (firstQuantity > 0) {
                      setFirstQuantity(firstQuantity - 1);
                    }
                  }}
                />
              ))
            : null}
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
            <Text style={{fontSize: 14, marginBottom: 5, color: COLORS.green}}>
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
            onPress={() => console.log('asassasassaaaaaa',cartProduct)}
            // onPress={() => props.navigation.navigate('Checkout')}
            
            
            >
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
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
  },
  price: {
    paddingBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
});
