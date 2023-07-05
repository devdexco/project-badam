import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function SideProjects({ projectsFields, setProjectsFields }) {
  const handleAdd = () => {
    let newfield = { Year: "", Title: "", Tech: "", Description: "" };
    setProjectsFields([...projectsFields, newfield]);
  };
  const handleDelete = () => {
    if (projectsFields.length > 1) {
      setProjectsFields((prevFields) =>
        prevFields.slice(0, prevFields.length - 1)
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {projectsFields.map((input, index) => {
        return (
          <div key={index}>
            <h2 className="block font-medium text-lg">Project {index + 1}:</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 w-full">
                <div className="w-full">
                  <label htmlFor={`project-year-${index}`} className="block font-medium text-base">
                    Year:
                  </label>
                  <DatePicker
                    id={`achievement-year-${index}`}
                    value={input.Year ? input.Year : ""}
                    onChange={(date) => {
                      const updatedFields = [...projectsFields];
                      updatedFields[index].Year = date
                        ? date.toLocaleDateString("en-US", {
                            year: "numeric",
                          })
                        : "";
                      setProjectsFields(updatedFields);
                    }}
                    format="yyyy"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor={`project-title-${index}`}
                    className="block font-medium text-base"
                  >
                    Project Title:
                  </label>
                  <input
                    id={`project-title-${index}`}
                    value={input.Event}
                    onChange={(e) => {
                      const updatedFields = [...projectsFields];
                      updatedFields[index].Title = e.target.value;
                      setProjectsFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor={`project-tech-${index}`} className="block font-medium text-base">
                  Tech Stack Used: (eg: HTML, CSS, Js)
                </label>
                <input
                  id={`project-tech-${index}`}
                  value={input.Tech}
                  onChange={(e) => {
                    const updatedFields = [...projectsFields];
                    updatedFields[index].Tech = e.target.value;
                    setProjectsFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor={`project-description-${index}`}
                  className="block font-medium text-base"
                >
                  Description:
                </label>
                <textarea
                  id={`project-description-${index}`}
                  value={input.Description}
                  onChange={(e) => {
                    const updatedFields = [...projectsFields];
                    updatedFields[index].Description = e.target.value;
                    setProjectsFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex self-end items-center justify-center gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-1 self-end text-base text-[#7b61ff]"
          onClick={handleAdd}
        >
          <MdAddCircle />
          <p>Add Field</p>
        </button>
        <button
          type="button"
          className={`flex items-center justify-center gap-1 self-end text-base ${
            projectsFields.length === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ff6161]"
          }`}
          onClick={handleDelete}
          disabled={projectsFields.length === 1}
        >
          <MdRemoveCircle />
          <p>Delete Field</p>
        </button>
      </div>
    </div>
  );
}

SideProjects.propTypes = {
  projectsFields: PropTypes.array.isRequired,
  setProjectsFields: PropTypes.func.isRequired,
};

export default SideProjects;
