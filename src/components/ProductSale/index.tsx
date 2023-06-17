import styled from "styled-components"
import Image from "../Image"
import { Stack } from "@mui/material"
import { IProduct } from "../../interfaces"

interface IProps {
    data: IProduct
}

const ProductSale: React.FC<IProps> = ({ data }) => {
    return (
        <WrapProductSale>
            <WrapImageProduct>
                <Image src={data.images[0].url} />
            </WrapImageProduct>
            <Stack direction='row' justifyContent="space-between" alignItems="center" style={{ padding: '1em 0' }}>
                <NameProduct>Trần Minh Đức</NameProduct>
                <Stack direction='row' spacing={{ xs: 1 }} alignItems="center">
                    <Price>123</Price>
                    <Price className="price-old">123</Price>
                </Stack>
            </Stack>
        </WrapProductSale>
    )
}

export default ProductSale

const WrapProductSale = styled.div`
    
`

const WrapImageProduct = styled.div`
    background-color: #F7F7F7;
    text-align: center;
    img{
        padding: 4em 0 2em  ;
        width: 55%;
    }
`

const NameProduct = styled.div`
    font-size: 1.7em;
    font-weight: 600;
    color: #151875;
    padding: 0.3em 0;
    border-bottom: 2px solid #EEEFFB;
`

const Price = styled.p`
      font-size: 1.4em;
      color:#151875;
      font-weight: 600;
      &.price-old{
color: #FB2448;
text-decoration: line-through;
font-size: 1.2em;
      }
`