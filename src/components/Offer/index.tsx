import React from 'react'
import styled from 'styled-components'
import Image from "../Image"
import { Stack } from "@mui/material"

interface PropsProduct {
    code?: string,
    className?: string,
    src: string,
    color?: boolean
    name?: string,
    price?: string,
    style?: object,
}

const OfferItem = ({ src }: PropsProduct) => {
    return (
        <WrapOffer>
            <Stack direction='column' spacing={{ xs: 2 }} >
                <Image src={src} />
                <Name>123</Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Text>
            </Stack>
        </WrapOffer>
    )
}

export default OfferItem

const WrapOffer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 6em 3em;
text-align: center;
`

const Name = styled.div`
font-size: 1.7em;
    font-weight: 600;
    color: #151875;
`

const Text = styled.p`
font-size: 1.4em;
color: #8A8FB9;
font-weight: 600;
`