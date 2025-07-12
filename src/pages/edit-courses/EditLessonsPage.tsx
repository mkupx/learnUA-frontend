import { Formik, Form } from "formik";
import useEditLessons from "@/features/course-edit/model/useEditLessons";
import Input from "@/shared/ui/Input/Input";
import useGetCourse from "@/entities/course/model/useGetCourse";
import { useEffect, useState } from "react";

function EditLessons() {
  const { values, createLesson, course_id, lessonsError } = useEditLessons();
  const { course, error } = useGetCourse(course_id);

  const [sections, setSections] = useState<{ value: any; text: any; }[]>();

  useEffect(() => {
    if (course !== null && course !== undefined) {
      const formatted = course.sections.map((s: any) => ({
        value: s.id,
        text: s.title,
      }));
      setSections(formatted);
    }
  }, [course]);

  return (
    <>
      <Formik initialValues={values} onSubmit={(values) => createLesson(values)} validationSchema={null} enableReinitialize={true}>
        <Form>
          <Input label="Назва уроку" name="title" id="title" placeholder="Введіть назву уроку" className="mb-4" />
          {lessonsError && <div className="text-red-500">{lessonsError}</div>}
          <Input label="Секція" name="section_id" id="section_id" placeholder="Оберіть секцію" className="mb-4" type="select" options={sections} />
          {error && <div className="text-red-500">{error}</div>}

          <button type="submit" className="btn btn-primary">
            Додати урок
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default EditLessons;
