import ProfileAside from "@/widgets/profile-aside/ProfileAside";
import SettingsMain from "./SettingsMain";

export default function SettingsWrapper() {
  return (
    <div className="flex min-h-screen bg-base-200 p-10">
      <div className="max-w-7xl mx-auto flex gap-6 w-full">
        <ProfileAside />
        <SettingsMain />
      </div>
    </div>
  );
}
