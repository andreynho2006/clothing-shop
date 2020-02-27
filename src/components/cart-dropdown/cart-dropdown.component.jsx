import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.compopnent';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem className='cart-item' key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cartis empty</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
