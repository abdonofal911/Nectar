import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Font from '../../themes/Font';
import {fontScale, sWidth, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';

const Terms = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.counterText}>Counter</Text>
      <View style={styles.counterNumberContainer}>
        <Text style={styles.counterNumberText}>{count}</Text>
      </View>

      <View style={styles.plusMinusContainer}>
        <TouchableOpacity
          style={styles.plusOrMinus}
          onPress={() => setCount(count + 1)}>
          <Text
            style={{
              color: Colors.white,
              fontSize: fontScale(20),
              fontFamily: Font.Bold,
            }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={count === 0 && true}
          style={styles.plusOrMinus}
          onPress={() => setCount(count - 1)}>
          <Text
            style={{
              color: 'red',
              fontSize: fontScale(20),
              fontFamily: Font.Bold,
            }}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(20),
    color: Colors.label,
  },
  counterNumberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(30),
    marginVertical: vScale(15),
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: Colors.black,
    borderRadius: vScale(5),
  },
  counterNumberText: {
    fontSize: fontScale(30),
    fontFamily: Font.Regular,
    color: Colors.black,
  },
  plusMinusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: sWidth,
  },
  plusOrMinus: {
    paddingHorizontal: scale(15),
    paddingVertical: vScale(15),
    backgroundColor: Colors.mainColor,
    borderRadius: vScale(5),
  },
});
