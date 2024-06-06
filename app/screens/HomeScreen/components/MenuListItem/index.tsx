import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {screenTitles} from '../../../../contants/screenTitles.ts';
import {colors} from '../../../../contants/colors.ts';
import {observer} from 'mobx-react';

interface MenuListItemProps {
  price: number;
  title: string;
  imageUrl: any;
  onAddCartPress: () => void;
}

const MenuListItem = ({
  price,
  title,
  imageUrl,
  onAddCartPress,
}: MenuListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.price}>
        {price} {screenTitles.ruble}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onAddCartPress} style={styles.cartContainer}>
        <Text style={styles.cart}>{screenTitles.addToCart}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(MenuListItem);

const device_width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: device_width / 2,
    height: device_width / 1.5,
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.black,
  },
  cart: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.black,
  },
  image: {
    width: device_width / 2.4,
    height: device_width / 2.4,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  cartContainer: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
