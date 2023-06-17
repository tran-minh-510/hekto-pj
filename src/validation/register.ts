import { object, string, ref } from "yup";

export const registerSchema = object({
    firstName: string().required("Bắt buộc phải nhập"),
    lastName: string().required("Bắt buộc phải nhập"),
    email: string().email("Phải là email").required("Bắt buộc phải nhập"),
    password: string().min(4, "Mật khẩu phải từ 4 kí tự").required("Bắt buộc phải nhập"),
    confirmPassword: string()
        .required("Bắt buộc phải nhập")
        .oneOf([ref("password")], "Mật khẩu chưa khớp."),
});
