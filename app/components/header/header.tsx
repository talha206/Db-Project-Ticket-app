'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation for client-side navigation

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Using next/navigation's useRouter

  const handleSignOut = () => {
    // Logic to sign out the user
    console.log('Signing out...');
    // Redirect to the default page (localhost:3000 or homepage)
    router.push('/');
  };

  const handleSettings = () => {
    // Redirect to settings page
    router.push('/settings');
  };

  return (
    <header className="bg-[#424247] p-4 flex justify-around items-center">
      <h1 className="sm:w-full 2xl:text-5xl sm:text-2xl text-lg 2xl:pl-20 sm:py-6 py-4 sm:pl-16 pl-8 text-[#9B9BC3] font-normal  tracking-widest">
        Ticket Time Tracker
      </h1>

      <div className="relative">
        {/* Profile logo */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none"
        >
          <img
            src="../../images/progile.png" // Replace with your profile image source
            alt=""
            className="w-full h-full object-cover"
          />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
            <button
              onClick={handleSettings}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
