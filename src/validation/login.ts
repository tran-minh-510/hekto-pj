import { object, string } from "yup";

export const loginSchema = object({
    email: string().email("Phải là email").required("Bắt buộc phải nhập"),
    password: string().min(4, "Mật khẩu phải từ 4 kí tự").required("Bắt buộc phải nhập"),
});
