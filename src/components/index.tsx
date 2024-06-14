import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainPage } from "./Page/MainPage";
import { Routes, Route } from 'react-router-dom';
import { DepositMiner } from "./Page/DepositMiner/DepositMiner";
import { BuyBattery } from "./Page/BuyBattery";
import { Withdraw } from "./Page/Withdraw";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Index = () => {
    return (
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/depositminer" element={<DepositMiner />} />
                <Route path="/buybattery" element={<BuyBattery />} />
                <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
        </Container>
    )
}