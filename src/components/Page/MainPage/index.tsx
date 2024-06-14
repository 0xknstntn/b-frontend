import styled from "styled-components";
import BytecoinLogo from '../../../assets/BytecoinLogo.png'
import { NavigationBlock } from "./NavigationBlock";
import { MinerBlock } from "./MinerBlock";

const Container = styled.div`
    width: 85%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MainInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
`

const MainText = styled.a`
    color: #fff;
    font-weight: 600;
    font-size: 30px;
`

const Amount = styled.a`
    color: #fff;
    font-weight: 400;
    font-size: 30px;
`

const AmountDescription = styled.a`
    color: #adabac;
    font-weight: 400;
    font-size: 14px;
`

const Logo = styled.img`
    width: 75px;
    height: 75px;
`

const MainInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const MainPage = () => {
    return (
        <>
            <Container>
                <MainInfo>
                    <MainInfoBlock>
                        <MainText>Bytecoin</MainText>
                        <Amount>0 BYTE</Amount>
                        <AmountDescription>0 Mined today • 2 NFT ASIC</AmountDescription>
                    </MainInfoBlock>
                    <Logo src={BytecoinLogo} />
                </MainInfo>
                <NavigationBlock />
            </Container>
            <MinerBlock />
        </>
    )
}