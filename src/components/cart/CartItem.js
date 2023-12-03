import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';

const CartItem = ({item, index}) => {
  const [quantity, setQuantity] = useState(1);
  const plusHandler = () => {
    setQuantity(quantity + 1);
  };

  const minusHandler = () => {
    setQuantity(quantity - 1);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image.uri}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <View style={styles.itemHeader}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.pricingType}>{item.pricing_type}</Text>
          </View>
          <Icon name="close-outline" size={18} />
        </View>
        <View style={styles.quantityPriceRow}>
          <View style={styles.quantityRow}>
            <Pressable
              onPress={minusHandler}
              disabled={quantity <= 1}
              style={styles.plusMinusContainer}>
              <Icon2 name="minus" size={17} />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={plusHandler} style={styles.plusMinusContainer}>
              <Icon2 name="plus" size={17} color={Colors.mainColor} />
            </Pressable>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: scale(365),
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: Colors.border,
  },
  image: {width: scale(70), height: vScale(64), marginEnd: scale(32)},
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(0),
    marginTop: vScale(15),
    marginBottom: vScale(18),
  },
  pricingType: {
    fontFamily: Font.Regular,
    fontSize: fontScale(12),
    color: Colors.label,
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    color: Colors.black,
    marginBottom: vScale(8),
  },
  quantityPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: vScale(30),
    alignItems: 'centerw',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusMinusContainer: {
    width: scale(40),
    height: scale(40),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black,
    borderRadius: vScale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 17,
  },
  price: {
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    color: Colors.black,
  },
});
