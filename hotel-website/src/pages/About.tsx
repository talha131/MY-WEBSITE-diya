
import React from 'react';
// Import the image from the src/assets folder
import HotelBuilding from '../assets/hotel-building.jpg';

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Image Section */}
      <img 
        src="https://i.pinimg.com/originals/19/ec/27/19ec27fc82944f3d8cd5f05cc6972aa1.jpg" // Use the imported image
        alt="Hotel Building" 
        className="md:w-1/2 w-full rounded-lg shadow-lg" 
      />
      
      {/* Text Section */}
      <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 max-w-lg text-gray-700">
          Luxury Hotel has been providing top-tier service and world-class accommodations since 1990.
          Nestled in the heart of the city, we offer breathtaking views, gourmet dining, and luxurious rooms to ensure a relaxing stay.
        </p>
      </div>
    </div>
  );
};

export default About;
