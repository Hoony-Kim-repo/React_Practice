import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal(props) {
  const { ref, buttonCaption, children, ...prop } = props;

  const dialogRef = useRef(ref);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
