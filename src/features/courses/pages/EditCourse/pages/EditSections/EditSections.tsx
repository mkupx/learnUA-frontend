import DialogWindow from "@/shared/components/DialogWindow/DialogWindow";
import Sections from "./components/Sections";
import EditSectionsTop from "./components/EditSectionsTop";
import DialogWindowContent from "./components/DialogWindowContent/DialogWindowContent";
import useGetCourse from "@/shared/hooks/useGetCourse";
import { useParams } from "react-router-dom";

function EditSections() {
  const { id: courseId } = useParams<{ id: string }>();

  const {course, error} = useGetCourse(courseId);

  return (
    <>
      <EditSectionsTop />
      <div className="space-y-2">
        {error == null && (<p className="text-lg font-medium text-center text-error">Не вдалося зазавантажити курс</p>)}
        {course !== null && <Sections  sections={course.sections} />}
      </div>
      <DialogWindow dialogId="create_section_modal">
        <DialogWindowContent dialogId="create_section_modal" />
      </DialogWindow>
    </>
  );
}

export default EditSections;
