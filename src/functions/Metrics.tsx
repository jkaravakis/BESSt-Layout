import { products } from "../components/Inputs/Products/products";

interface ProductProps {
    megapackXL: number;
    megapack2: number;
    megapack: number;
    powerpack: number;
    transformer: number;
}

export const calculateCost = ({megapackXL, megapack2, megapack, powerpack, transformer}: ProductProps) => {
    const megapackXLCost = megapackXL * products.megapackXL.cost;
    const megapack2Cost = megapack2 * products.megapack2.cost;
    const megapackCost = megapack * products.megapack.cost;
    const powerpackCost = powerpack * products.powerpack.cost;
    const transformerCost = transformer * products.transformer.cost;

    const totalCost = megapackXLCost + megapack2Cost + megapackCost + powerpackCost + transformerCost;

    return totalCost;
}

export const calculateFootprint = ({megapackXL, megapack2, megapack, powerpack, transformer}: ProductProps) => {
    const megapackXLSize = megapackXL * products.megapackXL.size[0] * products.megapackXL.size[1];
    const megapack2Size = megapack2 * products.megapack2.size[0] * products.megapack2.size[1];
    const megapackSize = megapack * products.megapack.size[0] * products.megapack.size[1];
    const powerpackSize = powerpack * products.powerpack.size[0] * products.powerpack.size[1];
    const transformerSize = transformer * products.transformer.size[0] * products.transformer.size[1];

    const totalSize = megapackXLSize + megapack2Size + megapackSize + powerpackSize + transformerSize;

    return totalSize;
}

export const calculateEnergy = ({megapackXL, megapack2, megapack, powerpack, transformer}: ProductProps) => {
    const megapackXLEnergy = megapackXL * products.megapackXL.energy;
    const megapack2Energy = megapack2 * products.megapack2.energy;
    const megapackEnergy = megapack * products.megapack.energy;
    const powerpackEnergy = powerpack * products.powerpack.energy;
    const transformerEnergy = transformer * products.transformer.energy;

    const totalEnergy = megapackXLEnergy + megapack2Energy + megapackEnergy + powerpackEnergy + transformerEnergy;

    return totalEnergy;
}