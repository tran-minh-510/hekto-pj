import styled from "styled-components"
import { Container, Grid, Stack } from "@mui/material"
import Image from "../../components/Image"
import Button from "../../components/Button"
import BulbImage from "/src/image/light-bulb.png"
import ProductBg1Image from "/src/image/product-bg1.png"
import ProductBg2Image from "/src/image/product-bg2.png"
import ProductItem from "../../components/ProductItem"
import ProductSale from "../../components/ProductSale"
import OfferItem from "../../components/Offer"

import ProductDetailImg from "/src/image/Featured-Products1.png"
import LeatestProductsImg from "/src/image/Leatest-Products1.png"
import OfferImg from "/src/image/offer1.png"
import TrendingProductsImg from "/src/image/Trending-Products1.png"
import background01Img from "/src/image/background01.png"
import leatestBlog1Img from "/src/image/Leatest-Blog1.png"
import sponsorImg from "/src/image/sponsor.png"
import { useState, useEffect } from 'react'
import authApi from "../../api/auth"
import productApi from "../../api/product"
import { IProduct } from "../../interfaces"
const Home: React.FC = () => {
    const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])
    const [leatestProducts, setLeatestProducts] = useState<IProduct[]>([])
    const [trendingProducts, setTrendingProducts] = useState<IProduct[]>([])
    useEffect(() => {
        authApi.getCurrentUser().then(console.log)
        productApi.getCombineProducts().then(res => {
            setFeaturedProducts(res.data.featureProducts)
            setLeatestProducts(res.data.leatestProducts)
            setTrendingProducts(res.data.trendingProducts)
        })

    }, [])
    return (
        <>
            <SlideHome>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Image src={BulbImage} />
                            <SubTitleSlide>
                                Best Furniture For Your Castle....
                            </SubTitleSlide>
                            <TitleSlide>
                                New Furniture Collection Trends in 2020
                            </TitleSlide>
                            <TextContentSlide>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                            </TextContentSlide>
                            <CusTomButtonSlide type="button" className='btn-show'>
                                Shop Now
                            </CusTomButtonSlide>
                        </Grid>
                        <Grid item xs={5}>
                            <CusTomImgSlide src={ProductBg1Image} className="img" />
                        </Grid>
                    </Grid>
                </Container>
            </SlideHome>
            <FeaturedProducts>
                <Container>
                    <ProductsTitle>
                        Featured Products
                    </ProductsTitle>
                    <Grid container spacing={4} style={{ marginTop: '2em' }}>
                        {featuredProducts && featuredProducts.map(product =>
                            <Grid item xs={3} key={product.id}>
                                <CustomProductItem data={product} type='features' />
                            </Grid>)}
                    </Grid>
                </Container>
            </FeaturedProducts>
            <LeatestProducts>
                <Container>
                    <ProductsTitle>Leatest Products</ProductsTitle>
                    <Grid container spacing={5} style={{ marginTop: '2em' }}>
                        {featuredProducts && featuredProducts.map(product =>
                            <Grid item xs={4} key={product.id}>
                                <ProductSale data={product} />
                            </Grid>)}
                    </Grid>
                </Container>
            </LeatestProducts>
            <Offer>
                <Container>
                    <ProductsTitle>What Shopex Offer!</ProductsTitle>
                    <Grid container spacing={5} style={{ marginTop: '2em' }}>
                        <Grid item xs={3}>
                            <OfferItem src={OfferImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <OfferItem src={OfferImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <OfferItem src={OfferImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <OfferItem src={OfferImg} />
                        </Grid>
                    </Grid>
                </Container>
            </Offer>
            <UniqueFeatures>
                <Container>
                    <Grid container spacing={{ xs: 0 }}>
                        <Grid item xs={5}>
                            <Image src={ProductBg2Image} className="img" />
                        </Grid>
                        <Grid item xs={7} padding={'10em 10em 0 0'}>
                            <ProductsTitle className="unique-features">
                                Unique Features Of leatest &
                                Trending Poducts
                            </ProductsTitle>
                            <UniqueFeaturesDescription>

                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='flex-start' padding={'0.5em 0'}>
                                    <Doted />
                                    <TextContentSlide>All frames constructed with hardwood solids and laminates</TextContentSlide>
                                </Stack>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='flex-start' padding={'0.5em 0'}>
                                    <Doted />
                                    <TextContentSlide>Reinforced with double wood dowels, glue, screw - nails corner
                                        blocks and machine nails</TextContentSlide>
                                </Stack>
                                <Stack direction='row' spacing={{ xs: 2 }} alignItems='flex-start' padding={'0.5em 0'}>
                                    <Doted />
                                    <TextContentSlide>Arms, backs and seats are structurally reinforced</TextContentSlide>
                                </Stack>
                            </UniqueFeaturesDescription>
                            <Stack direction='row' spacing={{ xs: 2 }} alignItems='center' padding={'3em 0'}>
                                <CusTomButtonSlide type="button" className='btn-add'>
                                    Add To Cart
                                </CusTomButtonSlide>
                                <PriceEle className="">
                                    <p>B&B Italian Sofa </p>
                                    <p>$32.00</p>
                                </PriceEle>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </UniqueFeatures>
            <TrendingProducts>
                <Container>
                    <ProductsTitle>
                        <p>Get Leatest Update By Subscribe</p>
                        <p>our Newslater</p>
                    </ProductsTitle>
                    <CusTomButtonSlide type="button" className='shop-now'>
                        Shop Now
                    </CusTomButtonSlide>
                    <ProductsTitle className="trending-products">Trending Products</ProductsTitle>
                    <Grid container spacing={{ xs: 3 }} padding={'5em 0 8em 0'}>
                        {trendingProducts && trendingProducts.map(product =>
                            <Grid item xs={3} key={product.id}>
                                <CustomProductItem data={product} type='trending' />
                            </Grid>)}
                    </Grid>
                </Container>
            </TrendingProducts>
            <Image src={background01Img} />
            <Sponsor className="sponsor">
                <Container>
                    <Stack direction='row' spacing={{ xs: 2 }} justifyContent={'center'}>
                        <Image src={sponsorImg} />
                    </Stack>
                </Container>
            </Sponsor>
            <LeatestBlog>
                <Container>
                    <ProductsTitle>Leatest Blog</ProductsTitle>
                    <Grid container spacing={{ xs: 3 }} paddingTop={'6em'}>
                        <Grid item xs={4}>
                            <LeatestBlogBox>
                                <Image src={leatestBlog1Img} />
                                <Stack direction='column' spacing={{ xs: 2 }} padding={'2em'}>
                                    <Stack direction='row' spacing={{ xs: 5 }} >
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>SaberAli</p>
                                        </Stack>
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>21 August,2020</p>
                                        </Stack>
                                    </Stack>
                                    <LeatestBlogName>
                                        Top esssential Trends in 2021
                                    </LeatestBlogName>
                                    <TextContentSlide>
                                        More off this less hello samlande lied much
                                        over tightly circa horse taped mightly
                                    </TextContentSlide>
                                    <CusTomButtonSlide className="read-more" type="button">
                                        Read More
                                    </CusTomButtonSlide>
                                </Stack>
                            </LeatestBlogBox>
                        </Grid>
                        <Grid item xs={4}>
                            <LeatestBlogBox>
                                <Image src={leatestBlog1Img} />
                                <Stack direction='column' spacing={{ xs: 2 }} padding={'2em'}>
                                    <Stack direction='row' spacing={{ xs: 5 }} >
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>SaberAli</p>
                                        </Stack>
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>21 August,2020</p>
                                        </Stack>
                                    </Stack>
                                    <LeatestBlogName>
                                        Top esssential Trends in 2021
                                    </LeatestBlogName>
                                    <TextContentSlide>
                                        More off this less hello samlande lied much
                                        over tightly circa horse taped mightly
                                    </TextContentSlide>
                                    <CusTomButtonSlide className="read-more" type="button">
                                        Read More
                                    </CusTomButtonSlide>
                                </Stack>
                            </LeatestBlogBox>
                        </Grid>
                        <Grid item xs={4}>
                            <LeatestBlogBox>
                                <Image src={leatestBlog1Img} />
                                <Stack direction='column' spacing={{ xs: 2 }} padding={'2em'}>
                                    <Stack direction='row' spacing={{ xs: 5 }} >
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>SaberAli</p>
                                        </Stack>
                                        <Stack direction='row' spacing={{ xs: 1 }} >
                                            <span>A</span>
                                            <p>21 August,2020</p>
                                        </Stack>
                                    </Stack>
                                    <LeatestBlogName>
                                        Top esssential Trends in 2021
                                    </LeatestBlogName>
                                    <TextContentSlide>
                                        More off this less hello samlande lied much
                                        over tightly circa horse taped mightly
                                    </TextContentSlide>
                                    <CusTomButtonSlide className="read-more" type="button">
                                        Read More
                                    </CusTomButtonSlide>
                                </Stack>
                            </LeatestBlogBox>
                        </Grid>
                    </Grid>
                </Container>
            </LeatestBlog>
        </>
    )
}

export default Home

const CustomProductItem = styled(ProductItem)`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    overflow: hidden;
`

const SlideHome = styled.div`
width: 100%;
    background-color: #F2F0FF;
`

const SubTitleSlide = styled.p`
font-size: 1.5em;
color: #FB2E86;
font-weight: 600;
margin-top: 3em;
`

const TitleSlide = styled.h2`
font-size: 4.4em;
font-weight: 600;
margin-top: 0.8em;
`

const TextContentSlide = styled.p`
font-size: 1.4em;
color: #8A8FB9;
margin-top: 2em;
`

const CusTomButtonSlide = styled(Button)`
    background-color: #FB2E86;
    margin-top: 3em;
    padding: 0.8em 2.5em;
    color: #fff;
    font-size: 1.5em;
&.btn-add{
    border-radius: 3px;
    margin-top: 0;
}
&.shop-now{
    border-radius: 3px;
    margin-top: 1em;
}
&.read-more{
    background-color: #fff;
    color: #151875;
    border-bottom: 1px solid #151875;
    padding: 0.3em 0;
    margin-top: 0;
}
`
const CusTomImgSlide = styled(Image)`
padding:13em 0;
`

const FeaturedProducts = styled.div`
    margin-top: 10em;
`

const ProductsTitle = styled.h3`
    text-align: center;
    font-size: 3.5em;
    font-weight: 600;
    color: #151875;
    &.unique-features{
        text-align:left
    }
    &.trending-products{
        margin-top: 1em;
    }
`

const LeatestProducts = styled.div`
    margin-top: 10em;
`

const Offer = styled.div`
    margin-top: 5em;
`

const UniqueFeatures = styled.div`
    margin-top: 10em;
    background-color: #F2F0FF;
`

const UniqueFeaturesDescription = styled.div`
padding-top: 2em;
`

const Doted = styled.div`
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: red;
    margin-top: 0.3em;
`

const PriceEle = styled.div`
    p{
        font-size: 1.5em;
        color: #151875;
&:first-child{
    font-weight: 600;
}
    }
`

const TrendingProducts = styled.div`
text-align: center;
margin-top: 10em;
`
const TrendingProductsItem = styled.div`
.trending-products-item{
    padding: 0.8em;
}
`

const Sponsor = styled.div`
padding: 5em;
`

const LeatestBlog = styled.div`
padding: 5em;
span{
    font-size: 1.3em;
}
p{
    font-size: 1.3em;
}
`
const LeatestBlogBox = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 5px;
`

const LeatestBlogName = styled.div`
 font-size: 1.7em;
    font-weight: 600;
    color:#151875;
`