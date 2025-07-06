function EditSectionsTop() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Секції курсу:</h2>
        <button
          className="btn btn-success btn-accent"
          onClick={() => {
            const modal = document.getElementById(
              "create_section_modal"
            ) as HTMLDialogElement | null;
            modal?.showModal();
          }}
        >
          Створити секцію
        </button>
      </div>
    </>
  );
}

export default EditSectionsTop;
