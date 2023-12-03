import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import {useNavigation} from '@react-navigation/native';

const AccountRow = ({item}) => {
  const navigation = useNavigation();
  const {iconName, title, route} = item;
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(route)}>
      <Image source={iconName} style={styles.iconImage} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Icon name="chevron-forward" size={18} />
    </Pressable>
  );
};

export default AccountRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(25),
    paddingVertical: vScale(20),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  iconImage: {width: scale(20), height: scale(20), marginEnd: scale(15)},
  leftRow: {flexDirection: 'row'},
  titleText: {
    color: Colors.black,
    fontSize: fontScale(18),
    fontFamily: Font.Medium,
    flex: 1,
  },
});
// {iconName: 'images.order', title: 'Orders', route: ''},
