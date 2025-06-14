import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 border rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Your Password</h2>
        <p className="text-gray-700 text-sm mb-4 text-center">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
