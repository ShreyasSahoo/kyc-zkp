// app/admin/review/page.js
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function KYCReview() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Dummy data for pending KYC submissions
    const dummyData = [
      {
        id: 1,
        fullName: 'Michael Smith',
        submissionDate: '2024-08-01',
        email: 'michael.smith@example.com',
        documentType: 'Passport',
        status: 'Pending'
      },
      {
        id: 2,
        fullName: 'Sarah Johnson',
        submissionDate: '2024-08-05',
        email: 'sarah.johnson@example.com',
        documentType: 'Driver\'s License',
        status: 'Pending'
      },
      {
        id: 3,
        fullName: 'David Brown',
        submissionDate: '2024-08-07',
        email: 'david.brown@example.com',
        documentType: 'National ID',
        status: 'Pending'
      },
      {
        id: 4,
        fullName: 'Emily Davis',
        submissionDate: '2024-08-10',
        email: 'emily.davis@example.com',
        documentType: 'Passport',
        status: 'Pending'
      },
      {
        id: 5,
        fullName: 'John Doe',
        submissionDate: '2024-08-12',
        email: 'john.doe@example.com',
        documentType: 'Driver\'s License',
        status: 'Pending'
      }
    ];
    setSubmissions(dummyData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">Pending KYC Submissions</h1>
      <div className="space-y-4">
        {submissions.map(submission => (
          <div key={submission.id} className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-gray-800">{submission.fullName}</h2>
            <p className="text-sm text-gray-600">Submission Date: {submission.submissionDate}</p>
            <p className="text-sm text-gray-600">Email: {submission.email}</p>
            <p className="text-sm text-gray-600">Document Type: {submission.documentType}</p>
            <p className={`text-sm ${submission.status === 'Pending' ? 'text-yellow-600' : 'text-gray-600'}`}>Status: {submission.status}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
              Review Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
