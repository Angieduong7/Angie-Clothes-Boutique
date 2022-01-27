import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KMMZiLswQmyLydCO00MWkFgHAdp7dJ90us2LEfikiPubFZiM4SseMWlCotG4MpPVyxNtGqkmCDSsNaQJVsu3lav00XOvz3GS2';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name={`Angie's Clothes Boutique`}
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      currency='AUD'
    />
  );
};

export default StripeCheckoutButton;
