import React from "react";
import DropdownMenu from "./DropdownMenu";
import BSULogo from "../assets/Batangas_State_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menus = [
    {
      title: "Program Areas",
      href: "#program",
      columns: [
        {
          title: "Program Areas",
          links: [
            { label: "Vision, Mission, Goals, and Objectives", href: "#" },
            { label: "Faculty", href: "#" },
            { label: "Curriculum and Instruction", href: "#" },
          ],
        },
        {
          links: [
            { label: "Support to Students", href: "#" },
            { label: "Research", href: "#" },
            { label: "Extension and Community Involvement", href: "#" },
            { label: "Library", href: "#" },
          ],
        },
        {
          links: [
            { label: "Physical Plant and Facilities", href: "#" },
            { label: "Laboratories", href: "#" },
            { label: "Administration", href: "#" },
          ],
        },
      ],
    },

    {
      title: "Bachelor of Science in Information Technology",
      href: "#bsit-section",
      columns: [
        {
          title: "BSIT Program",
          links: [
            { label: "Program Activities", href: "#" },
            { label: "Directory Task Force", href: "#" },
            { label: "AACCUP Additional Documents", href: "#" },
          ],
        },
        {
          title: "Reference Files",
          links: [
            { label: "Curriculum", href: "#" },
            { label: "Certificate of Program Compliance", href: "#" },
            {
              label:
                "CMO 25 s2015. Policies, Standards and Guidelines for BSIT",
              href: "#",
            },
            { label: "AACCUP Technical Review Board Action (PSV)", href: "#" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-15 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link path="/" className="text-xl font-bold text-gray-900">
            <img
              src={BSULogo}
              className="h-10 w-auto"
              alt="Batangas State University Logo"
            />
          </Link>

          <div>
            <p className="font-bold text-gray-600 inconsolata">BATSTATEU</p>
            <p className="text-sm font-normal text-gray-600 inconsolata">
              THE NEU BALAYAN
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 h-full inconsolata">
          {menus.map((menu, index) => (
            <DropdownMenu
              image={BSULogo}
              key={index}
              title={menu.title}
              href={menu.href}
              columns={menu.columns}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
