
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: `url('/path-to-hotel-image.jpg')` }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl font-bold">Welcome to Luxury Hotel</h1>
          <p className="mt-4 text-lg">Experience the finest in hospitality and comfort</p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded">Book Now</button>
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
              <img src="/path-to-room-service.jpg" alt="Room Service" className="w-full h-40 object-cover rounded-t" />
              <h3 className="mt-4 text-2xl font-semibold text-blue-600">Room Service</h3>
              <p className="mt-2 text-gray-600">24/7 room service to cater to all your needs.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
              <img src="/path-to-spa.jpg" alt="Spa" className="w-full h-40 object-cover rounded-t" />
              <h3 className="mt-4 text-2xl font-semibold text-blue-600">Spa & Wellness</h3>
              <p className="mt-2 text-gray-600">Rejuvenate with our luxury spa treatments.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
              <img src="/path-to-dining.jpg" alt="Dining" className="w-full h-40 object-cover rounded-t" />
              <h3 className="mt-4 text-2xl font-semibold text-blue-600">Gourmet Dining</h3>
              <p className="mt-2 text-gray-600">Experience world-class dining with our top chefs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;