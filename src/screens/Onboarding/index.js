import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from '../../components/shared/AppButton';
import Spacer from '../../components/shared/Spacer';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const Onboarding = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      source={images.onboardingBg}
      resizeMode="cover"
      style={styles.background}>
      <Image source={images.smallLogo} style={styles.logo} />
      <Spacer space={35} />
      <Text style={styles.title}>Welcome {'\n'} to our store</Text>
      <Text style={styles.subTitle}>
        Ger your groceries in as fast as one hour
      </Text>
      <AppButton title="Get Started" onPress={handleOnPress} />
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: scale(49),
    height: vScale(56),
    marginTop: vScale(485),
  },
  title: {
    color: Colors.white,
    fontSize: fontScale(48),
    textAlign: 'center',
    fontFamily: Font.Medium,
  },
  subTitle: {
    color: Colors.white,
    fontSize: fontScale(16),
    textAlign: 'center',
    fontFamily: Font.Medium,
    opacity: 0.5,
    marginTop: vScale(19),
    marginBottom: vScale(41),
  },
});
