import styled from "styled-components";
import Laptop from '../../../assets/laptop.webp'
import BytecoinLogo from '../../../assets/BytecoinLogo.png'
import { useState } from "react";

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
    margin-top: 50px;
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
    max-width: 230px;
    min-width: 1ch;
    height: 50px;
    font-size: 55px;
    font-weight: 500;
    color: #fff;
    background: transparent;
    padding: 0;
    ::placeholder { 
    color: #fff;
}
`

const WithdrawNameToken = styled.a`
    color: #a5a5a5;
    font-size: 38px;
    font-weight: 500;
    margin-top: 10px;
    margin-left: 10px;
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
    font-size: 14px;
`

const ActiveConfirm = styled.button`
    width: 90%;
    height: 45px;
    border-radius: 10px;
    background-color: #0393ff;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`


export const WithdrawAmount = () => {

    const [amount, setAmount] = useState('');

    return (
        <>
            <Container>
                <div style={{ width: "100%" }}>
                    <NameContainer>
                        <Logo src={BytecoinLogo} />
                        <Name>Send to Your wallet</Name>
                    </NameContainer>
                    <AmountContainer>
                        <InputContainer>
                            <Input
                                value={amount}
                                style={{ maxWidth: `${amount.length}ch` }}
                                onChange={(e) => setAmount(e.target.value)}
                                inputMode='numeric'
                                placeholder="0"></Input>
                            <WithdrawNameToken>BYTE</WithdrawNameToken>
                        </InputContainer>
                        <AmountOnBalance>0 BYTE on balance</AmountOnBalance>
                    </AmountContainer>
                </div>
            </Container>
            <ButtonContainer>
                {amount != "" ? <ActiveConfirm>CONTINUE</ActiveConfirm> : <NonActiveConfirm>CONTINUE</NonActiveConfirm>}
            </ButtonContainer>
        </>
    )
}