import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//icons
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FeatherI from 'react-native-vector-icons/Feather';
import AntDesignI from 'react-native-vector-icons/AntDesign';

const Header = ({
  title,
  route,
  navigation,
  rightText,
  rightIcon,
  noBack,
  rightAction,
  leftAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.backCover}>
          {!noBack ? (
            <TouchableOpacity style={styles.leftText} onPress={leftAction}>
              <FeatherI name="menu" size={25} color="#fff" />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightCover}>
          {rightText ? (
            <TouchableOpacity onPress={rightAction}>
              <Text style={styles.rightText}>{rightText}</Text>
            </TouchableOpacity>
          ) : rightIcon ? (
            <TouchableOpacity
              onPress={rightAction}
              style={styles.rightIconCover}>
              <FontAwesomeI name="shopping-cart" size={25} color="#fff" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Search for Products, Brands and More"
        />
        <TouchableOpacity style={{marginRight: 15}}>
          <AntDesignI name="search1" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F45245',
    height: 110,
  },
  flex: {
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
  leftText: {
    marginTop: 16,
    marginLeft: 19,
  },
  rightIconCover: {
    marginTop: 16,
  },
  input: {flex: 1, fontSize: 16, paddingLeft: 20},
  search: {
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
