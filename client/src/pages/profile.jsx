import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/profilePic.png"
const ProfilePage = () => {

  return (
    <div className="bg-white text-black min-h-screen px-4 py-16">
      <div className="max-w-md  mx-auto bg-white p-20 rounded border-2 border-black shadow-md">

        {/* Profile Photo */}
        <div className="mb-8 flex flex-col items-center">
          <img
            src={ProfilePic}
            alt="Profile Preview"
            className="w-30 h-30 rounded-full object-cover mb-2"
          />
        </div>

        {/* Name and Email */}
        <div className="mb-8">
          <label className="block mb-1 text-sm font-medium">Name</label>
          <span>Hemant Patel</span>
        </div>

        <div className="mb-12">
          <label className="block mb-1 text-sm font-medium">Email</label>
         <span>hemantPatel@gmail.com</span>
        </div>

        {/* Save Button */}
<button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
         <Link to="/edit-profile"> Edit Profile</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
