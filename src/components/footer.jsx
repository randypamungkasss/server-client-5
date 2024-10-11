export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-1">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-1">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-1">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
