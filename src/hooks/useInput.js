import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(value);

  const handleValueChange = (event) => {
    setValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value,
    hasError: didEdit && !valueIsValid,
    handleValueChange,
    handleInputBlur,
  };
}
