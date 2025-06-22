import * as Yup from "yup";

const regx = {
    title: /^[a-zA-Z0-9\s]{3,50}$/,
    description: /^[a-zA-Z0-9\s.,!?]{10,500}$/,
}

const titleValidation = Yup.string()
    .matches(regx.title, "Назва повинна містити від 3 до 50 символів")
    .required("Назва є обов'язкова.");

const descriptionValidation = Yup.string()
    .matches(regx.description, "Опис повинен містити від 10 до 500 символів")
    .required("Опис є обов'язковим.");

export const validationSchema = Yup.object({
    title: titleValidation,
    description: descriptionValidation,
});

export type initialValues = {
  title: string;
  description: string;
}