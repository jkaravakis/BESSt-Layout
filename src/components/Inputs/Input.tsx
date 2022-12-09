import styled from 'styled-components';
import { MegapackXL, Megapack2, Megapack, Powerpack } from './Products';

const InputsContainer = styled.div`
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    justify-content: space-between;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Inputs = () => {

    return (
        <InputsContainer>
            <MegapackXL />
            <Megapack2 />
            <Megapack />
            <Powerpack />
        </InputsContainer>
    )
}