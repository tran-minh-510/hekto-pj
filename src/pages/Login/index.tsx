import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../validation/login";
import storage from "../../helpers/storage"
import { STORAGE_KEYS } from "../../constants";
import authApi from "../../api/auth";
import { path } from "../../routes";
import { useEffect } from 'react'

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    const redirectPath = params.get("continue_url") || path.home
    const { values, touched, handleChange, errors, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                const res = await authApi.login(values)
                storage.set(STORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken)
                storage.set(STORAGE_KEYS.REFRESH_TOKEN, res.data.refreshToken)
                navigate(redirectPath, { replace: true });
            } catch (error) {
                console.log(error)
            }
        },
        validationSchema: loginSchema,
    });
    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEYS.ACCESS_TOKEN)
        if (accessToken) {
            navigate(redirectPath, { replace: true });
        }
    }, [navigate, redirectPath])
    return (
        <WrapperLogin>
            <StackCustom>
                <Title>Login</Title>
                <Text>Please login using account detail bellow.</Text>
                <Form action="" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            type="email"
                            touched={touched.email}
                            onBlur={handleBlur}
                            error={errors.email}
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            label="Email Address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            touched={touched.password}
                            onBlur={handleBlur}
                            error={errors.password}
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            label="Password"
                        />
                    </FormGroup>
                    <Text className="text-forgot-password">
                        <Link to="#">Forgot your Link password?</Link>
                    </Text>
                    <FormGroup>
                        <Button className="btn-signin" disabled={isSubmitting} type="submit">
                            Sign In
                        </Button>
                    </FormGroup>
                </Form>
                <Text>
                    Don’t have an Account?<Link to="/register">Create account</Link>
                </Text>
            </StackCustom>
        </WrapperLogin>
    );
}

export default Login;

const WrapperLogin = styled.div`
    padding: 15em 0;
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
