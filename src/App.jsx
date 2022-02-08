import "./App.scss";
import Bio from "./components/Bio/Bio";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Bio name="pretty_cat" bio="hello" website="#"/>
    </div>
  );
};

export default App;
