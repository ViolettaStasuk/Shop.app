import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../../contants/colors.ts';
import {observer} from 'mobx-react';
import {screenTitles} from '../../../../contants/screenTitles.ts';

interface CartListItemProps {
  price: number;
  title: string;
  imageUrl: any;
  onDelete: () => void;
}

const deleteIcon = require('../../../../assets/icons/delete.png');
const CartListItem = ({
  price,
  title,
  imageUrl,
  onDelete,
}: CartListItemProps) => {
  return (
    <View style={styles.wrapContainer}>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>
            {price} {screenTitles.ruble}
          </Text>
        </View>
        <TouchableOpacity onPress={onDelete} style={styles.deleteIconContainer}>
          <Image source={deleteIcon} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(CartListItem);

const styles = StyleSheet.create({
  wrapContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: 12,
    padding: 6,
    marginBottom: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    color: colors.black,
  },
  deleteIconContainer: {
    position: 'absolute',
    right: 4,
    padding: 4,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    tintColor: colors.primary,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
    marginTop: 4,
    color: colors.black,
  },
});
