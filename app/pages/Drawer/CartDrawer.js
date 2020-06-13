import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FeatherI from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';

const CartScreen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="My Cart"
        rightAction={() => props.navigation.navigate('My Cart')}
      />
      <View style={[styles.container, {marginHorizontal: 10}]}>
        <View style={styles.itemarea}>
          <View style={{margin: 10}}>
            <FastImage
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/2360/8505/products/Fancy_Sea_Blue_Women_s_Top_1100x.jpg?v=1532429592',
              }}
              style={{width: 100, height: 100}}
            />
          </View>

          <View style={{margin: 10}}>
            <Text style={{fontSize: 20, margin: 2}}>Green Top</Text>

            <Text style={{fontSize: 14, margin: 2, color: '#819088'}}>
              Size: S Color: Green
            </Text>
            <Text style={{fontSize: 24, color: '#1FB5EE'}}>$20</Text>
          </View>
          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              marginLeft: 50,
              alignItems: 'center',
            }}>
            <FeatherI name="plus" size={25} color="#D0D0D0" />
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#fafafa',
                borderWidth: 1,
                borderColor: '#F8F8F8',
                borderRadius: 10,
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 25, margin: 2, color: '#1FB5EE'}}>2</Text>
            </View>
            <FeatherI name="minus" size={25} color="#D0D0D0" />
          </View>
        </View>

        <View style={styles.itemarea}>
          <View style={{margin: 10}}>
            <FastImage
              source={{
                uri:
                  'https://rukminim1.flixcart.com/image/714/857/jkcwakw0/top/y/t/h/m-parrotgreen-gmi-original-imaf7qfr7jd8ybhc.jpeg?q=50',
              }}
              style={{width: 100, height: 100}}
            />
          </View>

          <View style={{margin: 10}}>
            <Text style={{fontSize: 20, margin: 2}}>Green Top</Text>

            <Text style={{fontSize: 14, margin: 2, color: '#819088'}}>
              Size: S Color: Green
            </Text>
            <Text style={{fontSize: 24, color: '#1FB5EE'}}>$20</Text>
          </View>
          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              marginLeft: 50,
              alignItems: 'center',
            }}>
            <FeatherI name="plus" size={25} color="#D0D0D0" />
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#fafafa',
                borderWidth: 1,
                borderColor: '#F8F8F8',
                borderRadius: 10,
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 25, margin: 2, color: '#1FB5EE'}}>2</Text>
            </View>
            <FeatherI name="minus" size={25} color="#D0D0D0" />
          </View>
        </View>

        <View style={styles.itemarea}>
          <View style={{margin: 10}}>
            <FastImage
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/61wUPBHzY3L._UX522_.jpg',
              }}
              style={{width: 100, height: 100}}
            />
          </View>

          <View style={{margin: 10}}>
            <Text style={{fontSize: 20, margin: 2}}>Green Top</Text>

            <Text style={{fontSize: 14, margin: 2, color: '#819088'}}>
              Size: S Color: Green
            </Text>
            <Text style={{fontSize: 24, color: '#1FB5EE'}}>$20</Text>
          </View>

          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              marginLeft: 50,
              alignItems: 'center',
            }}>
            <FeatherI name="plus" size={25} color="#D0D0D0" />
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#fafafa',
                borderWidth: 1,
                borderColor: '#F8F8F8',
                borderRadius: 10,
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 25, margin: 2, color: '#1FB5EE'}}>2</Text>
            </View>
            <FeatherI name="minus" size={25} color="#D0D0D0" />
          </View>
        </View>

        <View style={styles.pricebar}>
          <View>
            <Text style={{fontSize: 14, marginBottom: 5}}>Price (6 items)</Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#819088'}}>
              Delivery
            </Text>
            <Text style={{fontSize: 15, marginBottom: 5, color: '#819088'}}>
              Total Amount{' '}
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
        <View style={styles.continue}>
          <View>
            <Text style={{fontSize: 26, margin: 20}}>₹ 12,495</Text>
          </View>

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
    backgroundColor: '#EDF1F6',
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
    // width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
});
