'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

const SuccessContent = () => {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id') // Get the session_id from the URL

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSessionAndStore = async () => {
      if (sessionId) {
        try {
          // Fetch session details from your backend or Stripe API
          const response = await fetch(`/api/checkout-session/${sessionId}`)
          const session = await response.json()

          // Handle or store the session data here
        } catch (error) {
          console.error('Error fetching session:', error)
        }
      }
      setLoading(false)
    }

    fetchSessionAndStore()
  }, [sessionId])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your session ID is: {sessionId}</p>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
