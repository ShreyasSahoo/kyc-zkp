"use client"
import { useForm } from 'react-hook-form';

export default function KYCSubmission() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle form submission, including ZKP generation and API call
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">KYC Submission</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              {...register('fullName', { required: true })}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.fullName && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              {...register('dateOfBirth', { required: true })}
              type="date"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.dateOfBirth && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              {...register('address', { required: true })}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.address && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register('phoneNumber', { required: true })}
              type="tel"
              placeholder="123-456-7890"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.phoneNumber && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* ID Proof Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload ID Proof</label>
            <input
              {...register('idProof', { required: true })}
              type="file"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.idProof && <span className="text-red-600 text-sm">This field is required</span>}
          </div>

          {/* Agree to Terms */}
          <div className="flex items-center">
            <input
              {...register('terms', { required: true })}
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-red-500 underline">terms and conditions</a>
            </label>
            {errors.terms && <span className="text-red-600 text-sm ml-2">You must agree before submitting</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
          >
            Submit KYC
          </button>
        </form>
      </div>
    </div>
  );
}
