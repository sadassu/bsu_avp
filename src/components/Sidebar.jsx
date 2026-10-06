import React from "react";
import { NavLink } from "react-router-dom";

const AREAS = [
  {
    slug: "vmgo",
    title: "Vision, Mission, Goals, and Objectives",
    note: "Institutional direction and how it is shared and put into practice.",
  },
  {
    slug: "faculty",
    title: "Faculty",
    note: "Qualifications, workload, development, and performance of teaching staff.",
  },
  {
    slug: "curriculum-instruction",
    title: "Curriculum and Instruction",
    note: "Program design, teaching methods, and assessment of learning.",
  },
  {
    slug: "support-to-students",
    title: "Support to Students",
    note: "Services, programs, and activities that support student welfare.",
  },
  {
    slug: "research",
    title: "Research",
    note: "Research agenda, outputs, funding, and utilization.",
  },
  {
    slug: "extension-community-involvement",
    title: "Extension and Community Involvement",
    note: "Outreach programs and partnerships with the community.",
  },
  {
    slug: "library",
    title: "Library",
    note: "Collections, services, staffing, and learning resources.",
  },
  {
    slug: "physical-plant-facilities",
    title: "Physical Plant and Facilities",
    note: "Campus buildings, classrooms, and the safety and upkeep of facilities.",
  },
  {
    slug: "laboratories",
    title: "Laboratories",
    note: "Laboratory spaces, equipment, and safety practices.",
  },
  {
    slug: "administration",
    title: "Administration",
    note: "Governance, management, records, and resource planning.",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 p-4">
      <h2 className="text-xl font-semibold mb-6 uppercase inconsolata text-center">
        Program Areas
      </h2>

      <nav className="space-y-2">
        {AREAS.map((area) => (
          <NavLink
            key={area.slug}
            to={`/areas/${area.slug}`}
            title={area.note}
            className={({ isActive }) =>
              `inconsolata block px-3 py-2 rounded transition-colors ${
                isActive
                  ? "bg-red-800 text-white"
                  : "hover:bg-red-800 hover:text-white"
              }`
            }
          >
            {area.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
