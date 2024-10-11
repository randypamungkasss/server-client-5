export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">Latihan</a>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
          <a href="/services" className="hover:text-gray-200">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
        </nav>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
