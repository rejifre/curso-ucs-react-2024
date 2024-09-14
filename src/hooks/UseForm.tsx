import { useState } from "react";

interface Props{
    initialValues: {},
    validateOnChange: boolean,
    validate: (object: {}) => void


}

const useForm = ( {initialValues, validateOnChange , validate} : Props) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

export default useForm;
