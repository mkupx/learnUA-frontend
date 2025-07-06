import * as React from "react";
import { Form, Formik } from "formik";

import { validationSchema, type initialvalues } from "../lib/helper";
import Input from "@/shared/ui/Input/Input";
import useCreateCourseForm from "../model/useCreateCourseForm";

const CreateCourseForm: React.FC<{}> = () => {
  const initialValues: initialvalues = { title: "", description: "" };

  const containerClass = "flex items-center justify-center min-h-screen bg-base-200 pt-10 pb-15";
  const formWrapperClass = "w-full max-w-2xl p-8 rounded-lg shadow-lg bg-base-100";

  const { createCourse, erroR } = useCreateCourseForm();

  return (
    <>
      <div className={containerClass}>
        <div className={formWrapperClass}>
          <h2 className="text-2xl font-bold mb-6 text-center">Створити курс</h2>
          <Formik initialValues={initialValues} onSubmit={(data) => createCourse(data)} validationSchema={validationSchema.custom}>
            <Form className="space-y-4">
              <Input label="Назва курсу" name="title" id="title" placeholder="Введіть назву курсу" />
              <Input label="Опис" name="description" id="description" placeholder="Введіть опис курсу" type="textarea" />
              {erroR && <div className="text-red-500 text-sm mt-2">{erroR}</div>}
              <button type="submit" className="btn btn-primary w-full mt-4">
                Створити
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateCourseForm;
