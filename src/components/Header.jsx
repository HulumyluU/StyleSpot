import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-white shadow-md py-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-black hover:text-[#590000] transition-colors duration-300"
          >
            StyleSpot
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-14 items-center">
            {navigationLinks.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  to={item.path}
                  className={`text-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-[#520000]"
                      : "text-black hover:text-[#590000]"
                  }`}
                  onMouseEnter={() => setHoveredLink(item.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#590000] transition-all duration-300 ease-out ${
                      isActive(item.path) || hoveredLink === item.path
                        ? "w-1/2 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/cart"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={location.pathname !== "/cart" ? "/img/bx-cart.png" : "/img/bx-cart_red.png"}
                  alt="Shopping Cart"
                  className="w-6 h-6"
                />
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed inset-0 bg-white/80 backdrop-blur-sm transform 
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
              transition-transform duration-300 ease-in-out z-40`}
          >
            <div className="flex items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-8 bg-white/90 py-12 px-16 rounded-lg shadow-lg">
                {navigationLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-xl ${
                        isActive(item.path)
                          ? "text-[#520000] font-semibold"
                          : "text-black hover:text-[#590000]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/cart"
                    className="block hover:opacity-80 transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src={location.pathname !== "/cart" ? "/img/bx-cart.png" : "/img/bx-cart_red.png"}
                      alt="Shopping Cart"
                      className="w-6 h-6"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;