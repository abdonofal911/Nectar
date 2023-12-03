import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '../../themes/Scale';
import SidesCard from './SidesCard';

const SidesList = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={[0, 1, 2, 3]}
        renderItem={({item, index}) => <SidesCard index={index} />}
        contentContainerStyle={{
          paddingHorizontal: scale(25),
        }}
        ItemSeparatorComponent={() => <View style={{width: scale(15)}} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SidesList;

const styles = StyleSheet.create({});
