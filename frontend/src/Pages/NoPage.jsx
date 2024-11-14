import React from 'react';
import image from '../assets/soon.png'; 
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className=" relative flex items-center justify-center min-h-screen bg-gray-100 px-4">
      
      <div className="text-center">
        {/* Coming Soon Image */}
        <img src={image} alt="Coming Soon" className="mx-auto mb-8 max-w-full h-auto" />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Feature Coming Soon!</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          We're working to bring you something amazing. Stay tuned!
        </p>

        <Link to='/'>
        <button className='px-5 py-1 rounded-xl bg-orange-100 border border-black'>
            Go back Home
        </button>   
        </Link>

      </div>
    
    </div>
  );
}

export default NoPage;
