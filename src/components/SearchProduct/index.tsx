import { Stack } from "@mui/material"
import Image from "../Image"
import image from "../../image/Leatest-Blog1.png"
import styled from "styled-components"
import { StarIcon, CartIcon, HeartIcon, SearchIcon } from "../icons"
import { IProduct } from "../../interfaces";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct
}

const SearchProduct: React.FC<IProps> = ({ product, ...props }) => {
    return (
        <Stack direction='row' spacing={{ xs: 2 }} alignItems='center' onClick={props.onClick}>
            <Image src={product.images[0].url} />
            <SearchProductDetail>
                <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                    <p className="product-search_name">{product.name}</p>
                    <CircleColor>
                        <div className="circle-color"></div>
                        <div className="circle-color"></div>
                        <div className="circle-color"></div>
                    </CircleColor>
                </Stack>
                <WrapPrice direction='row' spacing={{ xs: 2 }} alignItems='center'>
                    <p>${product.price}</p>
                    <p className="price-old">$52.00</p>
                    <Stack direction='row' alignItems='center'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Stack>
                </WrapPrice>
                <p className="peoduct-search_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <WrapOptions direction='row' spacing={{ xs: 2 }} alignItems='center'>
                    <div className="options-box"><CartIcon /></div>
                    <div className="options-box"><HeartIcon /></div>
                    <div className="options-box"><SearchIcon /></div>
                </WrapOptions>
            </SearchProductDetail>
        </Stack>
    )
}


const SearchProductDetail = styled.div`
padding: 0 2em;
.product-search_name{
    color: #111C85;
font-weight: 600;
font-size: 1.8em;
}
.peoduct-search_text{
    font-size: 1.3em;
    color: #9295AA;
    padding-right: 10em;
    line-height: 2em;
}
`

const CircleColor = styled.div`
        display: flex;
        gap: 0.4em;
    .circle-color{
        width: 0.7em;
        height: 0.7em;
        border-radius: 50%;
        background-color: 
#5E37FF;
    }
`

const WrapPrice = styled(Stack)`
padding: 1em 0;
p{
    color: #111C85;
    font-weight: 600;
    font-size: 1.2em;
    &.price-old{
        color: #FF2AAA;
        text-decoration: line-through;
    }
}
`

const WrapOptions = styled(Stack)`
margin-top: 1em;
.options-box{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 0.8em 0.9em;
border-radius: 50%;
    svg {
        width: 1.2em;
        height: 1.2em;
        path{
               fill:#111C85
        
        }
    }
}
`
export default SearchProduct
