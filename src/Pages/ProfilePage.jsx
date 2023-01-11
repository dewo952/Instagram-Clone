import React from 'react'
import ProfileHeader from '../Components/ProfilePage Components/ProfileHeader'
import HighLights from '../Components/ProfilePage Components/HighLights'
import ProfilePost from '../Components/ProfilePage Components/ProfilePost'

const ProfilePage = () => {
  return (
    <div className="container pt-8 max-w-5xl">
        <main className="bg-slate-50">
            <ProfileHeader/>
            <HighLights/>
        </main>
    </div>
  )
}

export default ProfilePage