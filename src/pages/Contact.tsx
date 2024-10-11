import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';  // Import icons from react-icons

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
      <div className="flex flex-col md:flex-row items-center mt-8">
        <div className="text-center md:text-left md:w-1/3 p-4">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />  {/* Phone icon */}
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />  {/* Email icon */}
            <p className="text-gray-600">contact@luxuryhotel.com</p>
          </div>
        </div>
        <form className="w-full max-w-lg mt-6 md:mt-0 md:ml-8">
          <input type="text" className="p-4 w-full border rounded-md mb-4" placeholder="Your Name" />
          <input type="email" className="p-4 w-full border rounded-md mb-4" placeholder="Your Email" />
          <textarea className="p-4 w-full border rounded-md mb-4" placeholder="Your Message" rows={5}></textarea>
          <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
