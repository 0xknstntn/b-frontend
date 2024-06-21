import styled from "styled-components";
import TonLogo from '../../../assets/TonLogo.svg'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const NameContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const Logo = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 2px;
`

const Name = styled.a`
    color: #fff;
    font-size: 30px;
    font-weight: 500;
`

const AmountContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const Input = styled.input`
    width: 230px;
    min-width: 1ch;
    height: 60px;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
    background: transparent;
    padding: 0;
`

const WithdrawNameToken = styled.a`
    color: #a5a5a5;
    font-size: 30px;
    font-weight: 500;
    margin-top: 7.5px;
    margin-left: 5px;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -5px;
`

const AmountOnBalance = styled.a`
    color: #a5a5a5;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    margin-left: 2px;
`

const ButtonContainer = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    position: fixed;
    bottom: 50px;
`

const NonActiveConfirm = styled.button`
    width: 90%;
    height: 45px;
    border-radius: 10px;
    background-color: #2f2f2f;
    color: #555;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`

const ActiveConfirm = styled.button`
    width: 90%;
    height: 45px;
    border-radius: 10px;
    background-color: #0098EA;
    color: #fff;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`

const Description = styled.a`
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
`


const LogoInButton = styled.img`
    width: 26px;
    height: 26px;
    margin-top: -2px;
`

const Links = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`


export const BuyBattery = () => {

    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
    }, [])

    return (
        <>
            <Container>
                <div style={{ width: "100%" }}>
                    <NameContainer>
                        <Name>Buy Batteries</Name>
                    </NameContainer>
                    <AmountContainer>
                        <InputContainer>
                            <Input
                                value={amount}
                                style={{ maxWidth: `${amount.length}ch` }}
                                onChange={(e) => setAmount(e.target.value)}
                                inputMode='numeric'
                                placeholder="0"></Input>
                            <WithdrawNameToken>batteries</WithdrawNameToken>
                        </InputContainer>
                        <AmountOnBalance>1 Battery = 2 TON</AmountOnBalance>
                    </AmountContainer>
                </div>
            </Container>
            <div style={{width: "85%", marginTop: "20px"}}>
                <Description>
                    Every NFT miners spends 1 battery a block.<br/>
                    If you don't have enough batteries on your<br/>
                    balance, the NFT miners won't work.
                </Description>
            </div>
            <ButtonContainer>
                {amount != "" ? <Links to="/SuccessBuying"><ActiveConfirm>Buy for 0.0125 <LogoInButton src={TonLogo}/></ActiveConfirm></Links> : <NonActiveConfirm>Buy for 0.0125</NonActiveConfirm>}
            </ButtonContainer>
        </>
    )
}