import PropTypes from "prop-types";

function Links({ links, setLinks }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="github" className="block text-lg font-medium">
          GitHub Id:
        </label>
        <input
          type="url"
          id="gitHub"
          value={Links.GitHub}
          onChange={(e) => setLinks({ ...links, GitHub: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="linkedin" className="block text-lg font-medium">
          LinkedIn Id:
        </label>
        <input
          type="url"
          id="linkedin"
          value={links.LinkedIn}
          onChange={(e) => setLinks({ ...links, LinkedIn: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

Links.propTypes = {
  links: PropTypes.object.isRequired,
  setLinks: PropTypes.func.isRequired,
};

export default Links;
