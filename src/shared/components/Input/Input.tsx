import { Field, ErrorMessage as Error } from "formik";
import type { FC } from "react";


const inputContainer: string = "form-control w-full w-full";
const labelClasses: string = "label pb-3 pt-3";
const fieldClasses: string = "input input-md w-full";
const errorClasses: string = "text-error text-sm mt-1";


type inputProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "textarea";
};


const Input: FC<inputProps> = ({ id, label, name, placeholder, type = "text" }) => {
  return (
    <div className={inputContainer}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {type === "textarea" ? (
        <Field
          as="textarea"
          name={name}
          id={id}
          placeholder={placeholder}
          className={`${fieldClasses} min-h-[150px] p-2 resize-none whitespace-pre-line`}
        />
      ) : (
        <Field
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className={`${fieldClasses}`}
        />
      )}
      <Error name={name}>{(error) => <span className={errorClasses}>{error}</span>}</Error>
    </div>
  );
};

export default Input;
