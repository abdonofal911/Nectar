import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {fruitsList} from '../../dummyData';
import ProductCard from '../../components/shared/ProductCard';
import Spacer from '../../components/shared/Spacer';

const Products = ({navigation, route}) => {
  const list = fruitsList;
  const {title} = route.params;
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerRow}>
        <Entypo
          name="chevron-left"
          size={18}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText}>{title}</Text>
        <AntDesign name="filter" size={18} />
      </View>
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <View style={styles.cardContainer}>
            <ProductCard item={item} index={index} />
          </View>
        )}
        contentContainerStyle={{
          alignSelf: 'center',
        }}
        ItemSeparatorComponent={() => <Spacer space={15} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    alignItems: 'center',
    marginBottom: vScale(15),
  },
  titleText: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(19),
  },
  cardContainer: {
    marginHorizontal: vScale(7.5),
  },
});
