import "./App.scss";
import Bio from "./components/Bio/Bio";
import HeaderDetail from "./components/HeaderDetail/HeaderDetail";
import Highlight from "./components/Highlight/Highlight";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app__profile">
        <HeaderDetail username="prettyCat" />
        <Bio
          name="pretty_cat"
          bio="hello"
          website="https://www.google.co.uk/"
        />
        <Highlight highlight="https://placekitten.com/56/56" caption="cat moment"/>
      </div>
    </div>
  );
};

export default App;
