import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SocialButton = ({google, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrap}>
      <View />

      <Text style={{width: 49, borderRightColor: '#999', borderRightWidth: 1}}>
        F
      </Text>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: 100}}>
        <Text style={styles.title}>{google ? 'Google' : 'Facebook'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonWrap: {
    height: 49,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#999999',
  },
  title: {
    fontSize: 17,
    color: '#666666',
  },
});
