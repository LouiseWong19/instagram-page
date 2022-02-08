import "./App.scss";
import Bio from "./components/Bio/Bio";
import NavBar from "./components/NavBar/NavBar";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app__profile">
        <ProfilePicture
          picture="https://placekitten.com/90/90"
          alt="profile pic"
        />
        <Bio
          name="pretty_cat"
          bio="hello"
          website="https://www.google.co.uk/"
        />
      </div>
    </div>
  );
};

export default App;
