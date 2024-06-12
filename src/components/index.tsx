import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainPage } from "./Page/MainPage";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Index = () => {
    return(
        <Container>
            <Header />
            <MainPage />
        </Container>
    )
}