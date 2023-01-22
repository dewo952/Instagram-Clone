import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import { Routes, Route, Navigate } from "react-router-dom";
import DialogModalSettings from "./Components/DialogModalSettings";
import Login from "./Pages/LoginPage";
import EditProfitePage from "./Pages/EditProfitePage";
import Settings from "./Pages/Settings";
import ChangePasswordPage from "./Pages/ChangePasswordPage";

library.add(fas, far);

const App = () => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="/accounts"
          element={
            <>
              <NavBar />
              <Settings />
            </>
          }
        >
          <Route index element={<Navigate to="edit" replace />} />
          <Route path="edit" element={<EditProfitePage />} />
          <Route path="password" element={<ChangePasswordPage />} />
        </Route>

        <Route
          path="/"
          exact
          element={
            <>
              <NavBar />
              <HomePage />
            </>
          }
        ></Route>

        <Route
          path="/profilepage"
          element={
            <>
              <NavBar />
              <ProfilePage setIsSettingModalOpen={setIsSettingsModalOpen} />
            </>
          }
        ></Route>
      </Routes>

      <DialogModalSettings
        open={isSettingsModalOpen}
        setOpen={setIsSettingsModalOpen}
      />
    </>
  );
};
export default App;
