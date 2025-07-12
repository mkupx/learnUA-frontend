import DialogWindow from "@/shared/ui/DialogWindow/DialogWindow";
import Sections from "@/features/course-edit/ui/Sections";
import EditSectionsTop from "@/features/course-edit/ui/EditSectionsTop";
import DialogWindowContent from "@/features/course-edit/ui/DialogWindowContent";
import useGetCourse from "@/entities/course/model/useGetCourse";
import { useParams } from "react-router-dom";
import NotSectionsCard from "@/entities/section/ui/NotSectionsCard";

function EditSections() {
  const { id: courseId } = useParams<{ id: string }>();


    const { course, error } = useGetCourse(courseId);
    console.log(course, courseId);

  return (
    <>
      <EditSectionsTop />
      <div className="space-y-2">
        {
          course && error && (
            <>
              {error == null && <p className="text-lg font-medium text-center text-error">Не вдалося зазавантажити курс</p>}
        {course !== undefined && course.sections && course.sections.length > 0 ? <Sections sections={course.sections} /> : (
          <NotSectionsCard />
        )}
            </>
          )
        }
      </div>
      <DialogWindow dialogId="create_section_modal">
        <DialogWindowContent dialogId="create_section_modal" />
      </DialogWindow>
    </>
  );
}

export default EditSections;
