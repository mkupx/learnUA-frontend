import * as Yup from 'yup';

export type initialvalues = {
    title: string;
    description: string;
}

const regx = {
    title: /^[a-zA-Zа-яА-ЯёЁ0-9\s]{10,40}$/,
    description: /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?]{32,500}$/,
}

const title = Yup.string()
    .matches(regx.title, "Назва курсу повинна містити від 10 до 40 символів.")
    .required("Назва курсу є обов'язковою.");

const description = Yup.string()
    .matches(regx.description, "Опис курсу повинен містити від 32 до 500 символів.")
    .required("Опис курсу є обов'язковим.");

export const validationSchema = {
    custom: Yup.object().shape({
        title,
        description,
    }),
}