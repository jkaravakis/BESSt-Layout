import styled from 'styled-components';
import { useFormState } from 'informed';
import { calculateLayout } from '../../functions';

const RowContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100px;
    //gap: 10px;
`

const SiteLayoutContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
`;

const MegapackLayout = styled.div`
    display: flex;
    flex: 3;
    background-color: #3E6AE1;
    border-color: black;
    border: 10px;
`

const Megapack2Layout = styled.div`
    display: flex;
    flex: 3;
    background-color: #FBB01B;
    border-color: black;
    border-width: 10px;
`

const MegapackXLLayout = styled.div`
    display: flex;
    flex: 4;
    background-color: #B74134;
    border-color: black;
    border-width: 10px;
`

const PowerpackLayout = styled.div`
    display: flex;
    flex: 1;
    background-color: #12BB00;
    border-color: black;
    border-width: 10px;
`

const TransformerLayout = styled.div`
    display: flex;
    flex: 1;
    background-color: purple;
    border-color: black;
    border-width: 10px;
`

const EmptySpace = styled.div`
    display: flex;
    flex: 1;
    background-color: grey;
    border-color: black;
    border-width: 10px;
`

export const Layout = () => {
    const formState = useFormState();

    const megapack = typeof formState.values.megapack === 'number' ? formState.values.megapack : 0;
    const megapack2 = typeof formState.values.megapack2 === 'number' ? formState.values.megapack2 : 0;
    const megapackXL = typeof formState.values.megapackXL === 'number' ? formState.values.megapackXL : 0;
    const powerpack = typeof formState.values.powerpack ==='number' ? formState.values.powerpack : 0;
    const total = megapack + megapack2 + megapackXL + powerpack;
    const transformer = Math.floor(total/2) + (total % 2);
    const layout = calculateLayout({megapackXL, megapack2, megapack, powerpack, transformer});

    return (
        <SiteLayoutContainer>
            {
                layout.map((row, i) => {
                    return (
                        <div key={i}>
                            <RowContainer>
                                {row.map((cell, i) => {
                                    if (cell === 1) {
                                        return <MegapackXLLayout key={i}/> 
                                    } else if (cell === 2) {
                                        return <Megapack2Layout key={i} />
                                    } else if (cell === 3) {
                                        return <MegapackLayout key={i} />
                                    } else if (cell === 4) {
                                        return <PowerpackLayout key={i} />
                                    } else if (cell === 5) {
                                        return <TransformerLayout key={i} />
                                    }
                                })}
                            </RowContainer>
                        </div>
                    )
                })
            }
        </SiteLayoutContainer>
    )
}