import styled from "styled-components"

interface TypeProps {
    src: string,
    className?: string
}

const Image: React.FC<TypeProps> = ({ src, className = 'wrapper_image' }) => {
    return (
        <WrapImg className={className}>
            <img src={src} alt="" />
        </WrapImg>
    )
}

export default Image

const WrapImg = styled.div`
    img{
        max-width: 100%;
    }
`