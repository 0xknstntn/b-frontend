import { createStore } from './store';


type ItemMetadata = {
        address: string,
        owner: string
}

export interface Miner {
        miners_amount: number,
        battery_amount: number,
        bytecoins_amount: number,
        balance: number,
        nfts: Array<ItemMetadata>
};

export const defaultStateMiner: Miner = { 
        miners_amount: 0,
        battery_amount: 0,
        bytecoins_amount: 0,
        balance: 0,
        nfts: []
};

export const [useProtocolInfo] = createStore({
        epoch: 0,
        miners_nft_count: 0,
});

export const [useAction] = createStore({action: true});

export const [useMinersInfo] = createStore(defaultStateMiner);