import styled from "styled-components";

interface ButProps {
    children: React.ReactNode
    type: "button" | "submit" | "reset" | undefined,
    disabled?: boolean,
    className: string
}

const Button: React.FC<ButProps> = ({ disabled, children, type, className }) => {
    return <WrapButton>
        <button type={type} className={`${className} ${disabled ? 'disabled' : ''}`}>
            {children}
        </button>
    </WrapButton>;
}

const WrapButton = styled.div`
.disabled{
opacity: 0.5;
}
`

export default Button