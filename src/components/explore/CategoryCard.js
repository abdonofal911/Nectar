import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import {useNavigation} from '@react-navigation/native';

// {
//     id: 'cat1',
//     title: 'Fresh Fruits & Vegetable',
//     image: {
//       uri: 'https://freepngimg.com/save/174865-and-vegetables-organic-fruits-hd-image-free/650x400',
//     },
//   },

const CategoryCard = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Products', {title: item.title})}
      style={[
        styles.container,
        {
          backgroundColor:
            index % 2 === 0 ? Colors.lightGreen : Colors.lightOrange,
          borderColor: index % 2 === 0 ? Colors.mainColor : Colors.orange,
        },
      ]}>
      <Image
        source={{uri: item.image.uri}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: scale(175),
    height: vScale(190),
    borderRadius: vScale(18),
    marginHorizontal: scale(7.5),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(112),
    height: vScale(75),
    marginBottom: vScale(27),
  },
  itemTitle: {
    fontFamily: Font.Medium,
    fontSize: fontScale(15),
    textAlign: 'center',
    color: Colors.black,
    maxWidth: scale(124),
  },
});
