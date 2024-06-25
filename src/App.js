import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar titleText="Haris Siddiqui" firstMenu="Home"></NavBar>
      <div className="container">
        <TextForm />
      </div>
    </>
  );
}

export default App;
