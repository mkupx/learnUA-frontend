import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "@/shared/api/axios";
import axios from "axios";
import { useAuth } from "./useAuth";

type AuthFormType = "login" | "register";

interface UseAuthFormProps {
  type: AuthFormType;
}

interface AuthFormData {
  email: string;
  password: string;
  confirm?: string;
}

export const useAuthForm = ({ type }: UseAuthFormProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    confirm: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const updateField = (field: keyof AuthFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (type === "register" && formData.password !== formData.confirm) {
      alert("Паролі не збігаються");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      const response = await axiosPrivate.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      
      if (response.status === 200) {
        login();
        navigate("/profile");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Невірний email або пароль. Спробуйте ще раз.");
        } else {
          alert(`Помилка: ${error.response.data.message || "Сталася помилка при вході"}`);
        }
      }
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "/api/auth/register",
        {
          email: formData.email,
          password: formData.password,
          password_again: formData.confirm,
        },
        {
          withCredentials: true,
        }
      );
      
      if (response.status === 200) {
        navigate("/login");
      } else if (response.status === 409) {
        alert("Користувач з таким email вже існує. Спробуйте інший email.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert("Користувач з таким email вже існує. Спробуйте інший email.");
      } else if (error.response) {
        alert(`Помилка: ${error.response.data.message || "Сталася помилка при реєстрації"}`);
      } else if (error.request) {
        alert("Помилка: Сервер не відповідає. Спробуйте пізніше.");
      } else {
        alert(`Помилка: ${error.message}`);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      if (type === "login") {
        await handleLogin();
      } else {
        await handleRegister();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    updateField,
    handleSubmit,
  };
};