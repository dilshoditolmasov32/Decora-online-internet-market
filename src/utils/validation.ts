import * as Yup from "yup";

//==============   AUTH   =================

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Elektron pochta manzili").required("Elektron pochta manzilingizni kiriting"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/,
      "Parol uzunligi 8 tadan katta  va katta va kichik harflar, ixtiyoriy raqam va bitta belgidan tashkil topgan bo'lishi kerak"
    )
    .required("Parolni kiriting"),
});

//==============   BASKET   =================

export const korzinkaValidationSchema = Yup.object().shape({
  full_name: Yup.string().required("Ismi familyangizni kiriting"),
  phone_number: Yup.string()
    .min(18, "Telefon raqam yaroqsiz")
    .required("Telefon raqamingizni kiriting"),
    address: Yup.string().required("Yetkazib berish manzilini kiriting"),
});
   
