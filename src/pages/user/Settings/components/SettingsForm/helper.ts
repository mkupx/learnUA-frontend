import * as Yup from "yup";

const regx = {
    name: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'-]{2,}$/u
};

export const settingsValidationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required("Ім'я є обов'язковим")
        .matches(regx.name, "Ім'я може містити лише літери та має бути не менше 2 символів"),
    last_name: Yup.string()
        .required("Прізвище є обов'язковим")
        .matches(regx.name, "Прізвище може містити лише літери та має бути не менше 2 символів"),
    age: Yup.number()
        .required("Вік є обов'язковим")
        .min(1, "Вік має бути більшим за 0")
        .max(120, "Вік має бути реалістичним"),
});

