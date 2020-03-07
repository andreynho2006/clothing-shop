import React from 'react';

import {
  CartItemComponent,
  CartItemImageComponent,
  CartItemDetailsComponent,
  CartItemNameComponent,
  CartItemPriceComponent
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemComponent>
    <CartItemImageComponent src={imageUrl} alt='item' />
    <CartItemDetailsComponent>
      <CartItemNameComponent>{name}</CartItemNameComponent>
      <CartItemPriceComponent>
        {quantity} x ${price}
      </CartItemPriceComponent>
    </CartItemDetailsComponent>
  </CartItemComponent>
);

export default CartItem;
