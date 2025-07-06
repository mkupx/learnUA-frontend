import DialogWindow from "@/shared/ui/DialogWindow/DialogWindow";
import Sections from "@/features/course-edit/ui/Sections";
import EditSectionsTop from "@/features/course-edit/ui/EditSectionsTop";
import DialogWindowContent from "@/features/course-edit/ui/DialogWindowContent";
import useGetCourse from "@/shared/hooks/useGetCourse";
import { useParams } from "react-router-dom";

function EditSections() {
  const { id: courseId } = useParams<{ id: string }>();

  const { course, error } = useGetCourse(courseId);

  return (
    <>
      <EditSectionsTop />
      <div className="space-y-2">
        {error == null && <p className="text-lg font-medium text-center text-error">Не вдалося зазавантажити курс</p>}
        {course !== null && <Sections sections={course.sections} />}
      </div>
      <DialogWindow dialogId="create_section_modal">
        <DialogWindowContent dialogId="create_section_modal" />
      </DialogWindow>
    </>
  );
}

export default EditSections;
