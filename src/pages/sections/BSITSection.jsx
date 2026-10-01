import React from "react";

const resources = [
  {
    title: "Program Activities",
    description: "Events, seminars, and outreach run by the BSIT program.",
    href: "#",
    path: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    title: "Directory Task Force",
    description: "Faculty and staff assigned to each accreditation area.",
    href: "#",
    path: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "AACCUP Additional Documents",
    description: "Supporting papers requested for the accreditation visit.",
    href: "#",
    path: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    title: "Reference Files",
    description: "Manuals, templates, and forms in one place.",
    href: "#",
    path: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z",
  },
];

const BSITSection = () => {
  return (
    <section
      id="bsit-section"
      className="w-full min-h-screen bg-slate-200 flex items-center"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Heading */}
          <div className="lg:col-span-4">
            <div className="w-12 h-1 bg-red-700 mb-6" />
            <h2 className="bebas-neue uppercasetext-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Bachelor of Science in Information Technology.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-sm">
              Find program activities, task force members, and accreditation
              documents here.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {resources.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative flex flex-col bg-white p-7 rounded-2xl border border-slate-200 hover:border-red-700 hover:shadow-lg transition focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.path}
                    />
                  </svg>
                </div>

                <h3 className="inconsolata mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed pr-8">
                  {item.description}
                </p>

                <svg
                  className="absolute right-6 bottom-7 w-5 h-5 text-slate-300 group-hover:text-red-700 group-hover:translate-x-1 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSITSection;
