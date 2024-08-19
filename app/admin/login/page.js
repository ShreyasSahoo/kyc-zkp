'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = data => {
    console.log("Username:", data.username);
    console.log("Password:", data.password);
    if(data.username === 'admin' && data.password === 'admin') {
      router.push('/admin/review');
    } else {
      alert('Invalid credentials');
    }
    // Redirect to the dashboard
    
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Bank Official Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Username</label>
          <input
            {...register('username', { required: true })}
            className="w-full mt-1 p-2 border rounded text-black" // Ensures text is visible
          />
          {errors.username && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            className="w-full mt-1 p-2 border rounded text-black" // Ensures password text is visible as dots
          />
          {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
