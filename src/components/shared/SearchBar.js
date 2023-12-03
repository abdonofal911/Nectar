import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import {scale, vScale} from '../../themes/Scale';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search1" size={18} color={Colors.black} />
      <TextInput placeholder="Search Store" value="" style={styles.textInput} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.gray,
    width: scale(364),
    height: vScale(52),
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: scale(15),
    alignSelf: 'center',
  },
  textInput: {
    marginStart: scale(10),
  },
});
