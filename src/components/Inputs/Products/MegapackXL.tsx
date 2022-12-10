import { Input } from '@tesla/informed-tds';
import { Card, List, ListItem, FormLabel, Icon } from '@tesla/design-system-react';
import { iconBatteryFilled } from '@tesla/design-system-icons';
import { products } from './products';
import { numberWithCommas } from '../../../functions';
import { CardContainer, CardContents, QuantityContainer, LabelContainer} from './styles';

export const MegapackXL = () => {
    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <LabelContainer>
                            <Icon data={iconBatteryFilled} color='#B74134' />
                            <FormLabel>{products.megapackXL.name}</FormLabel>
                        </LabelContainer>
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