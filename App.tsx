import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { ProductList } from './components/ProductList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to the Farm-to-Table App!</Text>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;