import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Header = ({
  title,
  route,
  navigation,
  rightText,
  rightIcon,
  noBack,
  rightAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backCover}>
        {!noBack ? <Text style={styles.rightText}>{rightText}</Text> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightCover}>
        {rightText ? (
          <TouchableOpacity onPress={rightAction}>
            <Text style={styles.rightText}>{rightText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F45245',
    height: 60,
    flexDirection: 'row',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
    flex: 1,
  },
  rightText: {
    fontSize: 16,
    marginTop: 16,
    marginRight: 15,
    color: '#fefefe',
  },
  rightCover: {
    width: 50,
  },
  backCover: {
    width: 50,
  },
});
