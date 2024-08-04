import styled from "styled-components";
import ByteLogo from '../../assets/BytecoinLogo.png'

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
      0% { background-color: rgb(7, 150, 214); box-shadow: 0 0 5px rgb(7, 150, 214); }
      50% { background-color: rgb(7, 150, 234); box-shadow: 0 0 25px rgb(7, 150, 234); }
      100% { background-color: rgb(7, 150, 214); box-shadow: 0 0 5px rgb(7, 150, 214) }
      }
      animation: glowing 1750ms infinite;
      margin-bottom: 40px;
`


export const LoadingPage = () => {
    return(
        <Container>
            <Logo loading="lazy" src={ByteLogo}/>
        </Container>
    )
}