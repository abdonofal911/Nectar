import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Explore, Products} from '../screens/Explore';

const Stack = createStackNavigator();
const ExploreStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
