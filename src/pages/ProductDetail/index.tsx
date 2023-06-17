import { Container, Stack } from "@mui/material"
import styled from "styled-components"
import Image from "../../components/Image"
import detailImg from "../../image/detail.png"
import detailBig from "../../image/detailBig.png"
import { StarIcon } from "../../components/icons"
import Button from "../../components/Button"
import { HeartIcon, FacebookIcon, ArrowRight } from "../../components/icons"
import { Link } from "react-router-dom"
import RelatedProduct from "../../components/RelatedProduct"
import { useState, useEffect, Fragment } from "react"
import productApi from "../../api/product"
import { IProduct } from "../../interfaces";
import { useParams } from "react-router-dom"

function ProductDetail() {

    const params = useParams()
    const [product, setProduct] = useState<IProduct | null>(null)
    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([])
    useEffect(() => {
        window.scrollTo(0, 0);
        if (params.id) {
            productApi.searchDetail(params.id).then(res => {
                setProduct(res.data)
                setRelatedProducts(res.relatedProducts)
            }
            )
        }
    }, [params.id])
    return (
        <>
            <WrapProductDetail>
                {product ?
                    <ShowDetail>
                        <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                            <Stack direction='column' spacing={{ xs: 1.1 }}>
                                {product?.images.map((img, index) => {
                                    if (index) {
                                        return <Fragment key={index}>
                                            <Image src={img.url} />
                                        </Fragment>
                                    }
                                })}
                            </Stack>
                            {
                                product && <Image src={product?.images[0].url} />
                            }
                            <Content>
                                <h3>{product?.name}</h3>
                                <Stack className="wrap-star" direction='row' alignItems='center' spacing={{ xs: 1 }}>
                                    <Stack direction='row' alignItems='center'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </Stack>
                                    <span>(22)</span>
                                </Stack>
                                <WrapPrice direction='row' spacing={{ xs: 2 }} alignItems='center'>
                                    <p>${product?.price}</p>
                                    <p className="price-old">$52.00</p>
                                </WrapPrice>
                                <Name>
                                    Color
                                </Name>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                                <CustomButton type="button" className="add-cart">
                                    <Stack direction='row' alignItems='center' spacing={{ xs: 2 }}>
                                        <p>Add To cart</p>
                                        <HeartIcon />
                                    </Stack>
                                </CustomButton>
                                <Name>
                                    Categories:
                                </Name>
                                <Name>
                                    Tags:
                                </Name>
                                <div className="social">
                                    <Stack direction='row' alignItems='center' spacing={{ xs: 2 }}>
                                        <Name>
                                            Share:
                                        </Name>
                                        <div className="social-box">
                                            <FacebookIcon />
                                        </div>
                                        <div className="social-box">
                                            <FacebookIcon />
                                        </div>
                                        <div className="social-box">
                                            <FacebookIcon />
                                        </div>
                                    </Stack>
                                </div>
                            </Content>
                        </Stack>
                    </ShowDetail> : <span>Không có dữ liệu</span>}

            </WrapProductDetail>
            <Details>
                <Container>
                    <DetailsNav>
                        <Stack direction='row' spacing={{ xs: 8 }}>
                            <Link to='#'>Description</Link>
                            <Link to='#'>Additional Info</Link>
                            <Link to='#'>Reviews</Link>
                            <Link to='#'>Video</Link>
                        </Stack>
                    </DetailsNav>
                    <DetailsContent>
                        <Varius>
                            <NameDetail>
                                Varius tempor.
                            </NameDetail>
                            <TextDetail>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</TextDetail>
                        </Varius>
                        <MoreDetails>
                            <NameDetail>
                                More details
                            </NameDetail>
                            <Stack direction='column' spacing={{ xs: 1 }}>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                                    <ArrowRight />
                                    <TextDetail>
                                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                    </TextDetail>
                                </Stack>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                                    <ArrowRight />
                                    <TextDetail>
                                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                    </TextDetail>
                                </Stack>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                                    <ArrowRight />
                                    <TextDetail>
                                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                    </TextDetail>
                                </Stack>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='center'>
                                    <ArrowRight />
                                    <TextDetail>
                                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                    </TextDetail>
                                </Stack>
                            </Stack>
                        </MoreDetails>
                    </DetailsContent>
                </Container>
            </Details>
            <WrapRelatedProduct>
                <Container>
                    <h3>Playwood arm chair</h3>
                    <RelatedProductsList direction='row' spacing={{ xs: 2 }}>
                        {relatedProducts?.map((item, index) => {
                            return <Fragment key={index}><RelatedProduct product={item} /></Fragment>
                        })}
                    </RelatedProductsList>
                </Container>
            </WrapRelatedProduct>
        </>
    )
}

const WrapProductDetail = styled(Container)`
    padding: 5em 0;
    font-size: 1.2em;
`

const ShowDetail = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.2em;
`

const Content = styled.div`
h3{
    font-size: 2.5em;
    font-weight: 600;
    color: #0D134E;
}
.wrap-star{
    padding: 1em 0;
    span{
        font-weight: 600;
        font-size: 1.2em;
    }
}
.desc{
    line-height: 2em;
    color: #A9ACC6;
    font-size: 1.2em;
    font-weight: 600;
    padding-right: 5em;
}
.social{
    .social-box{
    padding: 0.3em 0.6em;
    background-color: #FB2E86;
    border-radius: 50%;
    path{
        width: 2em;
    }
}
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
const Name = styled.p`
font-weight: 600;
        font-size: 1.2em;
        color: #151875;
        padding: 1em 0;
`

const CustomButton = styled(Button)`
font-weight: 600;
        font-size: 1.2em;
        color: #151875;
        padding: 0.5em 1.5em;
        background-color: #f5f1f1;
        margin: 1em 0;
        svg path{
            fill:#151875;
        }
`

const Details = styled.div`
    background-color: #F9F8FE;
    padding: 5em 0 8em 0;
`

const DetailsNav = styled.div`
    background-color: #F9F8FE;
    padding: 3em 0;
    a{
        font-size: 1.7em;
        font-weight: 600;
        color: #151875;
    }
`

const NameDetail = styled.p`
    font-size: 1.7em;
        font-weight: 600;
        color: #151875;
        padding: 1em 0;
`

const TextDetail = styled.p`
     line-height: 2em;
    color: #A9ACC6;
    font-size: 1.3em;
    font-weight: 600;
`

const DetailsContent = styled.div`
/* padding: 10em 0; */
`

const Varius = styled.div`
`

const MoreDetails = styled.div`
`

const WrapRelatedProduct = styled.div`
padding: 8em 0;
h3{
    font-size: 2.5em;
    font-weight: 600;
    color: #0D134E;
}
`

const RelatedProductsList = styled(Stack)`
margin-top: 2em;
`


export default ProductDetail