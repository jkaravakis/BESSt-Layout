import styled from 'styled-components';
import { Form } from '@tesla/informed-tds';
import { MegapackXL, Megapack2, Megapack, Powerpack } from './Products';

const InputsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
`;

const InputContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

export const Inputs = () => {

    return (
        <InputsContainer>
            <InputContainer>
                <Form>
                    <MegapackXL />
                    <Megapack2 />
                    <Megapack />
                    <Powerpack />
                </Form>
            </InputContainer>
        </InputsContainer>
    )
}