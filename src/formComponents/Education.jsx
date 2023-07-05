import PropTypes from "prop-types";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function Education({ educationFields, setEducationFields }) {
  const handleAdd = () => {
    let newfield = { Start: "", End: "", Degree: "", College: "", Grade: "" };
    setEducationFields([...educationFields, newfield]);
  };
  const handleDelete = () => {
    if (educationFields.length > 1) {
      setEducationFields((prevFields) =>
        prevFields.slice(0, prevFields.length - 1)
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {educationFields.map((input, index) => {
        return (
          <div key={index}>
            <h2 className="block font-medium text-lg">
              Education {index + 1}:
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 w-full">
                <div className="w-full">
                  <label
                    htmlFor={`education-start-${index}`}
                    className="block font-medium text-base"
                  >
                    Start:
                  </label>
                  <input
                    id={`education-start-${index}`}
                    value={input.Start}
                    onChange={(e) => {
                      const updatedFields = [...educationFields];
                      updatedFields[index].Start = e.target.value;
                      setEducationFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor={`education-end-${index}`}
                    className="block font-medium text-base"
                  >
                    End:
                  </label>
                  <input
                    id={`education-end-${index}`}
                    value={input.End}
                    onChange={(e) => {
                      const updatedFields = [...educationFields];
                      updatedFields[index].End = e.target.value;
                      setEducationFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor={`education-degree-${index}`} className="block font-medium text-base">
                  Degree (Eg: B.Tech., CE / INTERMEDIATE / MATRICULATION):
                </label>
                <input
                  id={`education-degree-${index}`}
                  value={input.Degree}
                  onChange={(e) => {
                    const updatedFields = [...educationFields];
                    updatedFields[index].Degree = e.target.value;
                    setEducationFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor={`education-college-${index}`}
                  className="block font-medium text-base"
                >
                  College (Eg: NIT Rourkela):
                </label>
                <input
                  id={`education-college-${index}`}
                  value={input.College}
                  onChange={(e) => {
                    const updatedFields = [...educationFields];
                    updatedFields[index].College = e.target.value;
                    setEducationFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label htmlFor={`education-grade-${index}`} className="block font-medium text-base">
                  CGPA/Percentage:
                </label>
                <input
                  id={`education-grade-${index}`}
                  value={input.Grade}
                  onChange={(e) => {
                    const updatedFields = [...educationFields];
                    updatedFields[index].Grade = e.target.value;
                    setEducationFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
            educationFields.length === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ff6161]"
          }`}
          onClick={handleDelete}
          disabled={educationFields.length === 1}
        >
          <MdRemoveCircle />
          <p>Delete Field</p>
        </button>
      </div>
    </div>
  );
}

Education.propTypes = {
  educationFields: PropTypes.array.isRequired,
  setEducationFields: PropTypes.func.isRequired,
};

export default Education;
