import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  CartDropdownComponent,
  CartItemsComponent,
  CartItemsEmptyMessage,
  CartItemsButton
} from './cart-dropdown.styles';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownComponent>
    <CartItemsComponent>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem className='cart-item' key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <CartItemsEmptyMessage>Your cart is empty</CartItemsEmptyMessage>
      )}
    </CartItemsComponent>
    <CartItemsButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartItemsButton>
  </CartDropdownComponent>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
