import NotSectionsCard from "@/entities/section/ui/NotSectionsCard";

type propsType = {
  sections: {
    lessons: { title: string }[];
    id: number | null;
    title: string | null;
  }[];
};

function SectionsAccordion({ sections }: propsType) {

  const containerClass = "w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl";
  const headingClass = "text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary";
  const joinClass = "join join-vertical w-full";
  const collapseClass = "collapse collapse-arrow join-item border border-base-300 bg-base-100 hover:bg-base-200 transition-colors duration-200";
  const collapseTitleClass = "collapse-title text-sm sm:text-base md:text-lg font-medium flex items-center justify-between flex-wrap sm:flex-nowrap gap-2";
  const sectionTextClass = "min-w-0 flex-1";
  const sectionBadgeClass = "badge badge-outline badge-xs sm:badge-sm flex-shrink-0";
  const badgeFullTextClass = "hidden sm:inline";
  const badgeShortTextClass = "sm:hidden";
  const collapseContentClass = "collapse-content";
  const contentInnerClass = "pt-2";
  const menuClass = "menu menu-compact w-full";
  const lessonItemClass = "mb-1";
  const lessonContainerClass = "flex items-center p-2 sm:p-3 rounded-lg hover:bg-base-300 transition-colors";
  const lessonBadgeClass = "badge badge-primary badge-xs sm:badge-sm mr-2 sm:mr-3 flex-shrink-0";
  const lessonTextClass = "text-sm sm:text-base text-base-content font-medium min-w-0 break-words";

  return (
    <>
      <div className={containerClass}>
        <h2 className={headingClass}>Секції курсу:</h2>

        <div className={joinClass}>
          {sections && sections.length > 0 ? (
            sections.map((section, sectionIndex) => (
              <div key={section.id || sectionIndex} className={collapseClass}>
                <input type="checkbox" className="peer"/>
                <div className={collapseTitleClass}>
                  <span className={sectionTextClass}>{section.title || `Секція ${sectionIndex + 1}`}</span>
                  <div className={sectionBadgeClass}>
                    <span className={badgeFullTextClass}>
                      {section.lessons.length} {section.lessons.length === 1 ? "урок" : "уроків"}
                    </span>
                    <span className={badgeShortTextClass}>{section.lessons.length}</span>
                  </div>
                </div>
                <div className={collapseContentClass}>
                  <div className={contentInnerClass}>
                    <ul className={menuClass}>
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className={lessonItemClass}>
                          <div className={lessonContainerClass}>
                            <div className={lessonBadgeClass} data-testid="lesson-badge">{lessonIndex + 1}</div>
                            <span className={lessonTextClass}>{lesson.title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NotSectionsCard />
          )}
        </div>
      </div>
    </>
  );
}

export default SectionsAccordion;
export { SectionsAccordion };
