import { atom, selector } from 'recoil';
import Cookies from 'js-cookie';

export const cartItems = atom({
  key: 'cartItems',
  default: {},
})

export const token = atom({
  key: 'token',
  default: Cookies.get('token')
})

export const isLoading = atom({
  key: 'isLoading',
  default: true,
})

export const profile = atom({
  key: 'profile',
  default: {}
})

export const totalCount = selector({
  key: 'totalCount',
  get: ({ get }) => {
    const items = get(cartItems)
    return Object.keys(items).length;
  }
})