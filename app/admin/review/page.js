// app/admin/review/page.js
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function KYCReview() {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingKYCs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/kyc/pending');
        setSubmissions(response.data);
      } catch (err) {
        console.log(err)
        setError('Error fetching pending KYCs.');
      }
    };
    fetchPendingKYCs();
  }, []);

  const handleVerification = async (kycId, decision) => {
    try {
      await axios.post('/api/kyc/verify', { kycId, decision });
      setSubmissions(submissions.filter(submission => submission._id !== kycId));
    } catch (err) {
      setError('Error verifying KYC.');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Pending KYC Submissions</h1>
      <div className="space-y-4">
        {submissions.length === 0 ? (
          <p>No pending KYC submissions.</p>
        ) : (
          submissions.map(submission => (
            <div key={submission._id} className="p-4 border rounded">
              <h2 className="text-lg font-semibold text-gray-600">{submission.fullName}</h2>
              <p className="text-sm text-gray-600">Submission Date: {new Date(submission.submissionDate).toLocaleDateString()}</p>
              <div className="flex space-x-4 mt-2">
                <button
                  onClick={() => handleVerification(submission._id, 'APPROVE')}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleVerification(submission._id, 'REJECT')}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}