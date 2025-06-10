import "../Profile.scss";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
  const axiosPrivate = useAxiosPrivate();
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    avatar: string;
    joined: string;
    status: string;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

        const response = await axiosPrivate.get("/api/user/my-profile", {
          headers: {
            "X-CSRF-TOKEN": csrfToken,
          },
        });

        console.log("Profile data:", response.data);
        setProfile(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Не вдалося завантажити профіль.");
      }
    };

    fetchProfile();
  }, [axiosPrivate]);

  const avatarClass = "w-40 rounded";
  const containerClass = "profile-info bg-base-200";
  const cardClass = "rounded-md bg-base-100 shadow-accent-content max-w-7xl m-auto p-8";
  const nameClass = "text-xl font-semibold";
  const emailClass = "text-sm text-base-content/70";
  const infoListClass = "text-sm space-y-2";

  if (error) {
    return (
      <div className={containerClass}>
        <p className="text-red-500 text-base-300">{error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className={containerClass}>
        <p>Завантаження профілю...</p>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <div className="flex gap-5">
          <div className="avatar">
            <div className={avatarClass}>
              <img src={profile.avatar} alt="avatar" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2 className={nameClass}>{profile.name}</h2>
              <p className={emailClass}>{profile.email}</p>
              <ul className={infoListClass}>
                <li>
                  <span className="font-medium">Дата реєстрації:</span> {profile.joined}
                </li>
                <li>
                  <span className="font-medium">Статус:</span> {profile.status}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
