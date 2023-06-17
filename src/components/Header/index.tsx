import { Container, Stack, Grid } from '@mui/material';
import styled from 'styled-components';
import { EmailIcon, PhoneIcon, ArrowDownIcon, CartIcon, UserIcon, HeartIcon, LogoIcon, SearchIcon } from '../icons';
import Input from '../Input';
import Button from '../Button';
import React, { FC } from 'react';
import Image from '../Image';
import { useState } from 'react';
import productApi from '../../api/product';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import { useDebouncedEffect } from '../../hooks/useDebouncedEffect ';

const Header = (props: object, ref: any) => {
    const [isShowResult, setIsShowResult] = useState(false)
    const [keyword, setKeyWord] = useState('')
    const [products, setProducts] = useState<IProduct[]>([])

    const navigate = useNavigate()

    useDebouncedEffect(() => {
        if (keyword) {
            productApi.search({ limit: 2, page: 1, order: 'createdAt:desc,id:desc', search: keyword }).then(res => {
                setProducts(res.data)
            })
        }
    }, [keyword], 1000);

    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value)

    }
    const onFocus = () => {
        setIsShowResult(true)
    }
    const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setTimeout(() => {
            setIsShowResult(false)
        }, 1000)
    }
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/search?keyword=${keyword}`)
    }
    const handleDetailProduct = (id: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/product/${id}`)
    }
    return (
        <>
            <HeaderWrapper ref={ref}>
                <WrapHeaderTop >
                    <Container>
                        <Stack spacing={{ lg: 2, xs: 1 }} direction="row" justifyContent="space-between">
                            <Stack direction="row" spacing={{ xs: 5 }}>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 1 }}>
                                    <EmailIcon />
                                    <p>mhhasanul@gmail.com</p>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 1 }}>
                                    <PhoneIcon />
                                    <p>(12345)67890</p>
                                </Stack>
                            </Stack>
                            <Stack direction="row" spacing={{ xs: 2 }}>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5 }}>
                                    <p>English</p>
                                    <ArrowDownIcon />
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5 }}>
                                    <p>USD</p>
                                    <ArrowDownIcon />
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5 }}>
                                    <p>Login</p>
                                    <UserIcon />
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5 }}>
                                    <p>Wishlist</p>
                                    <HeartIcon />
                                </Stack>
                                <CartIcon />
                            </Stack>
                        </Stack>
                    </Container>
                </WrapHeaderTop>
                <WrapHeaderBottom>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item lg={8}>
                                <Stack spacing={{ xs: 10 }} direction="row" alignItems="flex-end">
                                    <Logo>
                                        <LogoIcon />
                                    </Logo>
                                    <MenuHeader>
                                        <Stack spacing={{ xs: 5 }} direction="row" justifyContent="space-between">
                                            <ItemMenuHeader className='active'>Home</ItemMenuHeader>
                                            <ItemMenuHeader>Pages</ItemMenuHeader>
                                            <ItemMenuHeader>Products</ItemMenuHeader>
                                            <ItemMenuHeader>Blog </ItemMenuHeader>
                                            <ItemMenuHeader>Shop </ItemMenuHeader>
                                            <ItemMenuHeader>Contact </ItemMenuHeader>
                                        </Stack>
                                    </MenuHeader>
                                </Stack>
                            </Grid>
                            <Grid item lg={4}>
                                <FormGroup onSubmit={handleSearch}>
                                    <Stack direction="row" alignItems="center" justifyContent="flex-end">
                                        <Input label='Search...' onChange={handleValueInput} value={keyword} onFocus={onFocus} onBlur={onBlur} />
                                        <Button className='btn-search' type='submit'>
                                            <SearchIcon />
                                        </Button>
                                    </Stack>
                                    {isShowResult && (products.length > 0 && <ResultItem>
                                        {products.map((item, index) => <div key={index} className='search-product' onClick={(e) => handleDetailProduct(item.id, e)}>
                                            <Image src={item.images[0].url} />
                                            <div className="">
                                                <h3>{item.name} </h3>
                                                <div>${item.price} </div>
                                            </div>
                                        </div>)}
                                    </ResultItem>)}
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Container>
                </WrapHeaderBottom>
            </HeaderWrapper>
        </>

    )
}

const ResultItem = styled.div`
border: 1px solid black;
padding: 1em;
position: absolute;
background-color: #fff;
right: 0;
left: 0;
.search-product{
    padding: 0.5em 0;
    display: flex;
    align-items: center;
    gap: 2em;
    &:hover{
        background-color: #f3ecec;
    }
}
    img{
        width: 60px;
        height: 60px;
    }
`

const HeaderWrapper = styled.div`
position:fixed;
top:0;
left: 0;
right: 0;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
z-index: 2;
`

const WrapHeaderTop = styled.div`
padding: 1em;
    background-color: #7E33E0;
    font-size: 1.4em;
    color: #fff;
`

const WrapHeaderBottom = styled.div`
padding: 1.2em;
    font-size: 1.6em;
    background-color: #fff;
`

const Logo = styled.div`
`

const MenuHeader = styled.div`
`

const ItemMenuHeader = styled.div`
cursor: pointer;
&.active{
    color: #FB2E86;
}
`

const FormGroup = styled.form`
position: relative;
    input{
        width: 90%;
         border: 2px solid #E7E6EF;
         padding: 0.7em 1.2em 
    }
    button{
         padding: 0.5em 0.8em;
         background-color: #FB2E86
    }
`

export default React.forwardRef(Header)
