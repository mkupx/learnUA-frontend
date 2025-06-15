import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import SettingsAvatar from "../SettingsAvatar";
import { settingsValidationSchema } from "./helper";
import Input from "../../../../../components/Input/Input";
import * as motion from "motion/react-client";

export default function SettingsForm() {
  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();
  const [initialvalues, setInitialvalues] = useState({
    first_name: "",
    last_name: "",
    age: "",
  });
  const [userId, setUserId] = useState<string>("");

  interface ValuesTypes {
    first_name: string;
    last_name: string;
    age: string;
  }

  const handleSubmit = (values: ValuesTypes) => {
    console.log("submit", values);
    const csrfToken: string | undefined = document.cookie.match(/csrf_access_token=([^;]+)/)?.[1];
    axiosPrivate
      .put("/api/user/update-profile", values, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/profile");
        }
      });
  };

  useEffect(() => {
    async function fetchUserData() {
      axiosPrivate.get("/api/user/my-profile").then((data) => {
        const response = data.data.user_data;
        const userData = {
          first_name: response.first_name || "",
          last_name: response.last_name || "",
          age: response.age || "",
        };
        setUserId(response.id);
        setInitialvalues(userData);
      });
    }
    fetchUserData();
  }, [axiosPrivate]);

  return (
    <>
      <SettingsAvatar userId={userId} user={initialvalues} />

      <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={settingsValidationSchema}
        enableReinitialize={true}
      >
        <Form>
          <div className="flex gap-10">
            <Input label="Ім'я" name="first_name" id="first_name" placeholder="Введіть ім'я" />
            <Input
              label="Прізвище"
              name="last_name"
              id="last_name"
              placeholder="Введіть прізвище"
            />
          </div>
          <div className="flex gap-10">
            <Input label="Вік" name="age" id="age" placeholder="Введіть вік" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn btn-primary mt-10"
            type="submit"
          >
            Оновити
          </motion.button>
        </Form>
      </Formik>
    </>
  );
}
