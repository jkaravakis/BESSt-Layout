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