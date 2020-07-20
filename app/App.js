import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MainNavigator from './navigation/mainNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const CartContext = React.createContext([]);
export default function App() {
  const [cartProduct, setCartProduct] = useState([
    {
      title: 'Realme XT (6gb)',
      img: 'https://source.unsplash.com/weekly?app',

      price: '10,000',

      color: 'green',
      size: '32',
    },
    {
      title: 'Realme X (8gb)',
      img: 'https://source.unsplash.com/weekly?app',

      price: '10,000',

      color: 'green',
      size: '32',
    },
    {
      title: 'Realme XT (6gb)',
      img: 'https://source.unsplash.com/weekly?app',

      price: '10,000',

      color: 'green',
      size: '32',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <CartContext.Provider>
        <MainNavigator />
      </CartContext.Provider>
    </SafeAreaView>
  );
}
