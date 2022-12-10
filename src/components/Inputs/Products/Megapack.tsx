import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel, Icon } from '@tesla/design-system-react';
import { iconBatteryFilled } from '@tesla/design-system-icons';
import { products } from './products';
import { numberWithCommas } from '../../../functions';
import { CardContainer, CardContents, QuantityContainer, LabelContainer } from './styles';

export const Megapack = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <LabelContainer>
                            <Icon data={iconBatteryFilled} color='#3E6AE1' />
                            <FormLabel>{products.megapack.name}</FormLabel>
                        </LabelContainer>
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