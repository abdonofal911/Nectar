import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Font from '../../themes/Font';
import {Rating} from 'react-native-ratings';
import AppButton from '../../components/shared/AppButton';
import ContainerView from '../../components/shared/ContainerView';

const ProductDetails = ({navigation, route}) => {
  const {item} = route.params;
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);

  const plusHandler = () => {
    setQuantity(quantity + 1);
  };

  const minusHandler = () => {
    setQuantity(quantity - 1);
  };

  const onAddToBasket = () => {
    console.log(`${quantity} Items Added To Basket`);
  };

  return (
    <ContainerView style={styles.container}>
      <View style={styles.imageContainer}>
        <SafeAreaView />
        <View style={styles.topButtons}>
          <Icon
            name="arrow-back-ios"
            size={18}
            onPress={() => navigation.goBack()}
          />
          <Icon name="ios-share" size={18} />
        </View>
        <Image
          source={{uri: item.image.uri}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.pricingType}>{item.pricing_type}</Text>
        </View>
        <Icon name="favorite-border" size={24} />
      </View>
      <View style={styles.quantityPriceRow}>
        <View style={styles.quantityRow}>
          <Pressable onPress={minusHandler} disabled={quantity <= 1}>
            <Icon2 name="minus" size={17} />
          </Pressable>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{quantity}</Text>
          </View>
          <Icon2
            name="plus"
            size={17}
            color={Colors.mainColor}
            onPress={plusHandler}
          />
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.description}>
        <View style={styles.productDetailRow}>
          <Text style={styles.productDetailText}>Product Detail</Text>
          <Icon2
            name={showDescription ? 'chevron-down' : 'chevron-right'}
            size={24}
            onPress={() => setShowDescription(!showDescription)}
          />
        </View>
        {showDescription && (
          <Text style={styles.descriptionText}>{item.description}</Text>
        )}
      </View>
      <View style={styles.nutritionRow}>
        <Text style={styles.productDetailText}>Nutritions</Text>
        <View style={styles.nutritionNext}>
          <View style={styles.weightContainer}>
            <Text style={styles.nutritionWeightText}>100gr</Text>
          </View>
          <Icon name="navigate-next" size={24} />
        </View>
      </View>
      <View style={[styles.nutritionRow, {borderBottomWidth: 0}]}>
        <Text style={styles.productDetailText}>Review</Text>
        <View style={styles.nutritionNext}>
          <View>
            <Rating readonly startingValue={5} imageSize={15} />
          </View>
          <Icon name="navigate-next" size={24} />
        </View>
      </View>
      <AppButton title="Add To Basket" onPress={onAddToBasket} />
    </ContainerView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
  imageContainer: {
    backgroundColor: Colors.gray,
    width: scale(414),
    height: vScale(350),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {width: scale(330), height: vScale(200), alignSelf: 'center'},
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(25),
    marginVertical: vScale(25),
  },
  title: {
    fontFamily: Font.Medium,
    fontSize: fontScale(24),
    color: Colors.black,
  },
  pricingType: {
    fontFamily: Font.Regular,
    fontSize: fontScale(16),
    color: Colors.label,
    marginTop: vScale(10),
  },
  quantityPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
    paddingBottom: vScale(30),
    borderBottomColor: Colors.label,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: vScale(18),
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(105),
    justifyContent: 'space-between',
  },
  quantityContainer: {
    width: scale(40),
    height: scale(40),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black,
    borderRadius: vScale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: Font.Regular,
    fontSize: fontScale(18),
    color: Colors.black,
  },
  price: {
    fontFamily: Font.Medium,
    fontSize: fontScale(24),
    color: Colors.black,
  },
  productDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vScale(10),
  },
  productDetailText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    color: Colors.black,
  },
  descriptionText: {
    color: Colors.label,
    fontSize: fontScale(14),
    fontFamily: Font.Regular,
    lineHeight: vScale(18),
  },
  description: {
    borderBottomColor: Colors.label,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: scale(25),
    paddingBottom: vScale(20),
  },
  nutritionRow: {
    marginTop: vScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(25),
    borderBottomColor: Colors.label,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: vScale(17),
  },
  nutritionNext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutritionWeightText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(9),
    color: Colors.label,
  },
  weightContainer: {
    width: scale(33.5),
    height: vScale(18),
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(7),
    marginRight: scale(20),
  },
});
