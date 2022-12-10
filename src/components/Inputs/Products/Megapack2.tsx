import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel, Icon } from '@tesla/design-system-react';
import { iconBatteryFilled } from '@tesla/design-system-icons';
import { products } from './products';
import { numberWithCommas } from '../../../functions';
import { CardContainer, CardContents, QuantityContainer, LabelContainer } from './styles';

export const Megapack2 = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <LabelContainer>
                            <Icon data={iconBatteryFilled} color='#FBB01B' />
                            <FormLabel>{products.megapack2.name}</FormLabel>
                        </LabelContainer>
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