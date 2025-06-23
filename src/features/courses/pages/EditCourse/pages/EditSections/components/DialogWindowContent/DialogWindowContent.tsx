import { DialogCloseButton } from "@/shared/components/DialogWindow/DialogWindow";

type DialogWindowContentProps = {
  dialogId: string;
};

function DialogWindowContent({ dialogId }: DialogWindowContentProps) {
  return (
    <>
      <DialogCloseButton dialogId={dialogId}>Закрити</DialogCloseButton>
    </>
  );
}

export default DialogWindowContent;
