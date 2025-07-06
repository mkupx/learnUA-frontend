import { Field, ErrorMessage as Error } from "formik";

interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "textarea" | "select";
  className?: string;
  options?: Array<{ value: string; text: string }>;
}

const STYLES = {
  container: "form-control w-full",
  label: "label pb-3 pt-3",
  field: "input input-md w-full",
  textarea: "min-h-[150px] p-2 resize-none whitespace-pre-line",
  error: "text-error text-sm mt-1",
} as const;

const Input = ({ id, label, name, placeholder, type = "text", className = "", options }: InputProps) => {
  const fieldClassName = `${STYLES.field} ${className}`;

  const renderField = () => {
    switch (type) {
      case "textarea":
        return <Field as="textarea" name={name} id={id} placeholder={placeholder} className={`${fieldClassName} ${STYLES.textarea}`} />;

      case "select":
        return (
          <Field as="select" name={name} id={id} className={fieldClassName}>
            <option value="">Виберіть значення</option>
            {options?.map((option) => (
              <option key={`${option.value}-${option.text}`} value={option.value}>
                {option.text}
              </option>
            ))}
          </Field>
        );

      default:
        return <Field type="text" name={name} id={id} placeholder={placeholder} className={fieldClassName} />;
    }
  };

  return (
    <div className={STYLES.container}>
      <label htmlFor={id} className={STYLES.label}>
        {label}
      </label>
      {renderField()}
      <Error name={name}>{(error) => <span className={STYLES.error}>{error}</span>}</Error>
    </div>
  );
};

export default Input;
export { Input };
