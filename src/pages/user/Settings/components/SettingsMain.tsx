import "../Settings.scss";
import React, { useState } from "react";

const SettingsMain = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Налаштування збережено!");
  };

  return (
    <div className="settings-main flex-1 bg-base-200 flex items-start justify-start">
      <form
        className="w-full rounded-md bg-base-100 shadow-accent-content p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Налаштування профілю</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Ім'я користувача</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введіть ім'я"
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введіть email"
          />
        </div>
        <div className="form-control mb-6">
          <label className="cursor-pointer label flex justify-between items-center">
            <span className="label-text font-medium">Увімкнути сповіщення</span>
            <input
              type="checkbox"
              className="toggle toggle-primary ml-2"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default SettingsMain;