import React from "react";
import { useParams } from "react-router-dom";

import Faculty from "./areas/Faculty";
import VMGO from "./areas/VMGO";
import ExtComInvolvement from "./areas/ExtComInvolvement";
import Library from "./areas/Library";
import PhysicalPlantFacilities from "./areas/PhysicalPlantFacilities";
import Laboratories from "./areas/Laboratories";
import Administration from "./areas/Administration";
import Research from "./areas/Research";
import CurriculumInstruction from "./areas/CurriculumInstruction";
import SupportStudents from "./areas/SupportStudents";

const areas = [
  {
    slug: "vmgo",
    title: "Vision, Mission, Goals and Objectives",
    component: <VMGO />,
  },
  {
    slug: "faculty",
    title: "Faculty",
    component: <Faculty />,
  },
  {
    slug: "curriculum-instruction",
    title: "Curriculum and Instruction",
    component: <CurriculumInstruction />,
  },
  {
    slug: "support-to-students",
    title: "Support to Students",
    component: <SupportStudents />,
  },
  {
    slug: "research",
    title: "Research",
    component: <Research />,
  },
  {
    slug: "extension-community-involvement",
    title: "Extension and Community Involvement",
    component: <ExtComInvolvement />,
  },
  {
    slug: "library",
    title: "Library",
    component: <Library />,
  },
  {
    slug: "physical-plant-facilities",
    title: "Physical Plant and Facilities",
    component: <PhysicalPlantFacilities />,
  },
  {
    slug: "laboratories",
    title: "Laboratories",
    component: <Laboratories />,
  },
  {
    slug: "administration",
    title: "Administration",
    component: <Administration />,
  },
];

const AreaPage = () => {
  const { slug } = useParams();

  const area = areas.find((area) => area.slug === slug);

  if (!area) {
    return <h1>Area not found</h1>;
  }

  return <>{area.component}</>;
};

export default AreaPage;
