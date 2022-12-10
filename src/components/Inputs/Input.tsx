import styled from 'styled-components';
import { MegapackXL, Megapack2, Megapack, Powerpack, Transformer } from './Products';

const InputsContainer = styled.div`
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    //justify-content: space-between;
`;

export const Inputs = () => {

    return (
        <InputsContainer>
            <MegapackXL />
            <Megapack2 />
            <Megapack />
            <Powerpack />
            <Transformer />
        </InputsContainer>
    )
}