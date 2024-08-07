import styled from "styled-components";
import DepositMiner from '../../../assets/DepositMiner.webp'
import BuyBattery from '../../../assets/BuyBattery.webp'
import Withdraw from '../../../assets/Withdraw.webp'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
`

const LinkContainer = styled.div`
    width: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkText = styled.a`
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap;
    margin-top: 10px;
`

const Links = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`


export const NavigationBlock = () => {
    return (
        <Container>
            <LinkContainer>
                <Links to="/depositminer">
                    <Logo loading="lazy" src={DepositMiner} />
                    <LinkText>Deposit Miner</LinkText>
                </Links>
            </LinkContainer>
            <LinkContainer>
                <Links to="/buybattery">
                    <Logo loading="lazy" src={BuyBattery} />
                    <LinkText>Buy battery</LinkText>
                </Links>
            </LinkContainer>
            <LinkContainer>
                <Links to="/withdraw">
                    <Logo loading="lazy" src={Withdraw} />
                    <LinkText>Withdraw</LinkText>
                </Links>
            </LinkContainer>
        </Container>
    )
}