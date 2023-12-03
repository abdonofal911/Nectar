import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

const AppInput = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  onBlur,
  errorMessage,
  onEndEditing,
  onFocus,
  autoCapitalize,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...{
          onChangeText,
          value,
          placeholder,
          secureTextEntry,
          onBlur,
          onEndEditing,
          onFocus,
          autoCapitalize,
        }}
        style={styles.input}
        {...rest}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(25),
  },
  label: {
    color: Colors.label,
    fontFamily: Font.Medium,
    fontSize: fontScale(16),
    marginBottom: vScale(10),
  },
  input: {
    paddingBottom: vScale(10),
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: Colors.border,
  },
  errorMessage: {
    fontFamily: Font.Light,
    color: Colors.red,
    fontSize: fontScale(12),
    marginTop: vScale(5),
  },
});
