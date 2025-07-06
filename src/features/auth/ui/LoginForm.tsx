import { Link } from "react-router-dom";
import { useAuthForm } from "../model/useAuthForm";

export default function LoginForm() {
  const { formData, isLoading, updateField, handleSubmit } = useAuthForm({ type: "login" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm p-8 space-y-6 shadow-xl rounded-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center">Вхід</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <button 
            type="submit" 
            className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Завантаження..." : "Увійти"}
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