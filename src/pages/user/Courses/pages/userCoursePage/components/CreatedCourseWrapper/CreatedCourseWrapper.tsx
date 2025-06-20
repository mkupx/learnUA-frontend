import SectionsAccordion from "../SectionsAccordion/SectionsAccordion";

function CreatedCourseWrapper() {
  const styles = {
    wrapper:
      "min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 flex flex-col items-center",
    container: "w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-8",
    header: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4",
    title: "text-4xl font-extrabold text-gray-900",
    buttonGroup: "flex gap-3",
    editButton: "btn btn-primary btn-md px-6",
    deleteButton: "btn btn-error btn-md px-6",
    descriptionWrapper: "mb-6",
    descriptionText: "text-lg text-gray-700",
    descriptionLabel: "font-semibold",
  };

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
        <h1 className={styles.title}>Мій курс: Назва курсу</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.editButton}>Редагувати</button>
          <button className={styles.deleteButton}>Видалити</button>
        </div>
        </div>
        <div className={styles.descriptionWrapper}>
        <p className={styles.descriptionText}>
          <span className={styles.descriptionLabel}>Опис курсу:</span> 
          <p>Тут буде короткий опис
          вашого курсу. Ви можете додати більше деталей, щоб залучити студентів.</p>
        </p>
        </div>
        <div>
        <SectionsAccordion />
        </div>
      </div>
    </div>
    </>
  );
}

export default CreatedCourseWrapper;
