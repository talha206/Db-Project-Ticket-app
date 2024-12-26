"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirect

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    workEmail: "",
    firstName: "",
    lastName: "",
    department: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const router = useRouter(); // Initialize the router for programmatic navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    const { workEmail } = formData;

    if (!workEmail) {
      setMessage("Please enter a work email");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(workEmail)) {
      setMessage("Please enter a valid work email address.");
      return false;
    }

    return true;
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail()) {
      setMessage("");
      setStep(2);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { workEmail, firstName, lastName, department, designation, password, confirmPassword } = formData;

    // Basic validation for remaining fields
    if (!firstName || !lastName || !department || !designation || !password || !confirmPassword) {
      setMessage("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Call the backend API
    setMessage("Signing up...");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: workEmail,
          firstName,
          lastName,
          department,
          designation,
          password,
          companyId: 1, // Replace with appropriate value
          teamId: 1, // Replace with appropriate value
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message || "Sign-up successful!");
        setStep(1); // Optionally reset the form
        setFormData({
          workEmail: "",
          firstName: "",
          lastName: "",
          department: "",
          designation: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect to the home page after successful registration
        router.push("/"); // You can replace "/" with your desired route
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "An error occurred during sign-up.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const renderEmailStep = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Enter Work Email</h1>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Work Email</label>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@company.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );

  const renderDetailsStep = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h1>
        <p className="mb-4 text-center text-gray-600">Email: {formData.workEmail}</p>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <form onSubmit={handleFinalSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Marketing"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Senior Manager"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return step === 1 ? renderEmailStep() : renderDetailsStep();
}
