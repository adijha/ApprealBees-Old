import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Button = ({title, style, onPress, outline, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonWrap,
        style,
        {
          backgroundColor: outline ? '#fff' : '#F14436',
          borderColor: '#999999',
          borderWidth: outline ? 1 : 0,
          width: loading ? 49 : 320,
          borderRadius: loading ? 50 : 2,
        },
      ]}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={[styles.title, {color: outline ? '#F14436' : '#ffffff'}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: '#F14436',
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    color: '#ffffff',
  },
});
