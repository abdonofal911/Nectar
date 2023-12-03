import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import {fontScale, scale} from '../../themes/Scale';
import Font from '../../themes/Font';

const CategoryHeader = ({categoryLabel}) => {
  return (
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryLabel}>{categoryLabel}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  seeAll: {color: Colors.mainColor},
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
  },
  categoryLabel: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(22),
  },
});
