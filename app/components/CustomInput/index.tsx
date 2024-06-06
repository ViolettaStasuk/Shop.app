import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors} from '../../contants/colors.ts';

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = props => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.grayText}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.grayBg,
    color: colors.black,
    marginBottom: 10,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
});
