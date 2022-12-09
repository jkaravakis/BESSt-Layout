import styled from 'styled-components';
import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel } from '@tesla/design-system-react';
import { products } from './products';
import { numberWithCommas } from '../../../functions';


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

export const Powerpack = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <FormLabel>{products.powerpack.name}</FormLabel>
                        <List is="ol" variant="unordered">
                            <ListItem>Size: {products.powerpack.size[0]} ft x {products.powerpack.size[1]} ft</ListItem>
                            <ListItem>Capacity: {products.powerpack.energy} MWh</ListItem>
                            <ListItem>Cost: ${numberWithCommas(products.powerpack.cost)}</ListItem>
                        </List>
                    </div>
                    <QuantityContainer>
                            <Input name="powerpack" label="Quantity" validateOn='change' validateOnMount defaultValue={0} trailing="units" type='number' />
                    </QuantityContainer>
                </CardContents>
            </Card>
        </CardContainer>


    )
}