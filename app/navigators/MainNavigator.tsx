// HomeScreenNavigation.tsx
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import {screenTitles} from '../contants/screenTitles.ts';
import {colors} from '../contants/colors.ts';
import CheckoutScreen from '../screens/CheckoutScreen';

type AppStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

export type AppNavigationProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppScreenNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: colors.black,
        headerTitleStyle: {
          color: colors.black,
          fontSize: 20,
          fontWeight: '600',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={CardScreen}
        options={{title: screenTitles.cart}}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{title: screenTitles.checkout}}
      />
    </Stack.Navigator>
  );
};

export default AppScreenNavigation;
