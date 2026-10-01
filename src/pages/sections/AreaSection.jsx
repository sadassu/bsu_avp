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
      id="program"
      className="bg-[#f2f5f8] px-5 py-14 pb-[72px] font-sans text-[#14233c]"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-[760px]">
        {/* Heading */}
        <h2
          id="areas-heading"
          className="mb-2.5 font-serif text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-[1.15]"
        >
          Accreditation Areas
        </h2>

        <p className="mb-9 max-w-[56ch] text-base leading-[1.6] text-[#5b6b82]">
          Select an area to view its documents, evidence, and status.
        </p>

        {/* Areas */}
        <ol className="m-0 flex list-none flex-col overflow-hidden rounded-[10px] border border-[#d5dde8] bg-white p-0">
          {AREAS.map((area, index) => {
            const number = index + 1;

            return (
              <li
                key={area.title}
                className="border-[#d5dde8] not-first:border-t"
              >
                <button
                  type="button"
                  className="
                    group relative grid w-full
                    grid-cols-[76px_1fr_24px]
                    items-center gap-2
                    border-0 bg-transparent
                    p-[22px_24px_22px_0]
                    text-left
                    transition-colors duration-150
                    hover:bg-[#e4edf8]
                    focus-visible:bg-[#e4edf8]
                    focus-visible:outline-2
                    focus-visible:outline-[#1f4e8c]
                    focus-visible:-outline-offset-2
                    max-[520px]:grid-cols-[56px_1fr_20px]
                    max-[520px]:p-[18px_16px_18px_0]
                  "
                  onClick={() => onSelectArea && onSelectArea(number, area)}
                >
                  {/* Gold indicator */}
                  <span
                    className="
                      absolute left-0 top-0 bottom-0 w-1
                      bg-transparent
                      transition-colors duration-150
                      group-hover:bg-[#c58a10]
                      group-focus-visible:bg-[#c58a10]
                    "
                    aria-hidden="true"
                  />

                  {/* Number */}
                  <span
                    className="
                      text-center
                      font-serif
                      text-[2.4rem]
                      font-semibold
                      leading-none
                      text-[#1f4e8c]
                      max-[520px]:text-[1.9rem]
                    "
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  {/* Content */}
                  <span>
                    <span className="mb-0.5 block text-[0.78rem] font-medium text-[#5b6b82]">
                      Area {number}
                    </span>

                    <span
                      className="
                        block
                        font-serif
                        text-[1.2rem]
                        font-semibold
                        leading-[1.3]
                        max-[520px]:text-[1.08rem]
                      "
                    >
                      {area.title}
                    </span>

                    <span className="mt-1 block text-[0.9rem] leading-[1.5] text-[#5b6b82]">
                      {area.note}
                    </span>
                  </span>

                  {/* Arrow */}
                  <svg
                    className="
                      h-5 w-5
                      text-[#5b6b82]
                      transition-[transform,color]
                      duration-150
                      group-hover:translate-x-[3px]
                      group-hover:text-[#1f4e8c]
                      group-focus-visible:translate-x-[3px]
                      group-focus-visible:text-[#1f4e8c]
                    "
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
