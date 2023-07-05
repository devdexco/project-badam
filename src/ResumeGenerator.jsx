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
    { src: "/fonts/CormorantGaramond-BoldItalic.ttf", fontWeight: "bold", fontStyle: "italic" },
  ],
});


// import { Font } from '@react-pdf/renderer'

// const hyphenationCallback = (word) => {
//   return word
// }

// Font.registerHyphenationCallback(hyphenationCallback);

const styles = StyleSheet.create({
  container: {
    padding: "40px 20px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "black",
    marginTop: "10px",
    textTransform: "uppercase",
  },
  header: {
    marginBottom: "10px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 15,
    marginVertical: 10,
    textDecoration: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 20,
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

const MyDocument = ({ name, email, phone, experience, education, skills }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.name} wrap={true}>
            {name || "sample name"}
          </Text>
          <Text style={styles.paragraph}>
            {"intro text \n line1 \n line2 \n line3" || intro}
          </Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.paragraph}>
            {`J‐90, NIT Srinagar, Hazaratbal \nSrinagar, J& K‐190 006, India \nMob.: +91-${phone || "9998888222"} \nEmail. ${email || "me@mysite.com"}: \nWeb: mysite.com ` ||
              intro}
          </Text>
        </View>
      </View>

      <View style={styles.columnsContainer}>
        <View style={styles.columnSmall}>
          <View>
            <Text style={styles.heading}>Links:</Text>
            <Text style={styles.paragraph}> {"no Links yet" || links}</Text>
          </View>
          <View>
            <Text style={styles.heading}>Skills:</Text>
            <Text style={styles.paragraph}> {skills}</Text>
          </View>
          <View>
            <Text style={styles.heading}>CourseWork:</Text>
            <Text style={styles.paragraph}>
              {" "}
              {"No coursework yet" || coursework}
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>Education:</Text>
            <Text style={styles.paragraph}> {education}</Text>
          </View>
        </View>
        <View style={styles.columnLarge}>
          <View>
            <Text style={styles.heading}>Experience:</Text>
            <Text style={styles.paragraph}>{experience}</Text>
          </View>
          <View>
            <Text style={styles.heading}>Achievements/ Awards:</Text>
            <Text style={styles.paragraph}>{experience}</Text>
          </View>
          <View>
            <Text style={styles.heading}>Side Project:</Text>
            <Text style={styles.paragraph}>{experience}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};

const ResumeGenerator = ({
  name,
  email,
  phone,
  experience,
  education,
  skills,
}) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 p-4 w-full h-5 bg-[#7b61ff] flex justify-center items-center">
        Generated Resume
      </h1>
      <PDFViewer className="h-[900px] w-3/4 rounded-xl">
        <MyDocument
          name={name}
          email={email}
          phone={phone}
          experience={experience}
          education={education}
          skills={skills}
        />
      </PDFViewer>
      <PDFDownloadLink
        document={
          <MyDocument
            name={name}
            email={email}
            phone={phone}
            experience={experience}
            education={education}
            skills={skills}
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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};

export default ResumeGenerator;
