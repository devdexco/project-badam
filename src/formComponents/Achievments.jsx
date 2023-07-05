import PropTypes from "prop-types";
import DatePicker from "react-date-picker";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function Achievements({ achievementsFields, setAchievementsFields }) {
  const handleAdd = () => {
    let newfield = { Year: "", Event: "", Title: "", Description: "" };
    setAchievementsFields([...achievementsFields, newfield]);
  };
  const handleDelete = () => {
    if (achievementsFields.length > 1) {
      setAchievementsFields((prevFields) =>
        prevFields.slice(0, prevFields.length - 1)
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {achievementsFields.map((input, index) => {
        return (
          <div key={index}>
            <h2 className="block font-medium text-lg">
              Achievement {index + 1}:
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 w-full">
                <div className="w-full">
                  <label htmlFor={`achievement-year-${index}`} className="block font-medium text-base">
                    Year:
                  </label>
                  <DatePicker
                    id={`achievement-year-${index}`}
                    value={input.Year ? input.Year : ""}
                    onChange={(date) => {
                      const updatedFields = [...achievementsFields];
                      updatedFields[index].Year = date
                        ? date.toLocaleDateString("en-US", {
                            year: "numeric",
                          })
                        : "";
                      setAchievementsFields(updatedFields);
                    }}
                    format="yyyy"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor={`achievement-event-${index}`}
                    className="block font-medium text-base"
                  >
                    Event:
                  </label>
                  <input
                    id={`achievement-event-${index}`}
                    value={input.Event}
                    onChange={(e) => {
                      const updatedFields = [...achievementsFields];
                      updatedFields[index].Event = e.target.value;
                      setAchievementsFields(updatedFields);
                    }}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor={`achievement-title-${index}`} className="block font-medium text-base">
                  Title:
                </label>
                <input
                  id={`achievement-title-${index}`}
                  value={input.Title}
                  onChange={(e) => {
                    const updatedFields = [...achievementsFields];
                    updatedFields[index].Title = e.target.value;
                    setAchievementsFields(updatedFields);
                  }}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor={`achievement-desc-${index}`}
                  className="block font-medium text-base"
                >
                  Description:
                </label>
                <input
                  id={`achievement-desc-${index}`}
                  value={input.Description}
                  onChange={(e) => {
                    const updatedFields = [...achievementsFields];
                    updatedFields[index].Description = e.target.value;
                    setAchievementsFields(updatedFields);
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
            achievementsFields.length === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ff6161]"
          }`}
          onClick={handleDelete}
          disabled={achievementsFields.length === 1}
        >
          <MdRemoveCircle />
          <p>Delete Field</p>
        </button>
      </div>
    </div>
  );
}

Achievements.propTypes = {
  achievementsFields: PropTypes.array.isRequired,
  setAchievementsFields: PropTypes.func.isRequired,
};

export default Achievements;
