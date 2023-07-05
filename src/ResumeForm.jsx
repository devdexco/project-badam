import { useState } from "react";
import PropTypes from "prop-types";
import Preview from "./Preview";

import BasicDetails from "./formComponents/BasicDetails";
import Education from "./formComponents/Education";
import Links from "./formComponents/Links";
import Skills from "./formComponents/Skills";
import RelevantCourses from "./formComponents/RelevantCourses";
import Experience from "./formComponents/Experience";
import Achievements from "./formComponents/Achievments";
import SideProjects from "./formComponents/SideProjects";

const ResumeForm = ({ generateResume }) => {
  const [page, setPage] = useState(0);
  const [basicDetails, setBasicDetails] = useState({
    Name: "",
    Degree: "",
    College: "",
    YearMajor: "",
    DOB: "",
    Email: "",
    Phone: "",
  });
  const [educationFields, setEducationFields] = useState([
    { Start: "", End: "", Degree: "", College: "", Grade: "" },
  ]);
  const [links, setLinks] = useState({ GitHub: "", LinkedIn: "" });
  const [skillsFields, setSkillsFields] = useState({
    General: "",
    Frameworks: "",
    Os: "",
    Softwares: "",
    Languages: "",
  });
  const [coursesFields, setCoursesFields] = useState([{ RelevantCourse: "" }]);
  const [experienceFields, setExperienceFields] = useState([
    {
      Start: "",
      End: "",
      Organization: "",
      Role: "",
      Team: "",
      Description: "",
    },
  ]);
  const [achievementsFields, setAchievementsFields] = useState([
    { Year: "", Event: "", Title: "", Description: "" },
  ]);
  const [projectsFields, setProjectsFields] = useState([
    { Year: "", Title: "", Tech: "", Description: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResume({
      basicDetails,
      educationFields,
      links,
      skillsFields,
      coursesFields,
      experienceFields,
      achievementsFields,
      projectsFields,
    });
  };

  const handlePrev = () => {
    setPage((currPage) => currPage - 1);
  };

  const handleNext = () => {
    setPage((currPage) => currPage + 1);
  };

  const FormTitles = [
    "Basic Info",
    "Education Details",
    "Links",
    "Skills",
    "Relevant Courses",
    "Experience",
    "Achievements",
    "Side Projects",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <BasicDetails
          basicDetails={basicDetails}
          setBasicDetails={setBasicDetails}
        />
      );
    } else if (page === 1) {
      return (
        <Education
          educationFields={educationFields}
          setEducationFields={setEducationFields}
        />
      );
    } else if (page === 2) {
      return <Links links={links} setLinks={setLinks} />;
    } else if (page === 3) {
      return (
        <Skills skillsFields={skillsFields} setSkillsFields={setSkillsFields} />
      );
    } else if (page === 4) {
      return (
        <RelevantCourses
          coursesFields={coursesFields}
          setCoursesFields={setCoursesFields}
        />
      );
    } else if (page === 5) {
      return (
        <Experience
          experienceFields={experienceFields}
          setExperienceFields={setExperienceFields}
        />
      );
    } else if (page === 6) {
      return (
        <Achievements
          achievementsFields={achievementsFields}
          setAchievementsFields={setAchievementsFields}
        />
      );
    } else if (page === 7) {
      return (
        <SideProjects
          projectsFields={projectsFields}
          setProjectsFields={setProjectsFields}
        />
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 p-4 w-full h-5 bg-[#7b61ff] flex justify-center items-center">
        Resume Generator
      </h1>
      <div className="flex w-full">
        <form className=" w-1/2 p-6 bg-white rounded-xl shadow">
          <div className="w-full bg-black h-[10px] rounded-lg overflow-hidden mb-3">
            <div
              className={
                "h-full bg-[#7b61ff] " +
                (page === 0
                  ? "w-[12.5%]"
                  : page === 1
                  ? "w-[25%]"
                  : page === 2
                  ? "w-[37.5%]"
                  : page === 3
                  ? "w-[50%]"
                  : page === 4
                  ? "w-[62.5%]"
                  : page === 5
                  ? "w-[75%]"
                  : page === 6
                  ? "w-[87.5%]"
                  : "w-[100%]")
              }
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">
              <h1>{FormTitles[page]}:</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="flex gap-2 mt-4">
              <button
                type="button"
                disabled={page == 0}
                onClick={handlePrev}
                className={`text-white focus:outline-none font-medium rounded-sm text-sm px-10 py-2 text-center ${
                  page === 0
                    ? "bg-slate-400"
                    : "bg-[#7b61ff] hover:bg-purple-800"
                }`}
              >
                Prev
              </button>
              <button
                type="button"
                onClick={
                  page !== FormTitles.length - 1 ? handleNext : handleSubmit
                }
                className={`text-white focus:outline-none font-medium rounded-sm text-sm px-10 py-2 text-center ${
                  page === FormTitles.length - 1
                    ? "bg-green-500 hover:bg-green-800"
                    : "bg-[#7b61ff] hover:bg-purple-800"
                }`}
              >
                {" "}
                {page === FormTitles.length - 1 ? "Submit" : "Next"}{" "}
              </button>
            </div>
          </div>
        </form>
        <Preview
          basicDetails={basicDetails}
          educationFields={educationFields}
          links={links}
          skillsFields={skillsFields}
          coursesFields={coursesFields}
          experienceFields={experienceFields}
          achievementsFields={achievementsFields}
          projectsFields={projectsFields}
        />
      </div>
    </div>
  );
};

ResumeForm.propTypes = {
  generateResume: PropTypes.func.isRequired,
};

export default ResumeForm;
