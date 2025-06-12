import { useEffect, useState, FC } from "react";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import "../Settings.scss";

interface Props {
  userId: string;
  user: any;
}

const SettingsAvatar: FC<Props> = ({ userId, user }) => {
  const [avatar, setAvatar] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axiosPrivate
      .get(`/api/user/ava/${userId}`, { responseType: "blob" })
      .then((response) => {
        console.log(response.data);
        const url = URL.createObjectURL(response.data);
        setAvatar(url);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          setAvatar("No ava");
        } else {
          console.error("Error fetching avatar:", error);
        }
      });
  }, [userId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      formData.append("ava", e.target.files[0]);
    }

    axiosPrivate
      .put("/api/user/upload-ava", formData, {
        headers: {
          "X-CSRF-TOKEN": document.cookie.match(/csrf_access_token=([^;]+)/)?.[1],
        },
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200 && data.data.msg !== "Profile ava updated successfully") {
          setError(data.data.msg);
        }
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
          <label htmlFor="avatar" className="btn bg-accent-content settingsAvatarLabel">
            Вибрати аватар
          </label>
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
