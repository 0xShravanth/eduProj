import React from "react";
import Img from "../assets/img.png";

const ContactForm = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full p-6">
          <h2 className="text-3xl font-bold mb-6">
            Have Any Questions? <br /> Let’s Start to Talk
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Abc@gmail.com"
                  className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  I would like to discuss
                </label>
                <select className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>First Option</option>
                  <option>Second Option</option>
                  <option>Third Option</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                placeholder="Enter Message"
                rows="4"
                className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={Img}
            alt="Contact"
            className="max-w-xs md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
