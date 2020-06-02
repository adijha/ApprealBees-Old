import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import Button from './Button';
const Card = ({img, text, onPress, title, btn}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{uri: img}} style={styles.image} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 7,
        }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Button style={{width: 100}} title={btn} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  text: {
    paddingBottom: 15,
    fontSize: 14,
    color: 'grey',
    // alignSelf: 'center',
  },
  title: {
    paddingTop: 10,
    fontSize: 17,
    color: 'black',
    // alignSelf: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
  btn: {
    width: 120,
    backgroundColor: '#F14436',
  },
});
