import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import MenScreen from '../Categories/MenScreen';
const OffersScreen = props => {
  return (
    <>
      <Header
        route={props.route}
        navigation={props.navigation}
        title="Men"
        leftIcon
        leftAction={() => props.navigation.openDrawer()}
        ham
      />
      <ScrollView style={styles.container}>
        <MenScreen />
      </ScrollView>
    </>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 7,
  },
});
