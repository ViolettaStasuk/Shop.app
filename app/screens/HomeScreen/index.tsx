import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {styles} from './styles.ts';
import {screenTitles} from '../../contants/screenTitles.ts';
import Header from './components/Header';
import {menu_data} from '../../data/menu.ts';
import MenuListItem from './components/MenuListItem';
import {AppNavigationProps} from '../../navigators/MainNavigator.tsx';
import menuStore from '../../stores/menuStore.ts';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl: any;
}

const HomeScreen: React.FC<AppNavigationProps<'Home'>> = props => {
  const {addToCart} = menuStore;

  function handleAddCartPress(item: MenuItem) {
    addToCart(item);
  }

  const renderItem = ({item}: {item: MenuItem}) => (
    <MenuListItem
      price={item.price}
      title={item.name}
      imageUrl={item.imageUrl}
      onAddCartPress={() => handleAddCartPress(item)}
    />
  );

  function onCartPress() {
    props.navigation.navigate('Cart');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          title={screenTitles.title}
          subTitle={screenTitles.subTitle}
          onCartPress={onCartPress}
        />
        <FlatList
          data={menu_data}
          renderItem={renderItem}
          keyExtractor={(_: MenuItem, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{paddingTop: 30, paddingBottom: 100}}
          columnWrapperStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
