import logo from "./logo.svg";
import "./App.css";

// Component that receives student information through props
function LabDetails({ info }) {
  return (
    <div className="lab-container">
      <img src={logo} className="react-logo" alt="React Logo" />

      <h1>{info.title}</h1>
      <h2>{info.subtitle}</h2>
      <h3>{info.studentId}</h3>
      <h4>{info.studentName}</h4>
      <p>{info.college}</p>
    </div>
  );
}

function App() {
  const labInfo = {
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab exercise",
    studentId: "101176410",
    studentName: "Beatriz Ferreira",
    college: "George Brown College, Toronto",
  };

  return <LabDetails info={labInfo} />;
}

export default App;
