import styled from "styled-components"
import Image from "../Image"
import { Stack } from "@mui/material"
import customerImg from '../../image/customer.png'
import { StarIcon } from "../icons"
import { IProduct } from "../../interfaces"

interface IProps {
    product: IProduct
}

const RelatedProduct: React.FC<IProps> = ({ product }) => {
    return (
        <WrapRelatedProduct>
            <Image src={product.images[0].url} />
            <Info>

                <Stack direction='row' justifyContent='space-between'>
                    <Name>{product.name}</Name>
                    <Stack direction='row'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Stack>
                </Stack>
                <Price>${product.price}</Price>
            </Info>
        </WrapRelatedProduct>
    )
}

export default RelatedProduct

const WrapRelatedProduct = styled.div`
    img{
        width: 300px;
        height: 350px;
        object-fit: cover;
    }
`

const Name = styled.div`
    font-size: 1.4em;
    color:#151875;
    font-weight: 600;
`

const Price = styled.p`
      font-size: 1.2em;
      color:#151875;
      font-weight: 600;
      margin-top: 1em;
`

const Info = styled.div`
      padding: 1.5em 0.5em;
`