// app/kyc/status/[userId]/page.js
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function KYCStatus({ params }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`/api/kyc/status/${params.userId}`);
        setStatus(response.data.status);
      } catch (err) {
        setError('Error fetching KYC status.');
      }
    };
    fetchStatus();
  }, [params.userId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">KYC Status</h1>
      <p className="text-lg">Status: {status ? status : 'Loading...'}</p>
    </div>
  );
}
