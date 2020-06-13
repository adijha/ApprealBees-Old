import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
const Screen = props => {
  const navigation = useNavigation();
  const [imgShow, setImgShow] = useState(props.route.params.img);
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title={props.route.params.title}
        leftIcon
        leftAction={() => navigation.goBack()}
        rightAction={() => props.navigation.navigate('Cart')}
        rightIcon
      />
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 30,
            paddingBottom: 20,
          }}>
          <FastImage source={{uri: imgShow}} style={styles.image} />
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.img)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.img ? '#F14436' : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.img}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.img1)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.img1 ? '#F14436' : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.img1}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.img2)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.img2 ? '#F14436' : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.img2}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setImgShow(props.route.params.img3)}
              style={[
                styles.imageClick,
                {
                  borderColor:
                    imgShow === props.route.params.img3 ? '#F14436' : '#000',
                },
              ]}>
              <FastImage
                source={{uri: props.route.params.img3}}
                style={styles.smallImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 9,
            paddingBottom: 10,
          }}>
          <Text style={styles.title}>{props.route.params.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                fontSize: 22,
                marginTop: 5,
                color: 'red',
                marginRight: 15,
              }}>
              ₹ {props.route.params.price}
            </Text>
            <Text
              style={{
                color: 'grey',
                marginRight: 15,
                marginTop: 7,
                textDecorationLine: 'line-through',
              }}>
              ₹ 4999
            </Text>
            <Text
              style={{
                color: '#00A650',
                fontSize: 14,
                marginTop: 7,
                fontWeight: '100',
              }}>
              56% off
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              paddingHorizontal: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#00A650',
                padding: 2,
                paddingHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: '#fff', marginRight: 10, fontSize: 13}}>
                4.3
              </Text>
              <FontAwesomeI name="star" size={10} color="#fff" />
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                marginTop: 3,
                fontWeight: '100',
                marginLeft: 10,
              }}>
              43 ratings & 7 reviews
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              paddingHorizontal: 30,
            }}>
            <Text style={{color: '#696969'}}>Avalibality: </Text>
            <Text style={{color: 'green'}}>In stock</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 7,
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#E8E8E8',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRightColor: '#E8E8E8',
                borderRightWidth: 1,
                flex: 1,
                justifyContent: 'center',
                padding: 7,
              }}>
              <FontAwesomeI name="share" size={16} color="#939393" />
              <Text style={{marginLeft: 15, color: '#939393'}}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRightColor: '#E8E8E8',
                borderRightWidth: 1,
                flex: 1,
                justifyContent: 'center',
                padding: 7,
              }}>
              <FontAwesomeI name="clone" size={16} color="#939393" />
              <Text style={{marginLeft: 15, color: '#939393'}}>Similar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderRightColor: '#E8E8E8',
                flex: 1,
                justifyContent: 'center',
                padding: 7,
              }}>
              <FontAwesomeI name="heart" size={16} color="#939393" />
              <Text style={{marginLeft: 15, color: '#939393'}}>Wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}>
          <Text style={{marginBottom: 10, color: '#999999'}}>Size :</Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text style={{fontSize: 16, color: '#757575'}}>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
              flex: 1,
              backgroundColor: '#fff',
            }}>
            <Text style={{fontSize: 20}}>GO TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
              flex: 1,
              backgroundColor: '#00ACEC',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 30,
  // },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 310,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    marginTop: 10,
    paddingHorizontal: 30,
  },
  price: {
    fontSize: 19,
    marginTop: 7,
    color: 'red',
    paddingHorizontal: 30,
  },
  smallImage: {
    width: 50,
    resizeMode: 'cover',
    height: 50,
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'center',
    marginTop: -20,
  },
  imageClick: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 1,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
