import styled from "styled-components"
import Image from "../Image"
import { Stack } from "@mui/material"
import { IProduct } from "../../interfaces"

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IProduct,
    type: 'features' | 'trending'
}

const ProductItem: React.FC<IProps> = ({ data, type, ...props }) => {
    console.log(props)
    return (
        <WrapProductItem onClick={props.onClick}>
            <WrapImageProduct>
                <Image src={data.images[0].url} />
            </WrapImageProduct>
            <Stack direction='column' className="   " spacing={{ xs: 1.5 }} style={{ padding: '2em 0' }}>
                <NameProduct >{data.name}</NameProduct>
                {type === 'features' && <Stack direction='row' spacing={{ xs: 1 }} justifyContent='center'>
                    <ColorItem />
                    <ColorItem />
                    <ColorItem />
                </Stack>}
                {type === 'features' && <Code>Code: 123</Code>}
                <Stack direction='row' spacing={{ xs: 2 }} justifyContent={'center'}>
                    <Price>{data.price}</Price>
                    {type === 'trending' && <Price className="price-old">123</Price>}
                </Stack>
            </Stack>
        </WrapProductItem>
    )
}

const WrapProductItem = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    img{
        width: 171px;
    height: 171px;
    object-fit: cover;
    }
`

const WrapImageProduct = styled.div`
    
`

const NameProduct = styled.p`
    font-size: 1.7em;
    font-weight: 600;
    color: #FB2E86;
    &.trending-product_name{
          color:#151875;
      }
`

const ColorItem = styled.div`
    width: 1.5em;
    height: 0.5em;
    border-radius: 20px;
    background-color: red;
`

const Code = styled.p`
    font-size: 1.3em;
`

const Price = styled.p`
      font-size: 1.3em;
      font-weight: 600;
      &.price-old{
        font-size: 1.2em;
        text-decoration: line-through;
        color: rgba(21, 24, 117, 0.3);
      }
`

export default ProductItem
