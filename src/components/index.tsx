import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainPage } from "./Page/MainPage";
import { Routes, Route } from 'react-router-dom';
import { DepositMiner } from "./Page/DepositMiner";
import { BuyBattery } from "./Page/BuyBattery";
import { Withdraw } from "./Page/Withdraw";
import { WithdrawAmountBYTE } from "./Page/Withdraw/WithdrawAmountBYTE";
import { WithdrawAmountNFT } from "./Page/Withdraw/WithdrawAmountNFT";
import { SuccessWithdrawBYTE } from "./Page/Withdraw/SuccessfulWithdrawBYTE";
import { SuccessWithdrawNFT } from "./Page/Withdraw/SuccessfulWithdrawNFT";
import { SuccessDeposit } from "./Page/DepositMiner/SuccessfulDeposit";
import { SuccessBuying } from "./Page/BuyBattery/SuccessfulBuy";

const Container = styled.div`
    width: 100%;
    height: 100vh;
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
                <Route path="/withdrawamount/BYTE" element={<WithdrawAmountBYTE />} />
                <Route path="/withdrawamount/NFT" element={<WithdrawAmountNFT />} />
                <Route path="/SuccessWithdrawBYTE" element={<SuccessWithdrawBYTE />} />
                <Route path="/SuccessWithdrawNFT" element={<SuccessWithdrawNFT />} />
                <Route path="/SuccessDeposit" element={<SuccessDeposit />} />
                <Route path="/SuccessBuying" element={<SuccessBuying />} />
            </Routes>
        </Container>
    )
}