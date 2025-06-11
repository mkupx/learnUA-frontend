import "../Profile.scss";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
  const axiosPrivate = useAxiosPrivate();
  const [profile, setProfile] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    reg_datetime: string;
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

        setProfile(response.data.user_data);
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
              <img src="#" alt="avatar" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2 className={nameClass}>{profile.first_name} {profile.last_name}</h2>
              <p className={emailClass}>{profile.email}</p>
              <ul className={infoListClass}>
                <li>
                  <span className="font-medium block">Дата реєстрації:</span> {profile.reg_datetime}
                  <span className="font-medium">{profile.age} років</span>
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
