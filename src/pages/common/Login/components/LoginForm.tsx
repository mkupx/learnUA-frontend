import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../../../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axiosPrivate
      .post("/api/auth/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          alert("Вхід успішний! Перенаправлення на головну сторінку...");
          login();
          navigate("/profile");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            alert("Невірний email або пароль. Спробуйте ще раз.");
          } else {
            alert(`Помилка: ${error.response.data.message || "Сталася помилка при вході"}`);
          }
        }
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center">Вхід</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-full">
            Увійти
          </button>
        </form>

        <p className="text-center text-sm">
          Немає акаунта?{" "}
          <Link to="/register" className="link link-primary">
            Зареєструйтесь
          </Link>
        </p>
      </div>
    </div>
  );
}
