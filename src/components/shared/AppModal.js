import {StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Colors from '../../themes/Colors';
import {scale, vScale} from '../../themes/Scale';
import Icon from 'react-native-vector-icons/Ionicons';

const AppModal = ({isVisible, onClose, children, modalCustomStyle}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={[styles.modalInnerContainer, modalCustomStyle]}>
          <Icon name="close" size={26} style={styles.icon} onPress={onClose} />
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalInnerContainer: {
    backgroundColor: Colors.white,
    width: scale(364),
    height: vScale(600),
    borderRadius: vScale(25),
  },
  icon: {marginStart: scale(15), marginTop: vScale(15)},
});
