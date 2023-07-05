import "./Preview.css";
import PropTypes from "prop-types";

const Preview = ({
  basicDetails,
  educationFields,
  links,
  skillsFields,
  coursesFields,
  experienceFields,
  achievementsFields,
  projectsFields,
}) => {
  return (
    <div className="m-2 border border-white -mt-2 p-2">
      <div className="page">
        <div className="headerContainer">
          <div className="header">
            <span className="name">{basicDetails.Name || "sample name"}</span>
            <br />
            <span className="paragraph">
              {basicDetails.Degree} | {basicDetails.College}
              <br />
              line2
              <br />
              line3
            </span>
          </div>
          <div className="header">
            <span className="paragraph">
              {basicDetails.YearMajor}
              <br />
              DOB: {basicDetails.DOB}
              <br />
              Mob.: +91-{basicDetails.Phone || "9998888222"}
              <br />
              Email.{basicDetails.Email || "me@mysite.com"}:<br />
              Web: mysite.com
            </span>
          </div>
        </div>

        <div className="columnsContainer">
          <div className="columnSmall">
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                Links:
              </h5>
              <span className="paragraph">
                <p>GitHub: {links.GitHub}</p>
                <p>LinkedIn: {links.LinkedIn}</p>
              </span>
            </div>
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                Skills:
              </h5>
              <span className="paragraph">
                <p>General: {skillsFields.General}</p>
                <p>Frameworks: {skillsFields.Frameworks}</p>
                <p>Operating Systems: {skillsFields.Os}</p>
                <p>Softwares: {skillsFields.Softwares}</p>
                <p>Langauges: {skillsFields.Languages}</p>
              </span>
            </div>
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                CourseWork:
              </h5>
              {coursesFields.map((field, index) => (
                <div key={index} className="paragraph flex flex-col">
                  {field.RelevantCourse}
                </div>
              ))}
            </div>
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                Education:
              </h5>
              {educationFields.map((field, index) => (
                <div key={index} className="paragraph flex flex-col">
                  <span>
                    {field.Start}-{field.End}
                  </span>
                  <span>{field.Degree}</span>
                  <span>{field.College}</span>
                  <span>Percentage: {field.Grade}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="columnLarge">
            <h5 className="heading border-b-2 border-black w-full mb-0">
              Experience:
            </h5>
            {experienceFields.map((field, index) => (
              <div key={index} className="paragraph flex flex-col">
                <span>
                  {field.Start}-{field.End}
                </span>
                <span>{field.Organization}</span>
                <span>{field.Role}</span>
                <span>{field.Team}</span>
                <p>{field.Description}</p>
              </div>
            ))}
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                Achievement:
              </h5>
              {achievementsFields.map((field, index) => (
                <span key={index} className="paragraph">
                  {field.Year}
                  {field.Event}
                  {field.Title}
                  {field.Description}
                </span>
              ))}
            </div>
            <div>
              <h5 className="heading border-b-2 border-black w-full mb-0">
                Side Projects:
              </h5>
              {projectsFields.map((field, index) => (
                <div key={index} className="paragraph flex flex-col">
                  <span>{field.Year}</span>
                  <span>{field.Title}</span>
                  <span>{field.Tech}</span>
                  <span>{field.Description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  basicDetails: PropTypes.object.isRequired,
  educationFields: PropTypes.array.isRequired,
  links: PropTypes.object.isRequired,
  skillsFields: PropTypes.object.isRequired,
  coursesFields: PropTypes.array.isRequired,
  experienceFields: PropTypes.array.isRequired,
  achievementsFields: PropTypes.array.isRequired,
  projectsFields: PropTypes.array.isRequired,
};

export default Preview;
