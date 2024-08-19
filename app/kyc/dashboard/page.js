// app/kyc/dashboard/page.js
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [kycStatuses, setKycStatuses] = useState([]);

  // Dummy data for 5 KYC status entries
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        status: 'Approved',
        submissionDate: '2024-07-01',
        lastUpdate: '2024-07-05',
      },
      {
        id: 2,
        status: 'Pending',
        submissionDate: '2024-07-10',
        lastUpdate: '2024-07-12',
      },
      {
        id: 3,
        status: 'Rejected',
        submissionDate: '2024-07-15',
        lastUpdate: '2024-07-18',
      },
      {
        id: 4,
        status: 'Approved',
        submissionDate: '2024-07-20',
        lastUpdate: '2024-07-22',
      },
      {
        id: 5,
        status: 'Rejected',
        submissionDate: '2024-07-25',
        lastUpdate: '2024-07-28',
      },
    ];
    setKycStatuses(dummyData);
  }, []);

  if (kycStatuses.length === 0) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">KYC Dashboard</h1>
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
        <thead className="bg-blue-400">
          <tr>
            <th className="border-b p-4">Submission Date</th>
            <th className="border-b p-4">Last Update</th>
            <th className="border-b p-4">Status</th>
            <th className="border-b p-4">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {kycStatuses.map((kyc) => (
            <tr key={kyc.id} className="hover:bg-blue-200 transition duration-200 text-pink-600 ease-in-out">
              <td className="p-4">{kyc.submissionDate}</td>
              <td className="p-4">{kyc.lastUpdate}</td>
              <td className={`p-4 font-semibold rounded-lg ${kyc.status === 'Approved' ? 'text-green-600 bg-green-100' : kyc.status === 'Rejected' ? 'text-red-600 bg-red-100' : 'text-yellow-600 bg-yellow-100'}`}>
                {kyc.status}
              </td>
              <td className="p-4">
                {kyc.status === 'Rejected' ? (
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out">
                    Re-submit KYC
                  </button>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
