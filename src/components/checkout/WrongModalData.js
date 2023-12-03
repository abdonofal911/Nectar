import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from '../shared/AppButton';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Font from '../../themes/Font';
import Colors from '../../themes/Colors';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const WrongModalData = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={images.oops} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Oops! Order Failed</Text>
        <Text style={styles.infoText}>Something went wrong.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Please Try Again"
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={styles.tryAgainButton}
        />
        <AppButton
          onPress={() => {
            navigation.navigate('Home');
          }}
          title="Back to home"
          style={styles.homeButton}
          textStyle={styles.homeButtonText}
        />
      </View>
    </View>
  );
};

export default WrongModalData;

const styles = StyleSheet.create({
  image: {
    height: vScale(222),
    width: scale(222),
    alignSelf: 'center',
    marginTop: vScale(40),
  },
  textContainer: {
    marginTop: 25,
  },
  headerText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(28),
    color: Colors.black,
    textAlign: 'center',
  },
  infoText: {
    marginTop: vScale(15),
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.label,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: vScale(65),
  },
  tryAgainButton: {width: scale(313)},
  homeButton: {
    backgroundColor: Colors.white,
    width: scale(313),
  },
  homeButtonText: {
    color: Colors.black,
  },
});
