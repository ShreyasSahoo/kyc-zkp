// app/kyc/submit/page.js
'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SubmitKYC() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async data => {
    console.log("lsadkjf")
    try {
      const response = await axios.post('http://localhost:4000/api/kyc/submit', data);
      console.log('KYC submitted successfully:', response.data);
      router.push(`/kyc/status/${response.data.kycId}`);
    } catch (error) {
      console.error('Error submitting KYC:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Submit KYC</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input {...register('fullName', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.fullName && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
          <input type="date" {...register('dateOfBirth', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.dateOfBirth && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <textarea {...register('address', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.address && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input type="tel" {...register('phone', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.phone && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" {...register('email', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">ID Type</label>
          <input {...register('idType', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.idType && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">ID Number</label>
          <input {...register('idNumber', { required: true })} className="w-full mt-1 p-2 border rounded text-gray-800" />
          {errors.idNumber && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit KYC</button>
      </form>
    </div>
  );
}
