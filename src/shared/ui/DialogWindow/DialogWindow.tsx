import type React from "react";

const DialogWindow = ({ children, dialogId }: { children: React.ReactNode; dialogId: string }) =>  {
  return (
    <>
      <dialog id={dialogId} className="modal">
        <div className="modal-box">{children}</div>
      </dialog>
    </>
  );
}
export function DialogCloseButton({
  dialogId,
  children,
  className,
}: {
  dialogId: string;
  children: React.ReactNode;
  className: string;
}) {
  const handleDialogClose = () => {
    const dialogElement = document.getElementById(dialogId) as HTMLDialogElement | null;
    if (dialogElement) {
      dialogElement.close();
    }
  };

  return (
    <button type="button" className={className} aria-label="Close" onClick={handleDialogClose}>
      {children}
    </button>
  );
}

export default DialogWindow;
export { DialogWindow };