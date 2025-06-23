import DialogWindow from "@/shared/components/DialogWindow/DialogWindow";
import Sections from "./components/Sections";
import EditSectionsTop from "./components/EditSectionsTop";
import DialogWindowContent from "./components/DialogWindowContent/DialogWindowContent";

function EditSections() {
  const sections = [
    { id: 1, title: "Вступ" },
    { id: 2, title: "Основи" },
    { id: 3, title: "Практика" },
  ];


  return (
    <>
      <EditSectionsTop />
      <div className="space-y-2">
        <Sections sections={sections}/>
      </div>
      <DialogWindow dialogId="create_section_modal">
        <DialogWindowContent dialogId="create_section_modal"/>
      </DialogWindow>
    </>
  );
}

export default EditSections;