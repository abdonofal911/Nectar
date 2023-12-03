import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import ProductCard from './ProductCard';
import Font from '../../themes/Font';

const ProductsViewer = ({data}) => {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item, index}) => <ProductCard item={item} />}
        contentContainerStyle={{
          paddingHorizontal: scale(25),
        }}
        ItemSeparatorComponent={() => <View style={{width: scale(15)}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsViewer;

const styles = StyleSheet.create({});
