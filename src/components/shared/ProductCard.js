import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/Entypo';

// {
//   id: 'dgw4344cwgjcdwjd',
//   title: '',
//   image: {
//     uri: '',
//   },
//   price: '12.8',
//   pricing_type: '1kg, Priceg',
// },

const ProductCard = ({item, marginHorizontal}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetails', {item})}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: item.image.uri,
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.pricing_type}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>${item.price}</Text>
        {/* <Image source={images.plusicon} style={styles.plus} /> */}

        <Pressable style={styles.button}>
          <FontAwesome6 name="plus" color="white" size={30} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  button: {
    width: vScale(40),
    height: vScale(40),
    backgroundColor: Colors.mainColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: fontScale(30),
    color: 'white',
  },
  container: {
    width: scale(174),
    borderRadius: scale(18),
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  image: {
    width: scale(100),
    height: vScale(80),
    alignSelf: 'center',
    marginTop: vScale(25),
  },
  title: {
    fontFamily: Font.Medium,
    color: Colors.black,
    fontSize: fontScale(16),
    marginStart: scale(12),
    marginTop: vScale(25),
  },
  subTitle: {
    fontFamily: Font.Light,
    color: Colors.black,
    fontSize: fontScale(12),
    marginStart: scale(15),
    marginTop: vScale(5),
  },
  price: {
    fontSize: fontScale(18),
    fontFamily: Font.Medium,
    color: Colors.black,
  },
  plus: {
    width: scale(40),
    height: vScale(40),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: vScale(15),
    paddingHorizontal: scale(15),
    alignItems: 'center',
    marginTop: vScale(20),
  },
});
