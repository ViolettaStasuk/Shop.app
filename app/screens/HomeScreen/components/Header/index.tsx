import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../../contants/colors.ts';
const cartLogo = require('../../../../assets/icons/cart.png');

interface HeaderProps {
  title: string;
  subTitle: string;
  onCartPress: () => void;
}

const Header = ({title, subTitle, onCartPress}: HeaderProps) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.logoContainer} onPress={onCartPress}>
          <Image source={cartLogo} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: colors.primary,
    padding: 8,
    position: 'absolute',
    right: 10,
    borderRadius: 8,
  },
  logo: {
    width: 24,
    height: 24,
    tintColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
    color: colors.blue,
  },
});
