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

export const Megapack2 = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <FormLabel>{products.megapack2.name}</FormLabel>
                        <List is="ol" variant="unordered">
                            <ListItem>Size: {products.megapack2.size[0]} ft x {products.megapack2.size[1]} ft</ListItem>
                            <ListItem>Capacity: {products.megapack2.energy} MWh</ListItem>
                            <ListItem>Cost: ${numberWithCommas(products.megapack2.cost)}</ListItem>
                        </List>
                    </div>
                    <QuantityContainer>
                            <Input name="megapack2" label="Quantity" validateOn='change' validateOnMount  defaultValue={0} trailing="units" type='number' />
                    </QuantityContainer>
                </CardContents>
            </Card>
        </CardContainer>
    )
}