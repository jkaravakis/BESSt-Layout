import { Card, List, ListItem, Text, FormLabel, Icon } from '@tesla/design-system-react';
import { iconBatteryFilled } from '@tesla/design-system-icons';
import { useFormState } from 'informed';
import { products } from './products';
import { numberWithCommas } from '../../../functions';
import { CardContainer, CardContents, QuantityContainer, LabelContainer } from './styles';

export const Transformer = () => {
    const formState = useFormState();

    const megapack = typeof formState.values.megapack === 'number' ? formState.values.megapack : 0;
    const megapack2 = typeof formState.values.megapack2 === 'number' ? formState.values.megapack2 : 0;
    const megapackXL = typeof formState.values.megapackXL === 'number' ? formState.values.megapackXL : 0;
    const powerpack = typeof formState.values.powerpack ==='number' ? formState.values.powerpack : 0;

    const total = megapack + megapack2 + megapackXL + powerpack;

    const transformer = Math.floor(total/2) + (total % 2);

    return (
        <CardContainer>
            <Card>
                <CardContents>
                    <div>
                        <LabelContainer>
                            <Icon data={iconBatteryFilled} color='purple' />
                            <FormLabel>{products.transformer.name}</FormLabel>
                        </LabelContainer>
                        <List is="ol" variant="unordered">
                            <ListItem>Size: {products.transformer.size[0]} ft x {products.transformer.size[1]} ft</ListItem>
                            <ListItem>Capacity: {products.transformer.energy} MWh</ListItem>
                            <ListItem>Cost: ${numberWithCommas(products.powerpack.cost)}</ListItem>
                        </List>
                    </div>
                    <QuantityContainer>
                        <FormLabel>Quantity</FormLabel>
                        <Text>{transformer}</Text>
                    </QuantityContainer>
                </CardContents>
            </Card>
        </CardContainer>


    )
}