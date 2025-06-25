import { DialogCloseButton } from "@/shared/components/DialogWindow/DialogWindow";
import { Formik, Form } from "formik";
import { validationSchema } from "./helper";
import Input from "@/shared/components/Input/Input";
import useCreateSection from "@/shared/hooks/useCreateSection";

type DialogWindowContentProps = {
  dialogId: string;
};

type sectionFormTypes = {
  title: string;
};

function DialogWindowContent({ dialogId }: DialogWindowContentProps) {
  const sectionFormData: sectionFormTypes = { title: "" };

  const { createSection, error } = useCreateSection();

  const pathname = location.pathname;
  const match = pathname.match(/\/courses\/editcourse\/(\d+)/);
  const courseId = match ? match[1] : "";


  return (
    <>
      <div className="max-w-2xl w-full">
        <Formik
          initialValues={sectionFormData}
          validationSchema={validationSchema.custom}
          onSubmit={(data) => createSection(data.title, courseId)}
        >
          <Form>
            <Input
              id="title"
              name="title"
              label="Назва секції"
              placeholder="Введіть назву секції"
            />
            {error && (<p className="text-error">Секція з такою назвою уже існує</p>)}
            <div className="flex justify-end gap-2 mt-6">
              <button type="submit" className="btn btn-primary">
                Додати
              </button>
              <DialogCloseButton dialogId={dialogId} className="btn btn-outline">
                Закрити
              </DialogCloseButton>
            </div>
            <div className="flex justify-end"></div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default DialogWindowContent;
