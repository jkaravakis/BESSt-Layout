import styled from 'styled-components';
import { Text } from '@tesla/design-system-react';
import { useFormState } from 'informed';

interface KeyMetricsProps {
    footprint: number;
    price: number;
    energyDensity: number;
}

const KeyMetricsBar = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
`;

const KeyMetric = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 5px;
    width: 200px;
    height: 100px;
    border: 2px solid #000000;
    border-radius: 4px;
`;

const MetricValue = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #000000;
`;

export const KeyMetrics = ({footprint, price, energyDensity}: KeyMetricsProps) => {
    const formState = useFormState();

    const megapack = typeof formState.values.megapack === 'number' ? formState.values.megapack : 0;
    const megapack2 = typeof formState.values.megapack2 === 'number' ? formState.values.megapack2 : 0;
    const megapackXL = typeof formState.values.megapackXL === 'number' ? formState.values.megapackXL : 0;
    const powerpack = typeof formState.values.powerpack ==='number' ? formState.values.powerpack : 0;
    const total = megapack + megapack2 + megapackXL + powerpack;

    const transformers = Math.floor(total/2) + (total % 2);

    return (
        <KeyMetricsBar>
            <KeyMetric>
                <MetricValue>${footprint}</MetricValue>
                <Text>Total Cost</Text>
            </KeyMetric>
            <KeyMetric>
                <MetricValue>{price} sq ft</MetricValue>
                <Text>Footprint</Text>
            </KeyMetric>
            <KeyMetric>
                <MetricValue>{energyDensity} MWh/sq ft</MetricValue>
                <Text>Energy Density</Text>
            </KeyMetric>
        </KeyMetricsBar>
    )
}