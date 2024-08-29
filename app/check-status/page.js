'use client'

import { useState } from 'react'

export default function CheckStatus() {
  const [userId, setUserId] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:8080/api/kyc/status/${userId}`)
      if (response.ok) {
        const data = await response.json()
        setStatus(data.status)
      } else {
        setStatus('Error fetching status')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('Error fetching status')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Check KYC Status</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-2">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Check Status
        </button>
      </form>
      {status && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold">Status: {status}</h2>
        </div>
      )}
    </div>
  )
}