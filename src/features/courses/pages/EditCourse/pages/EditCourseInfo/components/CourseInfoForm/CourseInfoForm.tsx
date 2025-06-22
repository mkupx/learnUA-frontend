import { Formik, Form } from "formik";
import { type initialValues } from "./helper";
import Input from "@/shared/components/Input/Input";
import { validationSchema } from "./helper";

function CourseInfoForm() {
  const initialValues: initialValues = {
    title: "",
    description: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Input label="Назва курсу" name="title" id="title" placeholder="Введіть назву курсу" />
          <Input
            label="Опис курсу"
            name="description"
            id="description"
            placeholder="Введіть опис курсу"
          />
          <button type="submit" className="btn btn-primary mt-6">
            Зберегти зміни
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default CourseInfoForm;
