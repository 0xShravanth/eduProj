import React from "react";
import img from "../assets/single-girl.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-white">
            We make it easy for Schools Management success..
          </h1>
          <p className="text-gray-400 mt-4">
            All-in-one platform: Parent engagement, administration, teaching &
            marketing.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-400 text-white px-6 py-3 rounded-md">
              Try Edupap Free
            </button>
            <button className="border border-white px-6 py-3 rounded-md text-white">
              Contact Us Now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img src={img} alt="User" className="w-full max-w-md mx-auto" />
          {/* Floating Features 
          <div className="absolute top-10 left-5 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md">
            🎓 School Management
          </div>
          <div className="absolute bottom-16 left-5 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md">
            💰 Fee Management
          </div>
          <div className="absolute top-20 right-5 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md">
            👨‍🏫 Teacher & Principal Assistance
          </div>
          <div className="absolute bottom-5 right-5 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md">
            📋 Admission Management
          </div>
          */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
