import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const CurrentLocation = () => {
  return (
    <View>
      <Image style={styles.logo} source={images.orangeSmallLogo} />
      <View style={styles.row}>
        <Icon name="location-pin" size={18} />
        <Text style={styles.addressText}>Dhaka, Banassre</Text>
      </View>
    </View>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  logo: {width: scale(27), height: vScale(31), alignSelf: 'center'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vScale(10),
  },
  addressText: {
    marginStart: scale(5),
    color: Colors.black,
    fontSize: fontScale(18),
    fontFamily: Font.Regular,
  },
});
