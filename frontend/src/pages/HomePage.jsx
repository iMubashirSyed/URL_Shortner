import React from "react";
import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">URL Shortener</h1>
        <p className="text-center text-gray-600 mb-6">Enter your URL below</p>
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
