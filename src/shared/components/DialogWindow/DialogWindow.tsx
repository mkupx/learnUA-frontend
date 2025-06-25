import type React from "react";

function DialogWindow({ children, dialogId }: { children: React.ReactNode; dialogId: string }) {
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
  const handleClose = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement | null;
    dialog?.close();
  };

  return (
    <button type="button" className={className} aria-label="Close" onClick={handleClose}>
      {children}
    </button>
  );
}

export default DialogWindow;
