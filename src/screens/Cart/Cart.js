import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Colors from '../../themes/Colors';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import {fruitsList} from '../../dummyData';
import AppButton from '../../components/shared/AppButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import CheckoutSheetData from '../../components/checkout/CheckoutSheetData';
import {CartItem} from '../../components/cart';

const Cart = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Cart</Text>
      </View>
      <FlatList
        data={fruitsList.slice(0, 4)}
        renderItem={({item, index}) => <CartItem item={item} index={index} />}
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={(item, index) => index}
      />
      <AppButton
        title="Go to Checkout"
        style={styles}
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        height={vScale(540)}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(10,10,10,0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
            height: 0,
          },
          container: {
            borderTopLeftRadius: vScale(30),
            borderTopRightRadius: vScale(30),
          },
        }}>
        <CheckoutSheetData onClose={() => refRBSheet.current.close()} />
      </RBSheet>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  header: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.black,
    textAlign: 'center',
    marginBottom: vScale(30),
  },
  headerContainer: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  // button: {position: 'absolute', bottom: 25},
});
