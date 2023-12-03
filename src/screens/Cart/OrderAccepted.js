import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import AppButton from '../../components/shared/AppButton';
import AppModal from '../../components/shared/AppModal';
import {WrongModalData} from '../../components/checkout';

const OrderAccepted = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={images.accepted} style={styles.image} />
      <Text style={styles.orderAcceptedText}>Your Order has been accepted</Text>
      <Text style={styles.infoText}>
        Your items has been placed and is on it’s way to being processed
      </Text>
      <View style={styles.buttonsContainer}>
        <AppButton title="Track Order" onPress={() => setShowModal(true)} />
        <AppButton
          onPress={() => navigation.navigate('Home')}
          title="Back to home"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
      <AppModal isVisible={showModal} onClose={() => setShowModal(false)}>
        <WrongModalData />
      </AppModal>
    </View>
  );
};

export default OrderAccepted;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: Colors.white},
  image: {
    width: scale(270),
    height: vScale(240),
    marginTop: vScale(150),
    marginBottom: vScale(66),
  },
  orderAcceptedText: {
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(24),
    maxWidth: scale(240),
    textAlign: 'center',
  },
  infoText: {
    color: Colors.label,
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    maxWidth: scale(240),
    textAlign: 'center',
    marginTop: vScale(20),
  },
  buttonsContainer: {
    marginTop: vScale(100),
  },
  homeButton: {
    backgroundColor: Colors.white,
  },
  homeButtonText: {
    color: Colors.black,
  },
});
