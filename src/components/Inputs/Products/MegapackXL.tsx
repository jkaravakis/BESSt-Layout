import styled from 'styled-components';
import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel } from '@tesla/design-system-react';
import { products, numberWithCommas } from './products';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

const CardContents = styled.div`
    display: flex;
    flex-direction: row;
`;

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

export const MegapackXL = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <FormLabel>{products.megapackXL.name}</FormLabel>
                        <List is="ol" variant="unordered">
                            <ListItem>Size: {products.megapackXL.size[0]} ft x {products.megapackXL.size[1]} ft</ListItem>
                            <ListItem>Capacity: {products.megapackXL.energy} MWh</ListItem>
                            <ListItem>Cost: ${numberWithCommas(products.megapackXL.cost)}</ListItem>
                        </List>
                    </div>
                    <QuantityContainer>
                            <Input name="megapackXL" label="Quantity" validateOn='change' validateOnMount defaultValue={0} trailing="units" type='number' />
                    </QuantityContainer>
                </CardContents>
            </Card>
        </CardContainer>


    )
}