import "../Profile.scss";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useEffect } from "react";

const ProfileInfo = () => {
  useAxiosPrivate();

  const user = {
    name: "Іван Іваненко",
    email: "ivan@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    joined: "1 червня 2024",
    status: "Активний",
  };

  useEffect(() => {
    // axiosPrivate.get("/api/user/3/profile")
    //   .then(response => {
    //     console.log("Profile data:", response.data);
    //   })
  })

  const avatarClass: string = "w-40 rounded";
  const containerClass: string = "profile-info bg-base-200";
  const cardClass: string = "rounded-md bg-base-100 shadow-accent-content max-w-7xl m-auto p-8";
  const nameClass: string = "text-xl font-semibold";
  const emailClass: string = "text-sm text-base-content/70";
  const infoListClass: string = "text-sm space-y-2";

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <div className="flex gap-5">
          <div className="avatar">
            <div className={avatarClass}>
              <img src={user.avatar} alt="avatar" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2 className={nameClass}>{user.name}</h2>
              <p className={emailClass}>{user.email}</p>
              <ul className={infoListClass}>
                <li>
                  <span className="font-medium">Дата реєстрації:</span> {user.joined}
                </li>
                <li>
                  <span className="font-medium">Статус:</span> {user.status}
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