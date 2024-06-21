import styled from "styled-components";
import BuyMoreMiners from '../../../assets/BuyMoreMiners.webp'
import { useMinersInfo, useProtocolInfo } from "../../../store/useProtocol";
import { useState } from "react";
import { formatCash } from "../../../utils/utils";

const MainMinerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const MyMinerContainer = styled.div`
    width: 90%;
    height: 200px;
    background: #1b1b1b;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const GreyText = styled.a`
    color: #adabac;
    font-size: 13px;
    font-weight: 400;
`

const AmountASIC = styled.a`
    color: #fff;
    font-size: 26px;
    font-weight: 500;
`

const ASICContainer = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`

const AmountInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

const BuyMiners = styled.img`
    width: 130px;
    height: 60px;
`

const LineReward = styled.div`
    width: 90%;
    height: 5px;
    border-radius: 50px;
    background: #474747;
    margin-top: 30px;
`

const RewardTime = styled.a`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin-top: 20px;
`


export const MinerBlock = () => {
    
    const [ miner_info, setMinerInfo ] = useMinersInfo();
    const [ protocol_info, setProtocolInfo ] = useProtocolInfo();
    
    return (
        <MainMinerContainer>
            <MyMinerContainer>
                <ASICContainer>
                    <AmountInfo>
                        <GreyText>My Miners</GreyText>
                        <AmountASIC>{miner_info.miners_amount} ASIC</AmountASIC>
                        <GreyText>{
                            isNaN(((35008.55 / protocol_info.epoch) / protocol_info.miners_nft_count) * miner_info.miners_amount ) ? 0 : 
                            formatCash(((35008.55 / protocol_info.epoch) / protocol_info.miners_nft_count) * miner_info.miners_amount)
                        } BYTE per 1 day</GreyText>
                    </AmountInfo>
                    <BuyMiners src={BuyMoreMiners}/>
                </ASICContainer>
                <LineReward />
                {miner_info.battery_amount == 0 && miner_info.miners_amount != 0 
                ? 
                    <RewardTime style={{color: "#ef5b5b"}}>{miner_info.battery_amount} Batteries on balance ({miner_info.battery_amount} day)</RewardTime> 
                :
                    <RewardTime>{miner_info.battery_amount} Batteries on balance ({miner_info.battery_amount} day)</RewardTime> 
                }
            </MyMinerContainer>
        </MainMinerContainer>
    )
}