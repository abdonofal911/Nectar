import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {AccountRow, UserInfo} from '../../components/account';
import Colors from '../../themes/Colors';
import {vScale} from '../../themes/Scale';
import images from '../../assets/images';
import AppButton from '../../components/shared/AppButton';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from '../../store/user';
import {removeUserData} from '../../storge';

const Account = ({navigation}) => {
  const {email} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logOutUser());
    removeUserData();
  };

  const info = {
    name: 'UserName',
    email: email,
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.userInfoContainer}>
        <UserInfo
          imageUri="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1275"
          name={info.name}
          email={info.email}
        />
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={({item, index}) => <AccountRow item={item} />}
          keyExtractor={(item, index) => index}
          scrollEnabled={false}
        />
      </View>
      <AppButton
        icon={() => <Icon name="log-out" color={Colors.mainColor} size={18} />}
        title="Log Out"
        style={styles.appButton}
        textStyle={styles.appButtonText}
        onPress={() => LogoutHandler()}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  userInfoContainer: {
    borderColor: Colors.border,
    paddingBottom: vScale(30),
    borderBottomWidth: StyleSheet.hairlineWidth * 1.5,
  },
  appButton: {
    backgroundColor: Colors.gray,
    position: 'absolute',
    bottom: vScale(10),
  },
  appButtonText: {color: Colors.mainColor},
});

const list = [
  {iconName: images.orders, title: 'Orders', route: ''},
  {iconName: images.myDetails, title: 'My Details', route: ''},
  {iconName: images.deliveryAddress, title: 'Delivery Address', route: ''},
  {iconName: images.payment, title: 'Payment Methods', route: ''},
  {iconName: images.promoCode, title: 'Promo Code', route: ''},
  {iconName: images.notifications, title: 'Notifications ', route: ''},
  {iconName: images.help, title: 'Help', route: 'Terms'},
  {iconName: images.about, title: 'About', route: 'About'},
];
