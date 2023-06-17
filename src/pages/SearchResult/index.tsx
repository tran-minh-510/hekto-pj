import SearchProduct from "../../components/SearchProduct"
import { Container, Grid } from "@mui/material"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import productApi from '../../api/product';
import { IProduct } from "../../interfaces";

function SearchResult() {
    const navigate = useNavigate()
    const [products, setProducts] = useState<IProduct[]>([])
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const keyword = query.get('keyword')
    const handleDetailProduct = (id: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/product/${id}`)
    }
    useEffect(() => {
        if (keyword) {
            productApi.search({ limit: 2, page: 1, order: 'createdAt:desc,id:desc', search: keyword }).then(res => {
                setProducts(res.data)
            })
        }
    }, [])
    return (
        <HandleContainer>
            <WrapperSearchProduct>
                <Grid container spacing={{ xs: 3 }}>
                    {products.length > 0 ? products.map((item, index) => <Grid key={index} item xs={12}>
                        <SearchProduct product={item} onClick={e => handleDetailProduct(item.id, e)} />
                    </Grid>) : <span>Không có dữ liệu</span>}
                </Grid>
            </WrapperSearchProduct>
        </HandleContainer>
    )
}

const HandleContainer = styled(Container)`
    padding: 5em 0;
    `

const WrapperSearchProduct = styled.div`
font-size: 1.2em;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export default SearchResult