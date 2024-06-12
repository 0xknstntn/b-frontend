import styled from "styled-components";
import DepositMiner from '../../../assets/DepositMiner.svg'
import BuyBattery from '../../../assets/BuyBattery.svg'
import Withdraw from '../../../assets/Withdraw.svg'

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


export const NavigationBlock = () => {
    return (
        <Container>
            <LinkContainer>
                <Logo src={DepositMiner} />
                <LinkText>Deposit Miner</LinkText>
            </LinkContainer>
            <LinkContainer>
                <Logo src={BuyBattery} />
                <LinkText>Buy battery</LinkText>
            </LinkContainer>
            <LinkContainer>
                <Logo src={Withdraw} />
                <LinkText>Withdraw</LinkText>
            </LinkContainer>
        </Container>
    )
}