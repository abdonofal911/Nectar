import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tab from './Tab';
import {About, Terms} from '../screens/Account';
import {ProductDetails} from '../screens/Home';
import {Checkout, OrderAccepted} from '../screens/Cart';

const Stack = createStackNavigator();
const AppStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="OrderAccepted" component={OrderAccepted} />
    </Stack.Navigator>
  );
};

export default AppStack;
