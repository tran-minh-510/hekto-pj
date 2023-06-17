import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    touched?: boolean;
}

const Input: React.FC<IProps> = ({ label, error, touched, ...inputProps }) => {
    return (
        <Wrapper>
            <input className="input" {...inputProps} placeholder={label} />
            {touched && !!error && <ErrorMessage className="error-message">{error}</ErrorMessage>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;

const ErrorMessage = styled.p``;

export default Input;