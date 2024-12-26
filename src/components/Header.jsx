import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  const isActive = (path) => location.pathname === path;

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

          <ul className="flex gap-14 items-center">
            {[
              { path: "/", label: "Home" },
              { path: "/shop", label: "Shop" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/blog", label: "Blog" },
            ].map((item) => (
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
                  src="../../public/bx-cart.png"
                  alt="Shopping Cart"
                  className="w-6 h-6"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
