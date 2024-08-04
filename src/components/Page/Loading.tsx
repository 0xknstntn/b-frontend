import styled from "styled-components";
import ByteLogo from '../../assets/BytecoinLogo.png'
import BuyBattery from '../../assets/BuyBattery.webp'
import buymoreminers from '../../assets/BuyMoreMiners.webp'
import ByteLogopng from '../../assets/BytecoinLogo.png'
import depositminer from '../../assets/DepositMiner.webp'
import laptop from '../../assets/laptop.webp'
import Succes from '../../assets/SuccessWithdraw.gif'
import tonlogo from '../../assets/TonLogo.svg'
import withdraw from '../../assets/Withdraw.webp'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #151314;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    @keyframes glowing {
      0% { background-color: rgb(7, 150, 214); box-shadow: 0 0 10px rgb(7, 150, 214); }
      50% { background-color: rgb(7, 150, 234); box-shadow: 0 0 25px rgb(7, 150, 234); }
      100% { background-color: rgb(7, 150, 214); box-shadow: 0 0 10px rgb(7, 150, 214) }
      }
      animation: glowing 2000ms infinite;
      margin-bottom: 40px;
`


export const LoadingPage = () => {
    return(
        <>
        <Container>
            <Logo loading="lazy" src={ByteLogo}/>
        </Container>
        </>
    )
}