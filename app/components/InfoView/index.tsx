import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../contants/colors.ts';
import CustomButton from '../CustomButton';

export interface InfoViewProps {
  title: string;
  subTitle?: string;
  buttonTitle: string;
  subButtonTitle?: string;
  onMainButtonPress: () => void;
  onSubButtonPress?: () => void;
}

export const InfoView = (props: InfoViewProps) => {
  const icon = require('../../assets/icons/success.png');
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={[styles.title]}>{props.title}</Text>
        <CustomButton
          title={props.buttonTitle}
          onPress={props.onMainButtonPress}
          containerStyle={[styles.mainButton]}
        />
      </View>
    </View>
  );
};

const device_height = Dimensions.get('window').height;
const device_width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
    elevation: 1000,
    width: device_width,
    height: device_height,
    paddingHorizontal: 8,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 16,
    marginBottom: device_height / 5,
    alignItems: 'center',
    borderRadius: 24,
  },
  icon: {
    width: 80,
    height: 80,
  },
  iconContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  subTitleStyle: {
    textAlign: 'center',
    marginHorizontal: 12,
    marginTop: 10,
  },
  mainButton: {
    backgroundColor: colors.green,
    marginHorizontal: 16,
    width: '100%',
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: 24,
    marginTop: 12,
  },
});
