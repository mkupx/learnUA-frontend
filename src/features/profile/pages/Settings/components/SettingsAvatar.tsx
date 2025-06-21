import { useEffect, useState, FC } from "react";
import * as motion from "motion/react-client";
import "../Settings.scss";

import useAxiosPrivate from "@/shared/hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

interface User {
  first_name: string;
  last_name: string;
}

interface Props {
  userId: string;
  user: User;
}

const SettingsAvatar: FC<Props> = ({ userId, user }) => {
  const [avatar, setAvatar] = useState<string>("");
  const axiosPrivate = useAxiosPrivate();
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    axiosPrivate
      .get<Blob>(`/api/user/ava/${userId}`, { responseType: "blob" })
      .then((response) => {
        console.log(response);
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
  }, [userId, axiosPrivate]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      formData.append("ava", e.target.files[0]);
    }

    axiosPrivate
      .put<{ msg: string }>("/api/user/upload-ava", formData, {
        headers: {
          "X-CSRF-TOKEN": document.cookie.match(/csrf_access_token=([^;]+)/)?.[1] ?? "",
        },
      })
      .then((data) => {
        if (data.status === 200 && data.data.msg !== "Profile ava updated successfully") {
          setError(data.data.msg);
        } else if (data.data.msg === "Profile ava updated successfully") {
          navigate("/profile");
        }
      })
      .catch((error: any) => {
        console.log(error);
        setError("Помилка при завантаженні аватара. Спробуйте ще раз.");
      });
  }

  return (
    <>
      <div className="avatarWrapper">
        {avatar === "No ava" ? (
          <div className="avatar avatar-placeholder">
            <div className="bg-primary w-40 text-neutral-content w-24">
              <span className="text-3xl">
                {user.first_name ? user.first_name.charAt(0).toUpperCase() : ""}{" "}
                {user.last_name ? user.last_name.charAt(0).toUpperCase() : ""}
              </span>
            </div>
          </div>
        ) : (
          <img src={avatar} alt="avatar" className="settingsAvatarImg" />
        )}
        <div className="error mt-3">{error}</div>
        <form action="#">
          <motion.label
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            htmlFor="avatar"
            className="btn bg-accent-content settingsAvatarLabel"
          >
            Вибрати аватар
          </motion.label>
          <input
            type="file"
            accept="image/*"
            className="settingsAvatarInput"
            onChange={handleChange}
            name="avatar"
            id="avatar"
          />
        </form>
      </div>
    </>
  );
};

export default SettingsAvatar;
