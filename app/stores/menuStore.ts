import {action, makeAutoObservable} from 'mobx';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl: any;
}

class MenuStore {
  menuItems: MenuItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get totalAmount() {
    return this.menuItems.reduce((total, item) => total + item.price, 0);
  }

  addToCart = action((item: MenuItem) => {
    const index = this.menuItems.findIndex(el => el.id === item.id);
    if (index === -1) {
      this.menuItems.push(item);
    }
  });

  removeItem = action((id: number) => {
    const tempList = this.menuItems.slice();
    const index = this.menuItems.findIndex(item => item.id === id);
    tempList.splice(index, 1);
    this.menuItems = tempList;
  });
}

const menuStore = new MenuStore();

export default menuStore;
