import * as React from "react";
import { Form, Formik } from "formik";

import { validationSchema, type InitialValues } from "./helper";
import Input from "@components/Input/Input";
import useCreateCourseForm from "./useCreateCourseForm";

const CreateCourseForm: React.FC<{}> = () => {
  const initialValues: InitialValues = { title: "", description: "" };

  const containerClass = "flex items-center justify-center min-h-screen bg-base-200 pt-10 pb-15";
  const formWrapperClass = "w-full max-w-2xl p-8 rounded-lg shadow-lg bg-base-100";

  const { createCourse, errorText } = useCreateCourseForm(); 

  return (
    <>
      <div className={containerClass}>
        <div className={formWrapperClass}>
          <h2 className="text-2xl font-bold mb-6 text-center">Створити курс</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={(data) => createCourse(data)}
            validationSchema={validationSchema.custom}
          >
            <Form className="space-y-4">
              <Input
                label="Назва курсу"
                name="title"
                id="title"
                placeholder="Введіть назву курсу"
                className="input input-bordered w-full"
              />
              <Input
                label="Опис"
                name="description"
                id="description"
                placeholder="Введіть опис курсу"
                className="input input-bordered w-full min-h-[100px]"
                type="textarea"
              />
              {errorText && (
                <div className="text-red-500 text-sm mt-2">
                  {errorText}
                </div>
              )}
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
