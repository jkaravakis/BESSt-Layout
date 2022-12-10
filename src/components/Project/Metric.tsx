import styled from 'styled-components';
import { Text } from '@tesla/design-system-react';
import { useFormState } from 'informed';
import { calculateCost, calculateEnergy, calculateFootprint, numberWithCommas, calculateLayout } from '../../functions';

const KeyMetricsBar = styled.div`
    display: flex;
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

export const KeyMetrics = () => {
    const formState = useFormState();

    const megapack = typeof formState.values.megapack === 'number' ? formState.values.megapack : 0;
    const megapack2 = typeof formState.values.megapack2 === 'number' ? formState.values.megapack2 : 0;
    const megapackXL = typeof formState.values.megapackXL === 'number' ? formState.values.megapackXL : 0;
    const powerpack = typeof formState.values.powerpack ==='number' ? formState.values.powerpack : 0;

    const total = megapack + megapack2 + megapackXL + powerpack;

    const transformer = Math.floor(total/2) + (total % 2);

    const totalCost = calculateCost({megapackXL, megapack2, megapack, powerpack, transformer});
    //Unneeded calculation, footprint of the energy storage and transformers.
    const totalFootprint = calculateFootprint({megapackXL, megapack2, megapack, powerpack, transformer});
    const totalEnergy = calculateEnergy({megapackXL, megapack2, megapack, powerpack, transformer});
    const layout = calculateLayout({megapackXL, megapack2, megapack, powerpack, transformer});
    const requiredLand = layout.length * 1000;
    const energyDensity = totalEnergy/requiredLand ? Math.round(totalEnergy/requiredLand * 10000)/10 : 0
    //Energy density for the batteries only.
    //const energyDensity = totalEnergy/totalFootprint ? Math.round(totalEnergy/totalFootprint * 10000)/10 : 0

    return (
        <KeyMetricsBar>
            <KeyMetric>
                <MetricValue>${numberWithCommas(totalCost)}</MetricValue>
                <Text>Total Cost</Text>
            </KeyMetric>
            <KeyMetric>
                <MetricValue>{numberWithCommas(requiredLand)} sq ft</MetricValue>
                <Text>Required Land</Text>
            </KeyMetric>
            <KeyMetric>
                <MetricValue>{energyDensity} kWh/sq ft</MetricValue>
                <Text>Energy Density</Text>
            </KeyMetric>
        </KeyMetricsBar>
    )
}