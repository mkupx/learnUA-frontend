import type { JSX } from "react";
import type React from "react";

function DialogWindow({ children, dialogId }: { children: React.ReactNode; dialogId: string }) {
  return (
    <>
      <dialog id={dialogId} className="modal">
        <div className="modal-box">
          {children}
        </div>
      </dialog>
    </>
  );
}
export function DialogCloseButton({ dialogId, children }: { dialogId: string; children: JSX.Element }) {
  const handleClose = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement | null;
    dialog?.close();
  };

  return (
    <button
      type="button"
      className="btn btn-sm"
      aria-label="Close"
      onClick={handleClose}
    >
      {children}
    </button>
  );
}


export default DialogWindow;
