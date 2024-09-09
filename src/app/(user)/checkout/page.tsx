'use client'
import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { StripeCardElementOptions } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const CARD_ELEMENT_OPTIONS: StripeCardElementOptions = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      '::placeholder': {
        color: '#a0aec0'
      }
    },
    invalid: {
      color: '#e53e3e'
    }
  }
}

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(2000)
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    setProcessing(true)
    try {
      const response = await fetch('/api/payment/stripe/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: 'usd',
          customerEmail: email
        })
      })

      const { clientSecret, error: serverError } = await response.json()

      if (serverError) {
        setError(serverError)
        setProcessing(false)
        return
      }

      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        setError('Card element not found')
        setProcessing(false)
        return
      }

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: email
          }
        }
      })

      if (paymentResult.error) {
        setError(paymentResult.error.message || 'Payment failed')
      } else if (
        paymentResult.paymentIntent &&
        paymentResult.paymentIntent.status === 'succeeded'
      ) {
        setSuccess(true)
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    }

    setProcessing(false)
  }

  if (success) {
    return (
      <div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <h2>Checkout</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Amount ($20.00)</label>
        <input
          type="number"
          min="1"
          value={amount / 100}
          onChange={(e) => setAmount(parseInt(e.target.value) * 100)}
          style={{ width: '100%', padding: '8px', marginTop: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Card Details</label>
        <div
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '8px'
          }}
        >
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{ padding: '10px 20px' }}
      >
        {processing ? 'Processing...' : 'Pay'}
      </button>
    </form>
  )
}

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default PaymentPage
