import "../Profile.scss";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
  // Хук для приватного екземпляру Axios
  const axiosPrivate = useAxiosPrivate();

  // Стан для збереження даних профілю
  const [profile, setProfile] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    reg_datetime: string;
    avatar: string;
  } | null>(null);

  // Стан для збереження помилки
  const [error, setError] = useState<string | null>(null);

  // Стан для збереження URL-адреси аватарки
  const [avatar, setAvatar] = useState("");
  // Стан для збереження ID користувача
  const [userId, setUserId] = useState<string>("");

  // Ефекти для завантаження даних профілю
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // отримати CSRF-токен з куків
        const csrfToken: string | undefined =
          document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];

        // отримати дані профілю
        const response = await axiosPrivate.get("/api/user/my-profile", {
          headers: {
            "X-CSRF-TOKEN": csrfToken,
          },
        });

        // зберегти дані профілю
        setProfile(response.data.user_data);
        // зберегти ID користувача
        setUserId(response.data.user_data.id);
      } catch (err) {
        console.error("Error fetching profile:", err);
        // встановити помилку, якщо її неможливо завантажити
        setError("Не вдалося завантажити профіль.");
      }
    };

    // викликати функцію для завантаження даних профілю
    fetchProfile();
  }, [axiosPrivate]);

  // Ефекти для завантаження аватарки
  useEffect(() => {
    // якщо ID користувача вже встановлено
    if (userId) {
      axiosPrivate
        .get(`/api/user/ava/${userId}`, { responseType: "blob" })
        .then((response: any) => {
          // зберегти URL-адресу аватарки
          const url = URL.createObjectURL(response.data);
          setAvatar(url);
        })
        .catch((error: any) => {
          // якщо аватарка не знайдена, встановити текстовий її замінник
          if (error.response?.status === 404) {
            setAvatar("No ava");
          } else {
            console.error("Error fetching avatar:", error);
          }
        });
    }
    axiosPrivate
      .get(`/api/user/ava/${userId}`, { responseType: "blob" })
      .then((response: any) => {
        console.log(response.data);
        const url = URL.createObjectURL(response.data);
        setAvatar(url);
      })
      .catch((error: any) => {
        if (error.response?.status === 404) {
          setAvatar("No ava");
        } else {
          console.error("Error fetching avatar:", error);
        }
      });
  }, [userId]);

  // класи для стилів
  const containerClass = "profile-info bg-base-200";
  const cardClass = "rounded-md bg-base-100 shadow-accent-content max-w-7xl m-auto p-8";
  const nameClass = "text-xl font-semibold";
  const emailClass = "text-sm text-base-content/70";
  const infoListClass = "text-sm space-y-2";

  // якщо помилка не відсутня, вивести повідомлення про помилку
  if (error) {
    return (
      <div className={containerClass}>
        <p className="text-red-500 text-base-300">{error}</p>
      </div>
    );
  }

  // якщо дані профілю не завантажені, вивести повідомлення про завантаження
  if (!profile) {
    return (
      <div className={containerClass}>
        <p>Завантаження профілю...</p>
      </div>
    );
  }

  // вивести дані профілю
  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <div className="flex gap-5">
          <div className="avatar">
            {avatar === "No ava" ? (
              // якщо аватарка не знайдена, вивести текстовий її замінник
              <div className="avatar avatar-placeholder">
                <div className="bg-primary w-40 text-neutral-content w-24">
                  <span className="text-3xl">
                    {profile.first_name ? profile.first_name.charAt(0).toUpperCase() : ""}{" "}
                    {profile.last_name ? profile.last_name.charAt(0).toUpperCase() : ""}
                  </span>
                </div>
              </div>
            ) : (
              // якщо аватарка знайдена, вивести її
              <img src={avatar} alt="avatar" className="settingsAvatarImg" />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2 className={`${nameClass} text-primary`}>
                {profile.first_name} {profile.last_name}
              </h2>
              {profile.email && (
                <p className={`${emailClass} badge badge-outline badge-info w-fit`}>
                  {profile.email}
                </p>
              )}
              <ul className={`${infoListClass}`}>
                <li>
                  <span className="font-medium block text-base-content/80">Дата реєстрації:</span>
                  <span className="badge badge-ghost mt-2">{profile.reg_datetime}</span>
                </li>
                <li>
                  <span className="font-medium block text-base-content/80">Вік:</span>
                  <span className="badge badge-accent mt-2">{profile.age} років</span>
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
