import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../validation/register";
import storage from "../../helpers/storage"
import { STORAGE_KEYS } from "../../constants";
import authApi from "../../api/auth";

function Register() {
    const navigate = useNavigate();
    const { values, touched, handleChange, errors, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (values) => {
            try {
                const { confirmPassword, ...body } = values
                const res = await authApi.register(body)
                storage.set(STORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken)
                storage.set(STORAGE_KEYS.REFRESH_TOKEN, res.data.refreshToken)
                navigate("/", { replace: true });
            } catch (error) {
                console.log(error)
            }
        },
        validationSchema: registerSchema,
    });
    return (
        <WrapperRegister>
            <StackCustom>
                <Title>Register</Title>
                <Text>Please register using account detail bellow.</Text>
                <Form action="" onSubmit={handleSubmit} method="post">
                    <FormGroup>
                        <Input
                            touched={touched.firstName}
                            onBlur={handleBlur}
                            error={errors.firstName}
                            value={values.firstName}
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            label="First Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            touched={touched.lastName}
                            onBlur={handleBlur}
                            error={errors.lastName}
                            value={values.lastName}
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            label="Last Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            touched={touched.email}
                            onBlur={handleBlur}
                            error={errors.email}
                            value={values.email}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            label="Email Address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            touched={touched.password}
                            onBlur={handleBlur}
                            error={errors.password}
                            value={values.password}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            label="Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            touched={touched.password}
                            onBlur={handleBlur}
                            error={errors.confirmPassword}
                            value={values.confirmPassword}
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            label="Confirm Password"
                        />
                    </FormGroup>
                    <Text className="text-forgot-password">
                        <Link to="#">Forgot your Link password?</Link>
                    </Text>
                    <FormGroup>
                        <Button className="btn-register" disabled={isSubmitting} type="submit">
                            Register
                        </Button>
                    </FormGroup>
                </Form>
                <Text>
                    Do you have an Account?<Link to="/login">Login</Link>
                </Text>
            </StackCustom>
        </WrapperRegister>
    );
}

export default Register;

const WrapperRegister = styled.div`
    padding: 8em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StackCustom = styled(Stack)`
    width: 40em;
    padding: 5em 4em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Title = styled.h2`
    font-size: 2em;
    font-weight: 600;
    text-align: center;
`;

const Text = styled.p`
    font-size: 1.3em;
    margin: 0.8em 0;
    color: #9096b2;
    text-align: center;
    &.text-forgot-password {
        text-align: left;
        margin: 0;
        a {
            color: #9096b2;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 0;
`;

const FormGroup = styled.div`
    input {
        padding: 1em;
        border: 2px solid #e7e6ef;
        outline: none;
        width: 92%;
    }
    .error-message {
        color: red;
        font-size: 1.2em;
        padding: 0.5em 0;
    }
    button {
        width: 100%;
        border: none;
        padding: 1em 0;
        background-color: #fb2e86;
        color: #fff;
    }
`;
