import * as Yup from 'yup';

export type initialvalues = {
  title: string;
  description: string;
}

const regx = {
  title: /^[a-zA-Zа-яА-ЯёЁіїєґІЇЄҐ0-9\s\-_]{10,40}$/,
  description: /^[a-zA-Zа-яА-ЯёЁіїєґІЇЄҐ0-9\s.,!?\-_()'"№«»:;]{32,500}$/,
}

const titleValidation = Yup.string()
  .min(10, "Назва курсу повинна містити мінімум 10 символів")
  .max(40, "Назва курсу повинна містити максимум 40 символів")
  .matches(regx.title, "Назва курсу може містити тільки літери, цифри, пробіли, дефіс та підкреслення")
  .trim()
  .required("Назва курсу є обов'язковою");

const descriptionValidation = Yup.string()
  .min(32, "Опис курсу повинен містити мінімум 32 символи")
  .max(500, "Опис курсу повинен містити максимум 500 символів")
  .matches(regx.description, "Опис курсу містить неприпустимі символи. Дозволені: літери, цифри, пробіли та розділові знаки")
  .trim()
  .required("Опис курсу є обов'язковим");

export const validationSchema = Yup.object().shape({
  title: titleValidation,
  description: descriptionValidation,
});