import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, Keyboard, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {AppNavigationProps} from '../../navigators/MainNavigator.tsx';
import {styles} from './styles.ts';
import menuStore from '../../stores/menuStore.ts';
import {screenTitles} from '../../contants/screenTitles.ts';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {InfoView} from '../../components/InfoView';

const CheckoutScreen: React.FC<AppNavigationProps<'Checkout'>> = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const {totalAmount} = menuStore;

  function handleCreateOrder() {
    Keyboard.dismiss();
    if (name.length === 0) {
      Alert.alert('', 'Введите имя');
    }
    if (phone.length === 0) {
      Alert.alert('', 'Введите номер телефона');
    }
    if (address.length === 0) {
      Alert.alert('', 'Введите адрес');
    }
    if (name && phone && address) {
      setIsVisible(true);
    }
  }

  function handleCloseSuccessView() {
    setIsVisible(false);
    props.navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.container}>
        <CustomInput
          placeholder={screenTitles.input.name}
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          placeholder={screenTitles.input.phone}
          value={phone}
          onChangeText={setPhone}
        />
        <CustomInput
          placeholder={screenTitles.input.deliveryAddress}
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <CustomButton
        title={screenTitles.pay}
        containerStyle={styles.buttonContainer}
        onPress={handleCreateOrder}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmountTitle}>{screenTitles.totalAmount}</Text>
        <Text style={styles.totalAmount}>
          {totalAmount?.toString()} {screenTitles.ruble}
        </Text>
      </View>
      {isVisible && (
        <InfoView
          title={screenTitles.orderAcceptedWaitCall}
          buttonTitle={screenTitles.ok}
          onMainButtonPress={handleCloseSuccessView}
        />
      )}
    </SafeAreaView>
  );
};

export default observer(CheckoutScreen);
