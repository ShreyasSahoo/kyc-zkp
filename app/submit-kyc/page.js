'use client'

import { useState } from 'react'

export default function SubmitKYC() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    phone: '',
    email: '',
    idType: '',
    idNumber: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/kyc/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('KYC submitted successfully!')
        // Redirect or clear form
      } else {
        alert('Failed to submit KYC')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while submitting KYC')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Submit KYC Application</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Add similar input fields for dateOfBirth, address, phone, email, idType, idNumber */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit KYC
        </button>
      </form>
    </div>
  )
}