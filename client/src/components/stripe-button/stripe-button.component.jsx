import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lxJLcrdHTRiGfcKof0FvU2nV00iZbYp2Wd';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('Payment succesuful!');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There is a issue with your paymen t. Please sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothes Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
