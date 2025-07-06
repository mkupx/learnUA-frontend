import { Link } from "react-router-dom";
import { useAuthForm } from "../model/useAuthForm";

export default function RegisterForm() {
  const { formData, isLoading, updateField, handleSubmit } = useAuthForm({ type: "register" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center">Реєстрація</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="input input-bordered w-full" 
              value={formData.email} 
              onChange={(e) => updateField("email", e.target.value)} 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Пароль</span>
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="input input-bordered w-full" 
              value={formData.password} 
              onChange={(e) => updateField("password", e.target.value)} 
              required 
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Підтвердження пароля</span>
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="input input-bordered w-full" 
              value={formData.confirm} 
              onChange={(e) => updateField("confirm", e.target.value)} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Завантаження..." : "Зареєструватися"}
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