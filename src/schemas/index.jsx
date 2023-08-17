import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    firstName: Yup.string()
    .min(3 , "Name Should be Atleast 3 Characters...")
    .max(25)
    .required("Name Can't be Empty..."),

    lastName: Yup.string()
    .min(3 , "Name Should be Atleast 3 Characters...")
    .max(25)
    .required("Name Can't be Empty..."),


    email: Yup.string()
        .required("Email Can not be Empty...")
        .email("Invalid Email..."),

    password: Yup.string()
        .min(6)
        .required("Password Can not be Empty...."),

    // cpassword: Yup.string()
    //     .required("Confirm Password can not be Empty...")
    //     .oneOf([Yup.ref('password') , null] , "Password Must Match..."),
});


export const LoginSchema = Yup.object({
    
    email: Yup.string()
        .required("Email Can not be Empty...")
        .email("Invalid Email..."),

    password: Yup.string()
        .min(6)
        .required(),
});




