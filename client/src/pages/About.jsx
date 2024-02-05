import React from 'react';
import backgroundImage from '../assets/background.jpg';

export default function About() {
  const containerStyle = {
    minHeight: '100vh',
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='relative flex items-center justify-center' style={containerStyle}>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='relative py-20 px-4 max-w-6xl mx-auto text-center text-white z-10 font-custom'>
        {/* Using the custom font family 'Cormorant Garamond' */}
        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold mb-4'>About Elegance Estate</h1>
        <p className='mb-4 text-lg lg:text-xl xl:text-2xl'>
        Welcome to Elegance Estate, where each property is a masterpiece, and every transaction unfolds as an experience in luxury. Our commitment to excellence ensures a seamless journey through the realm of exquisite real estate, redefining elegance with a curated selection of homes embodying timeless charm. Our seasoned professionals dedicate themselves to understanding your unique aspirations, ensuring each property resonates with your vision of a refined lifestyle. Embark on a journey with Elegance Estate, elevating your real estate experience with bespoke services tailored to connoisseurs of elegance. 
        </p>
        <p className='mb-4 text-lg lg:text-xl xl:text-2xl'>
        Every property tells a story of timeless allure and refined living, guided by our team's wealth of experience and knowledge in the real estate industry. We are committed to providing the highest level of service, making buying or selling a property an exciting and rewarding experience for each client.
        </p>
      </div>
    </div>
  );
}
