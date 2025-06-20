
const sections = [
  {
    title: "Секція 1: Вступ",
    lessons: ["Урок 1: Знайомство", "Урок 2: Мотивація"],
  },
  {
    title: "Секція 2: Основи",
    lessons: ["Урок 1: Базові поняття", "Урок 2: Приклади"],
  },
  {
    title: "Секція 3: Практика",
    lessons: ["Урок 1: Завдання", "Урок 2: Відповіді"],
  },
];

function SectionsAccordion() {
  const headingClass = "text-2xl font-bold mb-3 text-blue-700";
  const containerClass = "w-full";
  const joinClass = "join join-vertical w-full mb-4";
  const collapseClass = "collapse collapse-arrow join-item bg-blue-50 mb-2";
  const collapseTitleClass = "collapse-title font-semibold text-blue-800";
  const collapseContentClass = "collapse-content";
  const lessonListClass = "list-disc pl-8 py-2";
  const lessonItemClass = "py-1";

  return (
    <>
      <h2 className={headingClass}>Секції курсу</h2>
      <div className={containerClass}>
        <div className={joinClass}>
          {sections.map((section, idx) => (
            <div key={idx} className={collapseClass}>
              <input type="checkbox" />
              <div className={collapseTitleClass}>{section.title}</div>
              <div className={collapseContentClass}>
                <ul className={lessonListClass}>
                  {section.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className={lessonItemClass}>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionsAccordion;
