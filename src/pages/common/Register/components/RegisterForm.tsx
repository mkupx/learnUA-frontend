import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/auth/register",
        {
          email,
          password,
          password_again: confirm,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Реєстрація успішна! Перенаправлення на сторінку входу...");
          navigate("/login");
        }
        else if (response.status === 409 || response.error) {
            alert("Користувач з таким email вже існує. Спробуйте інший email.");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert("Користувач з таким email вже існує. Спробуйте інший email.");
        }
        else if (error.response) {
          alert(`Помилка: ${error.response.data.message || "Сталася помилка при реєстрації"}`);
        } else if (error.request) {
          alert("Помилка: Сервер не відповідає. Спробуйте пізніше.");
        } else {
          alert(`Помилка: ${error.message}`);
        }
      });

    if (password !== confirm) {
      alert("Паролі не збігаються");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center">Реєстрація</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="you@example.com" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Пароль</span>
            </label>
            <input type="password" placeholder="••••••••" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Підтвердження пароля</span>
            </label>
            <input type="password" placeholder="••••••••" className="input input-bordered w-full" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Зареєструватися
          </button>
        </form>

        <div className="flex flex-col gap-2 pt-4 text-sm text-center">
          <span>
            Вже маєте акаунт?{" "}
            <Link to="/login" className="link link-primary">
              Увійдіть
            </Link>
          </span>
          <Link to="/" className="btn btn-ghost btn-sm mt-2">
            Повернутись на головну
          </Link>
        </div>
      </div>
    </div>
  );
}
