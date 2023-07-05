import PropTypes from "prop-types";

function Skills({ skillsFields, setSkillsFields }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <div className="w-full">
            <label htmlFor="general-programming" className="block font-medium text-lg">
              General Programming:
            </label>
            <input
              id="general-programming"
              value={skillsFields.General}
              onChange={(e) =>
                setSkillsFields({ ...skillsFields, General: e.target.value })
              }
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="frameworks" className="block font-medium text-lg">
              Frameworks:
            </label>
            <input
              id="frameworks"
              value={skillsFields.Frameworks}
              onChange={(e) =>
                setSkillsFields({ ...skillsFields, Frameworks: e.target.value })
              }
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="operating-systems" className="block font-medium text-lg">
            Operating Systems:
          </label>
          <input
            id="operating-systems"
            value={skillsFields.Os}
            onChange={(e) =>
              setSkillsFields({ ...skillsFields, Os: e.target.value })
            }
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="softwares" className="block font-medium text-lg">
            Softwares:
          </label>
          <input
            id="softwares"
            value={skillsFields.Softwares}
            onChange={(e) =>
              setSkillsFields({ ...skillsFields, Softwares: e.target.value })
            }
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="languages" className="block font-medium text-lg">
            Languages:
          </label>
          <input
            id="languages"
            value={skillsFields.Languages}
            onChange={(e) =>
              setSkillsFields({ ...skillsFields, Languages: e.target.value })
            }
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  skillsFields: PropTypes.array.isRequired,
  setSkillsFields: PropTypes.func.isRequired,
};

export default Skills;
