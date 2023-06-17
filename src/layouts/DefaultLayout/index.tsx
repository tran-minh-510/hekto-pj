import styled from "styled-components";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends React.PropsWithChildren { }

const DefaultLayout: React.FC<IProps> = ({ children }) => {
    const headerEle: any = useRef(null);
    const bodyEle: any = useRef(null);

    useEffect(() => {
        bodyEle.current.style.marginTop = headerEle.current.offsetHeight + 'px'
    })
    return (
        <Wrapper>
            <Header ref={headerEle} />
            <Main ref={bodyEle}>{children}</Main>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
`;

export default DefaultLayout;