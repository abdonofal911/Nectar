import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigator from './src/navigation';
import Splash from './src/screens/Splash';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store/store';
import {getUserData} from './src/storge';
import {setUserInfo} from './src/store/user';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const dispatch = useDispatch();

  const handleGetUserData = async () => {
    const response = await getUserData();
    if (response) {
      dispatch(setUserInfo(response));
    }
  };
  useEffect(() => {
    handleGetUserData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {showSplash ? <Splash /> : <Navigator />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
