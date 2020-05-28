import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SocialButton = ({google, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrap}>
      <Text style={styles.title}>{google ? 'Google' : 'Facebook'}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonWrap: {
    height: 49,
    borderRadius: 4,
    borderWidth: 1,
  },
  title: {
    fontSize: 17,
    color: '#222222',
  },
});
