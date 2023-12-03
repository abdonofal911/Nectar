import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Cart} from '../screens/Cart';
import {Account} from '../screens/Account';
import ExploreStack from './ExploreStack';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../themes/Colors';

const BottomTab = createBottomTabNavigator();

const Tab = () => {
  // in case of using map to make bottom tabs automatically
  // const listTabs = [
  //   {
  //     title: '',
  //     component: '',
  //     name: '',
  //     icon: '',
  //   },
  // ];

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.label,
        tabBarActiveTintColor: Colors.mainColor,
      }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo color={color} name="shop" size={18} />
          ),
          title: 'Shop',
        }}
        component={Home}
        name="Home"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              color={color}
              name="store-search"
              size={18}
            />
          ),
          title: 'Explore',
        }}
        component={ExploreStack}
        name="ExploreStack"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              color={color}
              name="cart-outline"
              size={18}
            />
          ),
        }}
        component={Cart}
        name="Cart"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              color={color}
              name="account-outline"
              size={18}
            />
          ),
        }}
        component={Account}
        name="Account"
      />
    </BottomTab.Navigator>
  );
};
export default Tab;
