import React from "react";
import NavBar from "./Components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

library.add(fas, far);

const App = () => {
  return (
    <div>
      <NavBar />
      <ProfilePage />
    </div>
  );
};

export default App;
