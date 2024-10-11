import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Hotel Logo */}
          <div className="text-2xl font-bold">
            <a href="/" className="hover:text-blue-400">Luxury Hotel</a>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-400"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-400"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-400"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
