// src/pages/EditProfilePage.jsx
import React, { useState } from "react";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, photo: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // This would normally involve API call
    alert("Profile updated!");
    console.log("Saved Data:", profile);
  };

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    profile.name
  )}&background=random&color=fff`;

  return (
    <div className="bg-white text-black min-h-screen px-4 py-10">
      <div className="max-w-md mx-auto bg-gray-50 p-8 rounded border-2 border-black shadow-md">
        <h2 className="text-2xl font-semibold mb-8 text-center">Edit Profile</h2>

        {/* Profile Photo Upload */}
        <div className="flex flex-col items-center mb-12">
          <img
            src={preview || defaultAvatar}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="text-sm"
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
