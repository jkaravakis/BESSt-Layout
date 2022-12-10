import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel, Icon } from '@tesla/design-system-react';
import { iconBatteryFilled } from '@tesla/design-system-icons';
import { products } from './products';
import { numberWithCommas } from '../../../functions';
import { CardContainer, CardContents, QuantityContainer, LabelContainer } from './styles';

export const Powerpack = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <LabelContainer>
                            <Icon data={iconBatteryFilled} color='#12BB00' />
                            <FormLabel>{products.powerpack.name}</FormLabel>
                        </LabelContainer>
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