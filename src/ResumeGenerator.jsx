import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Garamond",
  fonts: [
    { src: "/fonts/CormorantGaramond-Regular.ttf" },
    { src: "/fonts/CormorantGaramond-Bold.ttf", fontWeight: "bold" },
    { src: "/fonts/CormorantGaramond-Italic.ttf", fontStyle: "italic" },
    {
      src: "/fonts/CormorantGaramond-BoldItalic.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  container: {
    padding: "40px 20px",
  },
  name: {
    fontSize: "24px",
    marginTop: "10px",
    textAlign: "left",
    fontWeight: "bold",
  },
  header: {
    marginBottom: "10px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentEducation: {
    color: "#931726",
    marginTop: "4px",
    fontSize: "16px",
    textAlign: "left",
  },
  vspace: {
    marginTop: "0.2cm",
  },
  generalDetails: {
    textAlign: "left",
    marginTop: "3px",
    fontSize: "11px",
  },
  paragraph: {
    fontSize: "12px",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: "15px",
    fontFamily: "Garamond",
  },
  heading: {
    fontSize: "16px",
    marginVertical: 10,
    textDecoration: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 20,
    color: "#931726",
  },
  section: {
    marginBottom: 10,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "150px",
    backgroundColor: "#7b61ff",
    color: "#fff",
    margin: "10px 0",
    borderRadius: "10px",
  },
  columnsContainer: {
    display: "grid",
    flexDirection: "row",
    flexFlow: "row wrap",
  },
  columnSmall: {
    width: "35%",
  },
  columnLarge: {
    width: "65%",
  },
});

const MyDocument = ({
  basicDetails,
  educationFields,
  links,
  skillsFields,
  coursesFields,
  experienceFields,
  achievementsFields,
  projectsFields,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.name} wrap={true}>
            {basicDetails.Name || "sample name"}
          </Text>
          <Text style={styles.currentEducation}>
            {`${basicDetails.Degree} | ${basicDetails.College}`}
          </Text>
          <div style={styles.vspace}></div>
          <View style={styles.header}>
            <Text style={styles.generalDetails}>
              {`${basicDetails.YearMajor}. \nDOB: ${
                basicDetails.DOB
              } \nContact: +91-${basicDetails.Phone || "9998888222"} \nEmail. ${
                basicDetails.Email || "me@mysite.com"
              }`}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.columnsContainer}>
        <View style={styles.columnSmall}>
          <View>
            <Text style={styles.heading}>Education:</Text>
            {educationFields.map((field, index) => (
              <Text key={index} style={styles.paragraph}>
                {field.Start}-{field.End}
                {field.Degree}
                {field.College}
                {field.Grade}
              </Text>
            ))}
          </View>

          <View>
            <Text style={styles.heading}>Links:</Text>
            <Text
              style={styles.paragraph}
            >{`GitHub: ${links.GitHub} \n LinkedIn: ${links.LinkedIn}`}</Text>
          </View>
          <View>
            <Text style={styles.heading}>Skills:</Text>
            <Text style={styles.paragraph}>
              General: {skillsFields.General}
            </Text>
            <Text style={styles.paragraph}>
              Frameworks: {skillsFields.Frameworks}
            </Text>
            <Text style={styles.paragraph}>
              Operating Systems: {skillsFields.Os}
            </Text>
            <Text style={styles.paragraph}>
              Softwares: {skillsFields.Softwares}
            </Text>
            <Text style={styles.paragraph}>
              Langauges: {skillsFields.Languages}
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>Relevant Courses:</Text>
            {coursesFields.map((field, index) => (
              <Text key={index} style={styles.paragraph}>
                {field.RelevantCourse}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.columnLarge}>
          <View>
            <Text style={styles.heading}>Experience:</Text>
            {experienceFields.map((field, index) => (
              <Text key={index} style={styles.paragraph}>
                {field.Start}-{field.End}
                {field.Organization}
                {field.Role}
                {field.Role}
                {field.Team}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.heading}>Achievements:</Text>
            {achievementsFields.map((field, index) => (
              <Text key={index} style={styles.paragraph}>
                {field.Year}
                {field.Event}
                {field.Title}
                {field.Description}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.heading}>Projects:</Text>
            {projectsFields.map((field, index) => (
              <Text key={index} style={styles.paragraph}>
                {field.Year}
                {field.Title}
                {field.Tech}
                {field.Description}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  basicDetails: PropTypes.array.isRequired,
  educationFields: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  skillsFields: PropTypes.array.isRequired,
  coursesFields: PropTypes.array.isRequired,
  experienceFields: PropTypes.array.isRequired,
  achievementsFields: PropTypes.array.isRequired,
  projectsFields: PropTypes.array.isRequired,
};

const ResumeGenerator = ({
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
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 p-4 w-full h-5 bg-[#7b61ff] flex justify-center items-center">
        Generated Resume
      </h1>
      <PDFViewer className="h-[900px] w-3/4 rounded-xl">
        <MyDocument
          basicDetails={basicDetails}
          educationFields={educationFields}
          links={links}
          skillsFields={skillsFields}
          coursesFields={coursesFields}
          experienceFields={experienceFields}
          achievementsFields={achievementsFields}
          projectsFields={projectsFields}
        />
      </PDFViewer>
      <PDFDownloadLink
        document={
          <MyDocument
            basicDetails={basicDetails}
            links={links}
            educationFields={educationFields}
            skillsFields={skillsFields}
            coursesFields={coursesFields}
            experienceFields={experienceFields}
            achievementsFields={achievementsFields}
            projectsFields={projectsFields}
          />
        }
        fileName="resume.pdf"
        style={styles.button}
      >
        Download PDF
      </PDFDownloadLink>
    </div>
  );
};

ResumeGenerator.propTypes = {
  basicDetails: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  educationFields: PropTypes.array.isRequired,
  skillsFields: PropTypes.array.isRequired,
  coursesFields: PropTypes.array.isRequired,
  experienceFields: PropTypes.array.isRequired,
  achievementsFields: PropTypes.array.isRequired,
  projectsFields: PropTypes.array.isRequired,
};

export default ResumeGenerator;
