import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../contants/colors.ts';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton = (props: CustomButtonProps) => {
  const {onPress, title, containerStyle} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
});
