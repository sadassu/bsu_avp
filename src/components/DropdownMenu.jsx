import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DropdownMenu = ({ title, path, columns, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, linkPath = path) => {
    setIsOpen(false);

    // Handle links with hash, e.g. "/#program-areas"
    if (linkPath.includes("#")) {
      e.preventDefault();

      const [pathname, hash] = linkPath.split("#");

      // If already on the target page
      if (location.pathname === pathname) {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      // Go to the target page first
      navigate(pathname);

      // Wait for the page to render, then scroll
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <div
      className="relative h-full group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main menu link */}
      <Link
        to={path}
        onClick={(e) => handleLinkClick(e)}
        className="
          relative h-full flex items-center
          text-sm font-medium text-gray-700
          after:absolute after:bottom-0 after:left-0
          after:w-0 after:h-0.75
          after:bg-red-600
          after:transition-all after:duration-300
          group-hover:text-red-600
          group-hover:after:w-full
        "
      >
        {title}
      </Link>

      {/* Dropdown */}
      <div
        className={`
          fixed top-15 left-0 w-screen
          bg-white border border-gray-200 shadow-lg
          transition-all duration-200 z-50
          ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }
        `}
      >
        <div className="max-w-7xl mx-auto p-8 flex gap-10">
          {/* LEFT - IMAGE / LOGO */}
          <div className="w-1/4 flex items-center justify-center">
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={`${title} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-sm text-gray-400">Logo / Image</span>
              )}
            </div>
          </div>

          {/* RIGHT - MENU COLUMNS */}
          <div className="flex-1 grid grid-cols-4 gap-8">
            {columns.map((column, index) => (
              <div key={index}>
                {column.title && (
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {column.title}
                  </h3>
                )}

                <div className="flex flex-col gap-2">
                  {column.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className="
                        text-sm text-gray-600
                        hover:text-red-600
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
