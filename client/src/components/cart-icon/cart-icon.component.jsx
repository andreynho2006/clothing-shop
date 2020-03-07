import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartIconComponent,
  ShoppingIconComponent,
  ItemCountComponent
} from './cart-icon.styles';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconComponent onClick={toggleCartHidden}>
    <ShoppingIconComponent />
    <ItemCountComponent>{itemCount}</ItemCountComponent>
  </CartIconComponent>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
