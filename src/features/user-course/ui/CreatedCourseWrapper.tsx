import { SectionsAccordion } from "@/widgets";
import { Link } from "react-router-dom";
import useCreatedCourseId from "../model/useCreatedCourseId";
import useCourseInfo from "../model/useCourseInfo";
import { GlobalLoader } from "@/shared/ui";

function CreatedCourseWrapper() {
  const styles = {
    wrapper: "min-h-screen bg-base-200 py-12 flex flex-col items-center",
    container: "w-full max-w-5xl bg-base-100 rounded-3xl shadow-2xl p-12 flex flex-col gap-8",
    header: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4",
    title: "text-4xl font-extrabold text-base-content",
    buttonGroup: "flex gap-3",
    editButton: "btn btn-primary btn-md px-6",
    deleteButton: "btn btn-error btn-md px-6",
    descriptionWrapper: "mb-6",
    descriptionText: "text-lg text-base-content",
    descriptionLabel: "font-semibold",
  };

  const { courseInfo, error, isLoading } = useCourseInfo();

  const id: string | undefined = useCreatedCourseId();

  if (!id) {
    <div className="text-center text-red-500 text-2xl flex items-center justify-center" style={{ minHeight: "70vh" }}>
      Курс не знайдено.
    </div>;
  }

  if (error) {
    return <div className="text-center min-h-[93vh] text-red-500 text-4xl flex items-center justify-center">Помилка завантаження курсу: {error}</div>;
  }

  return (
    <>
      {isLoading && <GlobalLoader />}
      {courseInfo && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>{courseInfo.title}</h1>
              <div className={styles.buttonGroup}>
                <Link to={`/courses/editcourse/${id}/info`} className={styles.editButton}>
                  Редагувати
                </Link>
                <button className={styles.deleteButton}>Видалити</button>
              </div>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionText}>
                <span className={styles.descriptionLabel}>Опис курсу:</span>
                <span className="block">{courseInfo.description}</span>
              </p>
            </div>
            <div>
              <SectionsAccordion sections={courseInfo.sections} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatedCourseWrapper;
