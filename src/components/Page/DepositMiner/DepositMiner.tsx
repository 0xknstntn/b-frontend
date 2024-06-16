import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
`


export const DepositMiner = () => {

    const navigate = useNavigate();

    useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
	}, [])

    return(
        <Container>
            <h1 style={{color: "#fff"}}>Deposit Miner</h1>
        </Container>
    )
}