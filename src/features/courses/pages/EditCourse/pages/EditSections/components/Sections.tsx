

type Section = { title: string; id: number; lessons: []; };
type SectionsProps = {
    sections: Section[];
};


function Sections({ sections }: SectionsProps) {

  return (
    <>
      {
        sections.map((section) => (
        <div key={section.id} className="collapse collapse-arrow bg-base-200 relative">
          <input type="checkbox" />
          <div className="collapse-title flex justify-between items-center text-lg font-medium">
            <span>{section.title}</span>
          </div>
          <div className="collapse-content flex justify-between items-center">
            {!sections.lessons ? <p>Тут будуть уроки секції "{section.title}"</p> : <p>Уроки секції "{section.title}"</p>}
          </div>
        </div>
      ))
      }
    </>
  );
}

export default Sections;
