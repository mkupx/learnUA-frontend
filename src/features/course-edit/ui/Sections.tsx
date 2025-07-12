type SectionsProps = {
  sections: {
    id: number | null;
    lessons: { title: string; id: number }[];
    title: string | null;
  }[];
};

function Sections({ sections }: SectionsProps) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.id} className="collapse collapse-arrow bg-base-200 relative">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between items-center text-lg font-medium">
            <span>{section.title}</span>
          </div>
          <div className="collapse-content">
            {/* flex justify-between items-center */}
            {section.lessons === undefined ? (
              <p>Тут будуть уроки секції "{section.title}"</p>
            ) : (
              section.lessons.map((lesson, index) => (
                <p key={lesson.id} className="text-base my-2 ml-3 mt-1">
                  {index + 1}. {lesson.title}
                </p>
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Sections;
