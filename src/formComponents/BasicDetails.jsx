import PropTypes from "prop-types";

function BasicDetails({ basicDetails, setBasicDetails }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={basicDetails.Name}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, Name: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="degree" className="block text-lg font-medium">
          Current Degree:
        </label>
        <input
          type="text"
          id="degree"
          value={basicDetails.Degree}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, Degree: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="college" className="block font-medium text-lg">
          Current College:
        </label>
        <input
          type="text"
          id="college"
          value={BasicDetails.College}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, College: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="yearMajor" className="block font-medium text-lg">
          Year & Major (eg: 2nd Year, Civil Engg.):
        </label>
        <input
          type="text"
          id="yearMajor"
          value={basicDetails.YearMajor}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, YearMajor: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="dob" className="block font-medium text-lg">
          DOB (eg: 01 January 2000):
        </label>
        <input
          type="text"
          id="dob"
          value={basicDetails.DOB}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, DOB: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium text-lg">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={basicDetails.Email}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, Email: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium text-lg">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          value={BasicDetails.Phone}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, Phone: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

BasicDetails.propTypes = {
  basicDetails: PropTypes.object.isRequired,
  setBasicDetails: PropTypes.func.isRequired,
};

export default BasicDetails;
