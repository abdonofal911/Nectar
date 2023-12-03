import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import images from '../../assets/images';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const SidesCard = ({index}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            index % 2 == 0 ? Colors.lightOrange : Colors.lightGreen,
        },
      ]}>
      <Image source={images.rice} style={styles.image} />
      <Text style={styles.text}>Pulses</Text>
    </View>
  );
};

export default SidesCard;

const styles = StyleSheet.create({
  container: {
    width: scale(248),
    height: vScale(105),
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.gray,
  },
  image: {
    width: scale(72),
    height: vScale(72),
    marginStart: scale(15),
  },
  text: {
    color: Colors.black,
    fontFamily: Font.Regular,
    fontSize: fontScale(18),
    marginStart: scale(15),
  },
});
