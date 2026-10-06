import React from "react";

const AREAS = [
  {
    title: "Vision, Mission, Goals, and Objectives",
    note: "Institutional direction and how it is shared and put into practice.",
  },
  {
    title: "Faculty",
    note: "Qualifications, workload, development, and performance of teaching staff.",
  },
  {
    title: "Curriculum and Instruction",
    note: "Program design, teaching methods, and assessment of learning.",
  },
  {
    title: "Support to Students",
    note: "Services, programs, and activities that support student welfare.",
  },
  {
    title: "Research",
    note: "Research agenda, outputs, funding, and utilization.",
  },
  {
    title: "Extension and Community Involvement",
    note: "Outreach programs and partnerships with the community.",
  },
  {
    title: "Library",
    note: "Collections, services, staffing, and learning resources.",
  },
  {
    title: "Physical Plant and Facilities",
    note: "Campus buildings, classrooms, and the safety and upkeep of facilities.",
  },
  {
    title: "Laboratories",
    note: "Laboratory spaces, equipment, and safety practices.",
  },
  {
    title: "Administration",
    note: "Governance, management, records, and resource planning.",
  },
];

const AreaSection = ({ onSelectArea }) => {
  return (
    <section
      id="program-areas"
      className=" px-5 py-12 font-sans text-[#2a1416]"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-260">
        <h2
          id="areas-heading"
          className="mb-2 bebas-neue text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-[1.15]"
        >
          Accreditation Areas
        </h2>

        <p className="mb-8 max-w-[56ch] text-base leading-[1.6] text-[#7a5b5e]">
          Explore the comprehensive areas of the Bachelor of Science in
          Information Technology program
        </p>

        {/* Two columns on tablet and up, one on mobile */}
        <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 min-[700px]:grid-cols-2">
          {AREAS.map((area, index) => {
            const number = index + 1;

            return (
              <li key={area.title}>
                <button
                  type="button"
                  className="
                    group relative grid h-full w-full
                    grid-cols-[56px_1fr_20px]
                    items-start gap-3
                    overflow-hidden rounded-lg
                    border border-[#ecd3d3] bg-white
                    py-4 pl-0 pr-4
                    text-left
                    transition-colors duration-150
                    hover:border-[#b3201f] hover:bg-[#fdecec]
                    focus-visible:border-[#b3201f] focus-visible:bg-[#fdecec]
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-[#b3201f]
                  "
                  onClick={() => onSelectArea && onSelectArea(number, area)}
                >
                  {/* Red indicator */}
                  <span
                    className="absolute bottom-0 left-0 top-0 w-1 bg-[#b3201f] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Number */}
                  <span
                    className="pt-0.5 text-center font-serif text-[2rem] font-semibold leading-none text-[#b3201f]"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  {/* Content */}
                  <span>
                    <span className="block inconsolata text-[1.5rem] font-semibold leading-[1.3]">
                      {area.title}
                    </span>
                    <span className="mt-1 block text-[0.88rem] leading-normal text-[#7a5b5e]">
                      {area.note}
                    </span>
                  </span>

                  {/* Arrow */}
                  <svg
                    className="mt-1 h-5 w-5 text-[#7a5b5e] transition-[transform,color] duration-150 group-hover:translate-x-0.75 group-hover:text-[#b3201f] group-focus-visible:translate-x-0.75 group-focus-visible:text-[#b3201f]"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 4l6 6-6 6" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default AreaSection;
