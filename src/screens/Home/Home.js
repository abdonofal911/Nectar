import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ContainerView from '../../components/shared/ContainerView';
import {CurrentLocation, HomeSlider} from '../../components/home';
import SearchBar from '../../components/shared/SearchBar';
import Spacer from '../../components/shared/Spacer';
import ProductsViewer from '../../components/shared/ProductsViewer';

import CategoryHeader from '../../components/shared/CategoryHeader';
import SidesList from '../../components/home/SidesList';
import Colors from '../../themes/Colors';
import {fruitsList} from '../../dummyData';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ContainerView>
        <CurrentLocation />
        <Spacer space={20} />
        <SearchBar />
        <HomeSlider />
        <CategoryHeader categoryLabel="Exclusive Offer" />
        <Spacer space={22} />
        <ProductsViewer data={fruitsList} />
        <Spacer space={30} />
        <CategoryHeader categoryLabel="Best Selling" />
        <Spacer space={22} />
        <ProductsViewer data={fruitsList} />
        <Spacer space={30} />
        <CategoryHeader categoryLabel="Groceries" />
        <Spacer space={22} />
        <SidesList />
        <Spacer space={22} />
        <ProductsViewer data={fruitsList} />
      </ContainerView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
});
