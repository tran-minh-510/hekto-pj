import styled from "styled-components"
import { Container, Stack, Grid } from '@mui/material';
import { InstagramIcon, TwitterIcon, LogoIcon, FacebookIcon } from '../icons';
import Input from '../Input';
import Button from '../Button';

function Footer() {
    return (
        <FooterWrapper>
            <FooterTop>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <LogoIcon />
                            <FormGroup>
                                <Stack direction="row">
                                    <Input label='Enter Email Address' />
                                    <Button className="btn-signup" type="submit">
                                        Sign Up
                                    </Button>
                                </Stack>
                            </FormGroup>
                            <Text>Contact Info</Text>
                            <Text>17 Princess Road, London, Greater London NW1 8JR, UK</Text>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <NameMenu>
                                        Catagories
                                    </NameMenu>
                                    <ListMenu>
                                        <Item>Laptops & Computers</Item>
                                        <Item>Cameras & Photography</Item>
                                        <Item>Smart Phones & Tablets</Item>
                                        <Item>Video Games & Consoles</Item>
                                        <Item>Waterproof Headphones</Item>
                                    </ListMenu>
                                </Grid>
                                <Grid item xs={4}>
                                    <NameMenu>
                                        Customer Care
                                    </NameMenu>
                                    <ListMenu>
                                        <Item>My Account</Item>
                                        <Item>Discount</Item>
                                        <Item>Returns</Item>
                                        <Item>Orders History</Item>
                                        <Item>Order Tracking</Item>
                                    </ListMenu>
                                </Grid>
                                <Grid item xs={4}>
                                    <NameMenu>
                                        Pages
                                    </NameMenu>
                                    <ListMenu>
                                        <Item>Blog</Item>
                                        <Item>Browse the Shop</Item>
                                        <Item>Category</Item>
                                        <Item>Pre-Built Pages</Item>
                                        <Item>Visual Composer Elements</Item>
                                        <Item>WooCommerce Pages</Item>
                                    </ListMenu>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ padding: '1.2em 5em' }}>
                        <TextSocial>©Webecy - All Rights Reserved</TextSocial>
                        <Stack spacing={2} direction="row" justifyContent="space-between">
                            <Social><FacebookIcon /></Social>
                            <Social><InstagramIcon /></Social>
                            <Social><TwitterIcon /></Social>
                        </Stack>
                    </Stack>
                </Container>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
`

const FooterTop = styled.div`
background-color: #EEEFFB;
padding: 5em 0;
`

const FooterBottom = styled.div`
background-color: #E7E4F8;
`

const NameMenu = styled.h4`
    font-size: 1.7em;
    font-weight: 600;
`

const ListMenu = styled.ul`
    margin-top: 1em;
`

const Item = styled.li`
    padding: 1em 0;
    color: #8A8FB9;
    font-size: 1.3em;
`

const Text = styled.p`
    font-size: 1.3em;
    color: #8A8FB9;
    margin-top: 1em;
`

const TextSocial = styled.p`
    font-size: 1.3em;
    color: #8A8FB9;
`

const Social = styled.div`
padding: 0.4em 0.5em;
background-color: #151875;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
svg{
    width: 1em;
}
`

const FormGroup = styled.form`
width: 40em;
 padding: 0.2em;
 background-color: #fff;
 border-radius: 3px;
 margin: 2em 0;
    input{
        width: 90%;
           padding: 1em
    }
    button{
         background-color: #FB2E86;
         width: 10em;
         height: 100%;
         border-radius: 3px;
         color: #fff
    }
`