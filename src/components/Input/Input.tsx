import { Field, ErrorMessage as Error } from "formik";
import type { FC } from "react";

type inputProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
};

const inputContainer: string = "form-control w-full max-w-md";
const labelClasses: string = "label pb-3 pt-3";
const fieldClasses: string = "input input-md w-full";
const errorClasses: string = "text-error text-sm mt-1";

const Input: FC<inputProps> = ({ id, label, name, placeholder }) => {
  return (
    <>
      <div className={inputContainer}>

        <label htmlFor={id} className={labelClasses}>{label}</label>
        <Field name={name} id={id} placeholder={placeholder}  className={fieldClasses}/>
        <Error name={name}>{(error) => <span className={errorClasses}>{error}</span>}</Error>

      </div>
    </>
  );
};

export default Input;