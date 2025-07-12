import * as Yup from 'yup';

export type SectionInitialValues = {
  title: string;
}

const regx = {
  title: /^[a-zA-Zа-яА-ЯёЁіїєґІЇЄҐ0-9\s\-_]{10,40}$/,
}

const titleValidation = Yup.string()
  .min(10, "Назва секції повинна містити мінімум 10 символів")
  .max(40, "Назва секції повинна містити максимум 40 символів")
  .matches(regx.title, "Назва секції може містити тільки літери, цифри, пробіли, дефіс та підкреслення")
  .trim()
  .required("Назва секції є обов'язковою");

export const validationSchema = Yup.object().shape({
  title: titleValidation,
});

// Початкові значення
export const initialValues: SectionInitialValues = {
  title: '',
};