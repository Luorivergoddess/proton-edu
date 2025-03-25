import React from "react";
import ProfileLayout from "@/components/profile/ProfileLayout";
import PersonalInfo from "@/components/profile/PersonalInfo";
import Achievements from "@/components/profile/Achievements";
import Notifications from "@/components/profile/Notifications";
import PointsMall from "@/components/profile/PointsMall";
import Settings from "@/components/profile/Settings";

export default function ProfilePage() {
  return (
    <main>
      <ProfileLayout>
        <PersonalInfo />
        <Achievements />
        <Notifications />
        <PointsMall />
        <Settings />
      </ProfileLayout>
    </main>
  );
}
