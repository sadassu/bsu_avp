import React from "react";
import DropdownMenu from "./DropdownMenu";
import BSULogo from "../assets/Batangas_State_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menus = [
    {
      title: "Program Areas",
      path: "/#program-areas",
      columns: [
        {
          title: "Program Areas",
          links: [
            {
              label: "Vision, Mission, Goals, and Objectives",
              path: "/areas/vmgo",
            },
            {
              label: "Faculty",
              path: "/areas/faculty",
            },
            {
              label: "Curriculum and Instruction",
              path: "/areas/curriculum-instruction",
            },
          ],
        },
        {
          links: [
            {
              label: "Support to Students",
              path: "/areas/support-to-students",
            },
            {
              label: "Research",
              path: "/areas/research",
            },
            {
              label: "Extension and Community Involvement",
              path: "/areas/extension-community-involvement",
            },
            {
              label: "Library",
              path: "/areas/library",
            },
          ],
        },
        {
          links: [
            {
              label: "Physical Plant and Facilities",
              path: "/areas/physical-plant-facilities",
            },
            {
              label: "Laboratories",
              path: "/areas/laboratories",
            },
            {
              label: "Administration",
              path: "/areas/administration",
            },
          ],
        },
      ],
    },

    {
      title: "Bachelor of Science in Information Technology",
      path: "/bsit",
      columns: [
        {
          title: "BSIT Program",
          links: [
            {
              label: "Program Activities",
              path: "/bsit/program-activities",
            },
            {
              label: "Directory Task Force",
              path: "/bsit/directory-task-force",
            },
            {
              label: "AACCUP Additional Documents",
              path: "/bsit/aaccup-additional-documents",
            },
          ],
        },
        {
          title: "Reference Files",
          links: [
            {
              label: "Curriculum",
              path: "/bsit/curriculum",
            },
            {
              label: "Certificate of Program Compliance",
              path: "/bsit/certificate-of-program-compliance",
            },
            {
              label:
                "CMO 25 s2015. Policies, Standards and Guidelines for BSIT",
              path: "/bsit/cmo-25-s2015",
            },
            {
              label: "AACCUP Technical Review Board Action (PSV)",
              path: "/bsit/aaccup-technical-review-board-action",
            },
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
          <Link to="/" className="text-xl font-bold text-gray-900">
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
              path={menu.path}
              columns={menu.columns}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
