import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const _publishableKey
    = "pk_test_51HXLhaKXHM1yexQxt9W6RhG74x1uqIn3H8vRz5CaaWd9M1QPZkhwdyHc6W4L52URFehnUn5gRXDsE6olIW8WECQH00yLP5ZJAZ"

  const onToken = token => {
    console.log(token)
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={_publishableKey}/>
  )
}

export default StripeCheckoutButton
