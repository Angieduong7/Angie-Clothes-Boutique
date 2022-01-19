import cartTypes from './cart.types';

export const toggleCartHidden = {
  type: cartTypes.toggle_cart_hidden,
};

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});
