import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryCard from '../../components/explore/CategoryCard';
import {Categories} from '../../dummyData';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Spacer from '../../components/shared/Spacer';
import Colors from '../../themes/Colors';
import SearchBar from '../../components/shared/SearchBar';
import Font from '../../themes/Font';

const Explore = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.headerText}>Find Products</Text>
      <SearchBar />
      <Spacer space={20} />
      <FlatList
        data={Categories.slice(0, 6)}
        renderItem={({item, index}) => (
          <CategoryCard item={item} index={index} />
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

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.black,
    textAlign: 'center',
    marginBottom: vScale(30),
  },
});
