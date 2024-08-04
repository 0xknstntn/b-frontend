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
`


export const LoadingPage = () => {
    return(
        <Container>
            <Logo src={ByteLogo}/>
        </Container>
    )
}