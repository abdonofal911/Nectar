import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../shared/AppButton';
import {useNavigation} from '@react-navigation/native';

const CheckoutSheetData = ({onClose}) => {
  const navigation = useNavigation();
  const handlePlaceOrderAndSubmit = () => {
    onClose();
    navigation.navigate('OrderAccepted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Checkout</Text>
        <Ionicons name="close-outline" size={25} onPress={onClose} />
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>Delivery</Text>
        <View style={styles.rowRightRow}>
          <Text style={styles.rightRowText}>Select Method</Text>
          <Ionicons name="chevron-forward" size={18} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>Payment</Text>
        <View style={styles.rowRightRow}>
          <MaterialIcons
            name="credit-card"
            size={18}
            style={{marginEnd: scale(10)}}
          />
          <Ionicons name="chevron-forward" size={18} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>Promo Code</Text>
        <View style={styles.rowRightRow}>
          <Text style={styles.rightRowText}>Pick discount</Text>
          <Ionicons name="chevron-forward" size={18} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLeftText}>Total Cost</Text>
        <View style={styles.rowRightRow}>
          <Text style={styles.rightRowText}>$13.97</Text>
          <Ionicons name="chevron-forward" size={18} />
        </View>
      </View>
      <View style={styles.termsAndConditions}>
        <Text style={styles.termsAndConditionsText}>
          By placing an order you agree to our
          <Text style={{color: Colors.black}}> Terms</Text> And
          <Text style={{color: Colors.black}}> Conditions</Text>
        </Text>
      </View>
      <AppButton
        title="Place Order"
        style={styles.button}
        onPress={() => handlePlaceOrderAndSubmit()}
      />
    </View>
  );
};

export default CheckoutSheetData;

const styles = StyleSheet.create({
  container: {},
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(22),
    marginTop: vScale(12),
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: vScale(25),
  },
  headerText: {
    fontFamily: Font.Medium,
    color: Colors.black,
    fontSize: fontScale(22),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vScale(20),
    marginHorizontal: scale(22),
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: vScale(25),
  },
  rowLeftText: {
    fontSize: fontScale(16),
    fontFamily: Font.Regular,
    color: Colors.label,
  },
  rowRightRow: {flexDirection: 'row'},
  rightRowText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(14),
    marginEnd: scale(10),
  },
  termsAndConditions: {
    marginHorizontal: scale(22),
    marginTop: vScale(20),
    maxWidth: scale(200),
    marginBottom: vScale(22),
  },
  termsAndConditionsText: {
    lineHeight: vScale(21),
    fontFamily: Font.Regular,
    fontSize: fontScale(12),
    color: Colors.label,
  },
});
