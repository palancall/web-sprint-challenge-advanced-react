// write your custom hook here to control your checkout form
import { useLocalStorage } from "../hooks/useLocalStorate";

export const useForm = (initialValue, key, submitLogic) => {
  const [values, setValues] = useLocalStorage(initialValue, key);

  console.log("LT: useForm.js values", values);
  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogic();
  };

  return [values, handleChanges, handleSubmit];
};
