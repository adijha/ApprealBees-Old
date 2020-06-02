import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../../components/Card';
const OffersScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        img="https://source.unsplash.com/weekly?laptop"
        title="New Arrival"
        text="Summer's 16 Collection"
        btn="Shop Now"
      />
    </View>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
  },
});
