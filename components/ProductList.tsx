import React from 'react';
import { View, Text, FlatList } from 'react-native';

const products = [
  { id: '1', name: 'Organic Tomatoes', price: '$2.99/lb' },
  { id: '2', name: 'Fresh Lettuce', price: '$1.99/head' },
  { id: '3', name: 'Free-Range Eggs', price: '$4.99/dozen' },
];

const ProductList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
    />
  );
};

export default ProductList;