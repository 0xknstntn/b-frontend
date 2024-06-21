import styled from "styled-components";
import NFTASIC from '../../../assets/laptop.webp'
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
    font-size: 15px;
    font-weight: 500;
    margin-left: 10px;
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

//letter-spacing

const WithdrawNameToken = styled.a`
    color: #a5a5a5;
    font-size: 38px;
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
    margin-top: 10px;
    margin-left: 2px;
`

const ButtonContainer = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 20px;
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


const Links = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`


export const DepositMiner = () => {

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
                        <Logo src={NFTASIC} />
                        <Name>Deposit NFT Miner</Name>
                    </NameContainer>
                    <AmountContainer>
                        <InputContainer>
                            <Input
                                value={amount}
                                style={{ width: `${amount.length}ch` }}
                                onChange={(e) => setAmount(e.target.value)}
                                inputMode="numeric" pattern="[0-9]*"
                                placeholder="0"></Input>
                            <WithdrawNameToken>NFT</WithdrawNameToken>
                        </InputContainer>
                        <AmountOnBalance>0 NFT on balance</AmountOnBalance>
                    </AmountContainer>
                </div>
            </Container>
            <ButtonContainer>
                {amount != "" ? <Links to="/SuccessDeposit"><ActiveConfirm>CONTINUE</ActiveConfirm></Links> : <NonActiveConfirm>CONTINUE</NonActiveConfirm>}
            </ButtonContainer>
        </>
    )
}