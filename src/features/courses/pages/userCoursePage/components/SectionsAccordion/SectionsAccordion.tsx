
type propsType = {
  sections: [
    {
      lessons: [];
      id: number | null;
      title: string | null;
    }
  ];
};

function SectionsAccordion({sections}: propsType) {
  const containerClass = "w-full max-w-xl ";
  const headingClass = "text-2xl font-bold mb-4 text-primary";
  const joinClass = "join join-vertical w-full";
  const collapseClass = "collapse collapse-arrow join-item border border-base-300 bg-base-100";
  const collapseTitleClass = "collapse-title text-lg font-medium";
  const collapseContentClass = "collapse-content";
  const lessonListClass = "list-disc pl-6";
  const lessonItemClass = "py-1";

  console.log(sections);

  return (
    <>
      <h2 className={headingClass}>Секції курсу:</h2>
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
