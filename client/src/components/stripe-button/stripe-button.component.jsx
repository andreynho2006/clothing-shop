import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lxJLcrdHTRiGfcKof0FvU2nV00iZbYp2Wd';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesuful');
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
