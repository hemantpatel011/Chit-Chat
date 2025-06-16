import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    crPassword: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setRegisterData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", registerData);

    // Here you would send data to the backend using FormData:
    // const formData = new FormData();
    // formData.append('fullName', registerData.fullName);
    // formData.append('email', registerData.email);
    // formData.append('password', registerData.password);
    // formData.append('profilePicture', registerData.profilePicture);
    // axios.post('/api/register', formData);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 border rounded-md shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1A3C5A]">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-[#1A3C5A]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              placeholder="Hemant Patel"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#1A3C5A]">Email</label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#1A3C5A]">Password</label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#1A3C5A]">Confirm Password</label>
            <input
              type="password"
              name="cfPassword"
              value={registerData.crPassword}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4081] text-[#1A3C5A] bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#1A3C5A]">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 file:text-white file:bg-[#1A3C5A] file:border-0 file:px-4 file:py-2 file:rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A3C5A] text-white py-2 rounded-md font-semibold hover:bg-[#FF4081] transition-colors duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-[#1A3C5A]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FF4081] hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
