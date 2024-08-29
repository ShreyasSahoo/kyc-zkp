// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KYC Application System',
  description: 'Submit and manage your KYC applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">KYC System</h1>
            <div>
              <a href="/" className="mr-4">Home</a>
              <a href="/submit-kyc" className="mr-4">Submit KYC</a>
              <a href="/check-status" className="mr-4">Check Status</a>
              <a href="/sign-in">Sign In</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
