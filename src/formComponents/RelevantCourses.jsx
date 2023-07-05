import PropTypes from "prop-types";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function RelevantCourses({ coursesFields, setCoursesFields }) {
  const handleAdd = () => {
    let newfield = { RelevantCourse: "" };
    setCoursesFields([...coursesFields, newfield]);
  };
  const handleDelete = () => {
    if (coursesFields.length > 1) {
      setCoursesFields((prevFields) =>
        prevFields.slice(0, prevFields.length - 1)
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesFields.map((input, index) => {
        return (
          <div key={index}>
            <label htmlFor={`relevant-course-${index}`} className="block font-medium text-lg">
              Relevant Course {index + 1}:
            </label>
            <input
              id={`relevant-course-${index}`}
              value={input.RelevantCourse}
              onChange={(e) => {
                const updatedFields = [...coursesFields];
                updatedFields[index].RelevantCourse = e.target.value;
                setCoursesFields(updatedFields);
              }}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            coursesFields.length === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ff6161]"
          }`}
          onClick={handleDelete}
          disabled={coursesFields.length === 1}
        >
          <MdRemoveCircle />
          <p>Delete Field</p>
        </button>
      </div>
    </div>
  );
}

RelevantCourses.propTypes = {
  coursesFields: PropTypes.array.isRequired,
  setCoursesFields: PropTypes.func.isRequired,
};

export default RelevantCourses;
