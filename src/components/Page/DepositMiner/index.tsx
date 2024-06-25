import styled from "styled-components";
import NFTASIC from '../../../assets/laptop.webp'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMinersInfo } from "../../../store/useProtocol";
import { useTonConnectUI, SendTransactionRequest, useTonAddress } from "@tonconnect/ui-react";

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

const Input = styled.input <{ anim: string }>`
    width: 230px;
    min-width: 1ch;
    height: 60px;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
    background: transparent;
    padding: 0;
    animation: ${(props: { anim: any; }) => props .anim};
    @keyframes shake {
        10%, 90% {
            transform: translateX(-0.5px);
        }
        20%, 80% {
            transform: translateX(1px);
        }
        30%, 50%, 70% {
            transform: translateX(-2px);
        }
        40%, 60% {
            transform: translateX(2px);
        }
    }
`

//letter-spacing

const WithdrawNameToken = styled.a`
    color: #a5a5a5;
    font-size: 38px;
    font-weight: 500;
    margin-top: 7px;
    margin-left: 5px;
`

const WithdrawNameTokenError = styled.a`
    color: #ef5b5b;
    font-size: 38px;
    font-weight: 500;
    margin-top: 7px;
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


const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`

type ItemMetadata = {
    address: string,
    owner: string
}

const api_url = 'https://b-api-theta.vercel.app/api/api/v1'

export const DepositMiner = () => {
    const userFriendlyAddress = useTonAddress();
    const [ amount, setAmount] = useState('');
    const navigate = useNavigate();
    const [ miner_info, setMinerInfo ] = useMinersInfo();
    const [ tonConnectUI, setOptions] = useTonConnectUI();

    useEffect(() => {
        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
    }, [])

    const DepositNFT = (nft_item_address: ItemMetadata[], amount: number) => {
        let parsed_amount = (0.12 * 10**9)
        let myTransaction: SendTransactionRequest = {
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: []
        }
        for (let index = 0; index < amount; index++) {
            myTransaction.messages.push({
                address: nft_item_address[index].address,
                amount: parsed_amount.toString(),
                payload: "te6cckEBAQEANQAAZV/MPRQAAAAAAAAAAIAcEr3c68GMYt31XUZZi3vWfwuFsq4iF6St/PS7juczwCEBCwdgEPiYp5k="
            })
        }

        return myTransaction
    }

    const DepositNftAction = async (nft_item_address: ItemMetadata[], amount: number) => {
        let tx = DepositNFT(miner_info.nfts, Number(amount))
        let result = tonConnectUI.sendTransaction(tx);
        result.then((res) => {
            navigate("/SuccessDeposit");
            setTimeout(async function() {
                let result = await fetch(api_url + `/miners?address=${userFriendlyAddress}`)
                let result_json = await result.json()
                if (result_json.ok == "true") {
                    setMinerInfo({
                        miner_address: userFriendlyAddress,
                        miners_amount: result_json.result.miners_amount,
                        battery_amount: result_json.result.battery_amount,
                        bytecoins_amount: result_json.result.bytecoins_amount,
                        balance: result_json.result.balance,
                        nfts: result_json.result.items
                    })
                }
            }, 10000);
        })
    }

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

                            { Number(amount) > miner_info.nfts.length || Number(amount) > 4 ? 
                                <> 
                                <Input
                                    value={amount}
                                    style={{ width: `${amount.length}ch`, color: "#ef5b5b" }}
                                    onChange={(e) => setAmount(e.target.value)}
                                    inputMode="numeric" 
                                    pattern="[0-9]*"
                                    placeholder="0"
                                    anim="shake 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) both"    
                                ></Input>
                                <WithdrawNameTokenError>NFT</WithdrawNameTokenError>
                                </> 
                            : 
                                <> 
                                <Input
                                    value={amount}
                                    style={{ width: `${amount.length}ch` }}
                                    onChange={(e) => setAmount(e.target.value)}
                                    inputMode="numeric" 
                                    pattern="[0-9]*"
                                    placeholder="0"
                                    anim=""
                                ></Input>
                                <WithdrawNameToken>NFT</WithdrawNameToken>
                                </> 
                            }
                        </InputContainer>
                        <AmountOnBalance>{miner_info.nfts.length} NFT on balance</AmountOnBalance>
                    </AmountContainer>
                </div>
            </Container>
            <ButtonContainer>
                {
                    (amount != "" && Number(amount) != 0) ? 
                        Number(amount) <= 4 ?
                            Number(amount) <= miner_info.nfts.length ? <Links> <ActiveConfirm onClick={() => DepositNftAction(miner_info.nfts, Number(amount))}>CONTINUE</ActiveConfirm> </Links> : <NonActiveConfirm>Not enough funds</NonActiveConfirm> 
                        : <NonActiveConfirm>Max 4 transactions can be sent</NonActiveConfirm>
                    : 
                        <NonActiveConfirm>CONTINUE</NonActiveConfirm>
                }
            </ButtonContainer>
        </>
    )
}