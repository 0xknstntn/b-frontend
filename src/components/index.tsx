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

const routes = [
    { path: '/', name: 'MainPage', element: <MainPage />, nodeRef: createRef() },
    { path: '/depositminer', element: <DepositMiner /> },
    { path: '/buybattery', element: <BuyBattery /> },
    { path: '/withdraw', element: <Withdraw /> },
    { path: '/withdrawamount/BYTE', element: <WithdrawAmountBYTE /> },
    { path: '/withdrawamount/NFT', element: <WithdrawAmountNFT /> },
    { path: '/SuccessWithdrawBYTE', element: <SuccessWithdrawBYTE /> },
    { path: '/SuccessWithdrawNFT', element: <SuccessWithdrawNFT /> },
    { path: '/SuccessDeposit', element: <SuccessDeposit /> },
    { path: '/SuccessBuying', element: <SuccessBuying /> }
]


export const Index = () => {
    return (
        <Container>
            <Header />
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Container>
    )
}