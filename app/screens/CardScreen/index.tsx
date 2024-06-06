import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {AppNavigationProps} from '../../navigators/MainNavigator.tsx';
import {styles} from './styles.ts';
import menuStore from '../../stores/menuStore.ts';
import CartListItem from './components/CartListItem';
import {MenuItem} from '../HomeScreen';
import {screenTitles} from '../../contants/screenTitles.ts';
import CustomButton from '../../components/CustomButton';

const CardScreen: React.FC<AppNavigationProps<'Cart'>> = props => {
  const {menuItems, removeItem, totalAmount} = menuStore;

  const renderItem = ({item}: {item: MenuItem}) => (
    <CartListItem
      price={item.price}
      title={item.name}
      imageUrl={item.imageUrl}
      onDelete={() => removeItem(item.id)}
    />
  );

  function handleNavigateToCheckout() {
    props.navigation.navigate('Checkout');
  }

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={(_: MenuItem, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 100, paddingTop: 30}}
          ListEmptyComponent={EmptyCartView}
        />
      </View>
      {menuItems.length > 0 && (
        <CustomButton
          onPress={handleNavigateToCheckout}
          title={screenTitles.makeOrder}
          containerStyle={styles.buttonContainer}
        />
      )}
      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmountTitle}>{screenTitles.totalAmount}</Text>
        <Text style={styles.totalAmount}>
          {totalAmount?.toString()} {screenTitles.ruble}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default observer(CardScreen);

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const EmptyCartView = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: device_width,
        height: device_height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 180}}>
        {screenTitles.emptyCart}
      </Text>
    </View>
  );
};
