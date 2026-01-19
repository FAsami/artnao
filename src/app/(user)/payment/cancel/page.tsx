export default function CancelPage() {
  return (
    <div>
      <h1>Payment Canceled</h1>
      <p>
        You have canceled the payment. If this was a mistake, please go back and
        try again.
      </p>
      <a href="/" style={{ textDecoration: 'underline' }}>
        Return to Home
      </a>
    </div>
  )
}
