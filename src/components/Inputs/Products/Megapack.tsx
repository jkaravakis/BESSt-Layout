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

export const Megapack = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <FormLabel>{products.megapack.name}</FormLabel>
                        <List is="ol" variant="unordered">
                            <ListItem>Size: {products.megapack.size[0]} ft x {products.megapack.size[1]} ft</ListItem>
                            <ListItem>Capacity: {products.megapack.energy} MWh</ListItem>
                            <ListItem>Cost: ${numberWithCommas(products.megapack.cost)}</ListItem>
                        </List>
                    </div>
                    <QuantityContainer>
                            <Input name="megapack" label="Quantity" validateOn='change' validateOnMount  defaultValue={0} trailing="units" type='number' />
                    </QuantityContainer>
                </CardContents>
            </Card>
        </CardContainer>
    )
}