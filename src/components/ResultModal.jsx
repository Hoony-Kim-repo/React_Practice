import { useImperativeHandle, useRef } from "react";

export default function ResultModal(props) {
  const { ref, result, targetTime } = props;

  const dialog = useRef(ref);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <xtrong>X seconds left.</xtrong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
