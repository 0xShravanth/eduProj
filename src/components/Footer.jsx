import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-purple-400">Edupap</h2>
          <p className="text-gray-400 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center text-gray-400">
              <FaPhone className="mr-2 text-purple-400" /> 01234567890
            </li>
            <li className="flex items-center text-gray-400">
              <FaEnvelope className="mr-2 text-purple-400" /> Dummy@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              className="p-2 bg-purple-500 rounded-full hover:bg-purple-600"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-purple-500 rounded-full hover:bg-purple-600"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-purple-500 rounded-full hover:bg-purple-600"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        © 2022 Edupap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
