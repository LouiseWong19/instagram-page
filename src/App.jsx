import "./App.scss";
import Bio from "./components/Bio/Bio";
import HeaderDetail from "./components/HeaderDetail/HeaderDetail";
import Highlight from "./components/Highlight/Highlight";
import NavBar from "./components/NavBar/NavBar";
import user from "./assets/data/data.js";
import ProfileDetail from "./components/ProfileDetail/ProfileDetail";
import GridNavBar from "./components/GridNavBar/GridNavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="app__profile">
        <HeaderDetail username={user.username} />
        <Bio name={user.name} bio={user.biography} website={user.website} />
        <Highlight user={user} />
      </div>
      <div className="app__information">
        <ProfileDetail
          posts={user.posts}
          followers={user.followers}
          following={user.following}
        />
      </div>
      <div className="app__posts">
        <GridNavBar />
      </div>
    </div>
  );
};

export default App;
