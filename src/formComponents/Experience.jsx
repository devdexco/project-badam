import PropTypes from "prop-types";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function Experience({ experienceFields, setExperienceFields }) {
  const handleAdd = () => {
    let newfield = {
      Start: "",
      End: "",
      Organization: "",
      Role: "",
      Team: "",
      Description: "",
    };
    setExperienceFields([...experienceFields, newfield]);
  };
  const handleDelete = () => {
    if (experienceFields.length > 1) {
      setExperienceFields((prevFields) =>
        prevFields.slice(0, prevFields.length - 1)
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {experienceFields.map((input, index) => {
        return (
          <div key={index}>
            <h2 className="block font-medium text-lg">
              Experience {index + 1}:
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 w-full">
                <div className="w-full">
                  <label
                    htmlFor={`experience-start-${index}`}
                    className="block font-medium text-base"
                  >
                    Start:
                  </label>
                  <input
                    id={`experience-start-${index}`}
                    value={input.Start}
                    onChange={(e) => {
                      const updatedFields = [...experienceFields];
                      updatedFields[index].Start = e.target.value;
                      setExperienceFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor={`experience-end-${index}`}
                    className="block font-medium text-base"
                  >
                    End:
                  </label>
                  <input
                    id={`experience-end-${index}`}
                    value={input.End}
                    onChange={(e) => {
                      const updatedFields = [...experienceFields];
                      updatedFields[index].End = e.target.value;
                      setExperienceFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor={`experience-org-${index}`}
                  className="block font-medium text-base"
                >
                  Organization (Eg: Amazon):
                </label>
                <input
                  id={`experience-org-${index}`}
                  value={input.Organization}
                  onChange={(e) => {
                    const updatedFields = [...experienceFields];
                    updatedFields[index].Organization = e.target.value;
                    setExperienceFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label htmlFor={`experience-role-${index}`} className="block font-medium text-base">
                  Role (Eg: Developer):
                </label>
                <input
                  id={`experience-role-${index}`}
                  value={input.Role}
                  onChange={(e) => {
                    const updatedFields = [...experienceFields];
                    updatedFields[index].Role = e.target.value;
                    setExperienceFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label htmlFor={`experience-team-${index}`} className="block font-medium text-base">
                  Team: (eg: Technical Team)
                </label>
                <input
                  id={`experience-team-${index}`}
                  value={input.Team}
                  onChange={(e) => {
                    const updatedFields = [...experienceFields];
                    updatedFields[index].Team = e.target.value;
                    setExperienceFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor={`experience-description-${index}`}
                  className="block font-medium text-base"
                >
                  Description:
                </label>
                <textarea
                  id={`experience-description-${index}`}
                  value={input.Description}
                  onChange={(e) => {
                    const updatedFields = [...experienceFields];
                    updatedFields[index].Description = e.target.value;
                    setExperienceFields(updatedFields);
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
            experienceFields.length === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ff6161]"
          }`}
          onClick={handleDelete}
          disabled={experienceFields.length === 1}
        >
          <MdRemoveCircle />
          <p>Delete Field</p>
        </button>
      </div>
    </div>
  );
}

Experience.propTypes = {
  experienceFields: PropTypes.array.isRequired,
  setExperienceFields: PropTypes.func.isRequired,
};

export default Experience;
