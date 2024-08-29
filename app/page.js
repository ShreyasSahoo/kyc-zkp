export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to KYC Application System</h1>
      <p className="mb-8">Complete your KYC process quickly and securely.</p>
      <div className="space-x-4">
        <a href="/submit-kyc" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit KYC</a>
        <a href="/check-status" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Check Status</a>
      </div>
    </div>
  )
}