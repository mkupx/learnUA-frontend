import { Link } from "react-router-dom";


type Section = { title: string; id: number };
type SectionsProps = {
    sections: Section[];
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
            <p>Тут будуть уроки секції "{section.title}"</p>
            {/* <Link className="btn btn-primary" to={`/courses/sections/${section.id}/lessons/new`}>
              Додати урок
            </Link> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Sections;
