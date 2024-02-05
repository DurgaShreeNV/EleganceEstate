import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black py-6 text-white p-10 text-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-base">
            Elegance State is dedicated to providing you with the finest
            products and services. Our commitment is to ensure your
            satisfaction and exceed your expectations.<br />We strive for excellence
            in every aspect of our business, delivering timeless elegance and
            quality craftsmanship.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <Link to="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:underline">
            About Us
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Contact Information</h3>
          <p className="text-sm">
            Address: 123 Elegant Street, Cityville, India
          </p>
          <p className="text-sm">
            Email: info@elegancestate.com
          </p>
          <p className="text-sm">
            Phone: (080) 5693 3569
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; 2024 Elegance State. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
