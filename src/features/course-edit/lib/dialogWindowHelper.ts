import * as Yup from 'yup';

const regx = {
    title: /^[a-zA-Zа-яА-ЯёЁ0-9\s]{10,40}$/,
}

const title = Yup.string()
    .matches(regx.title, "Назва секції повинна містити від 10 до 40 символів.")
    .required("Назва секції є обов'язковою.");


export const validationSchema = {
    custom: Yup.object().shape({
        title,
    }),
}