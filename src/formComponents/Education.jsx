import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

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
                  <DatePicker
                    id={`education-start-${index}`}
                    value={input.Start ? input.Start : ""}
                    onChange={(date) => {
                      const updatedFields = [...educationFields];
                      updatedFields[index].Start = date
                        ? date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })
                        : "";
                      setEducationFields(updatedFields);
                    }}
                    format="MM/yyyy"
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
                  <DatePicker
                    id={`education-end-${index}`}
                    value={input.End ? input.End : ""}
                    onChange={(date) => {
                      const updatedFields = [...educationFields];
                      updatedFields[index].End = date
                        ? date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })
                        : "";
                      setEducationFields(updatedFields);
                    }}
                    format="MM/yyyy"
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
