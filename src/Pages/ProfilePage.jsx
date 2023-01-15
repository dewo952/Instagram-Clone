import React from "react";
import ProfileHeader from "../Components/ProfilePage Components/ProfileHeader";
import HighLights from "../Components/ProfilePage Components/HighLights";
import ProfilePost from "../Components/ProfilePage Components/ProfilePost";
import Footer from "../Components/Footer";

const ProfilePage = ({ setIsSettingModalOpen }) => {
  return (
    <div className="container pt-8 max-w-5xl">
      <main className="bg-slate-50">
        <ProfileHeader setIsSettingModalOpen={setIsSettingModalOpen} />
        <HighLights />
        <ProfilePost />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
