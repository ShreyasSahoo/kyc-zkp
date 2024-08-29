'use client'

import { useState, useEffect } from 'react'
import QRCode from 'qrcode.react'

export default function SignIn() {
  const [qrData, setQrData] = useState(null)

  useEffect(() => {
    const fetchQR = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/sign-in')
        if (response.ok) {
          const data = await response.json()
          setQrData(JSON.stringify(data))
        }
      } catch (error) {
        console.error('Error fetching QR data:', error)
      }
    }
    fetchQR()
  }, [])

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      {qrData ? (
        <div>
          <QRCode value={qrData} size={256} />
          <p className="mt-4">Scan this QR code with your mobile app to sign in</p>
        </div>
      ) : (
        <p>Loading QR code...</p>
      )}
    </div>
  )
}