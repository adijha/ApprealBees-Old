import React, {useState} from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import Header from '../components/Header';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
        <Image source={{uri: imgShow}} style={styles.image} />
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
            <Image
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
            <Image
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
            <Image
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
            <Image
              source={{uri: props.route.params.img3}}
              style={styles.smallImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Text style={styles.price}>₹ {props.route.params.price}</Text>
      </ScrollView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 19,
    marginTop: 20,
  },
  price: {
    fontSize: 19,
    marginTop: 20,
    color: 'red',
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
