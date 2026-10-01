import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#383a3b] text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold tracking-wide">
              INFORMATION TECHNOLOGY
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
              Empowering students through technology, innovation, and continuous
              learning to build solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
         

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>Batangas State University</p>
              <p>Balayan Campus</p>
              <p>Batangas, Philippines</p>
              <p className="pt-1">info@example.edu.ph</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Information Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
