import { Formik, Form } from "formik";
import Input from "@/shared/components/Input/Input";
import { validationSchema } from "./helper";
import useCourseInfoForm from "./useCourseInfoForm";

function CourseInfoForm() {

  const { initialValues, error, handleEditCourse} = useCourseInfoForm();

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleEditCourse(values)}
        validationSchema={validationSchema}
        enableReinitialize={true}
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
