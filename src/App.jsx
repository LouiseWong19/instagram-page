import "./App.scss";
import Bio from "./components/Bio/Bio";
import HeaderDetail from "./components/HeaderDetail/HeaderDetail";
import Highlight from "./components/Highlight/Highlight";
import NavBar from "./components/NavBar/NavBar";
import user from "./assets/data/data.js";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app__profile">
        <HeaderDetail username={user.username} />
        <Bio
          name={user.name}
          bio={user.biography}
          website={user.website}
        />
        <Highlight user={user}/>
      </div>
    </div>
  );
};

export default App;
