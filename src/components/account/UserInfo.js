import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const UserInfo = ({imageUri, name, email}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.userProfile} />
      <View style={styles.infoRow}>
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>{name}</Text>
          <Icon name="pencil-outline" size={18} color={Colors.mainColor} />
        </View>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: scale(25),
    flexDirection: 'row',
  },
  userProfile: {width: scale(64), height: scale(64), borderRadius: scale(32)},
  nameRow: {
    flexDirection: 'row',
    marginBottom: vScale(5),
    alignItems: 'center',
  },
  infoRow: {marginStart: scale(25)},
  nameText: {
    color: Colors.black,
    fontSize: fontScale(20),
    fontFamily: Font.Medium,
    marginEnd: scale(10),
  },
  emailText: {
    color: Colors.label,
    fontSize: fontScale(14),
    fontFamily: Font.Light,
  },
});
