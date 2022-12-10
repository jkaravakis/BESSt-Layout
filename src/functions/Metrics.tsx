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

export const minRemainingSize = (megapackXL: number, megapack2: number, megapack: number, powerpack: number, transformer: number) => {
    const remainingSizes = []

    if (megapackXL > 0) {
        remainingSizes.push(4)
    }

    if (megapack2 > 0) {
        remainingSizes.push(3)
    }

    if (megapack > 0) {
        remainingSizes.push(3)
    }

    if (powerpack > 0) {
        remainingSizes.push(1)
    }

    if (transformer > 0) {
        remainingSizes.push(1)
    }

    if (remainingSizes.length === 0) {
        return 0
    } else {
        return Math.min(...remainingSizes)
    }
}

export const calculateLayout = ({megapackXL, megapack2, megapack, powerpack, transformer}: ProductProps) => {
    let totalUnits = megapackXL + megapack2 + megapack + powerpack + transformer;
    let currentRow = [];
    let layout = [];

    while (totalUnits > 0) {
        if ((10 - currentRow.length) >= minRemainingSize(megapackXL, megapack2, megapack, powerpack, transformer)) {
            if (megapackXL > 0 && currentRow.length + 4 <= 10) {
                currentRow.push(...[1, 1, 1, 1])
                megapackXL -= 1
                totalUnits -= 1
            }
            else if (megapack2 > 0 && currentRow.length + 3 <= 10) {
                currentRow.push(...[2, 2, 2])
                megapack2 -= 1
                totalUnits -= 1
            }
            else if (megapack > 0 && currentRow.length + 3 <= 10) {
                currentRow.push(...[3, 3, 3])
                megapack -= 1
                totalUnits -= 1
            }
            else if (powerpack > 0 && currentRow.length + 1 <= 10) {
                currentRow.push(...[4])
                powerpack -= 1
                totalUnits -= 1
            }
            else if (transformer > 0 && currentRow.length + 1 <= 10) {
                currentRow.push(...[5])
                transformer -= 1
                totalUnits -= 1
            }
        } 
        else {
            while (currentRow.length < 10) {
                currentRow.push(...[6]);
            }
            layout.push(currentRow)
            currentRow = []
        }
    }
    
    while (currentRow.length < 10) {
        currentRow.push(...[6]);
    }
    
    layout.push(currentRow)

    return layout;
}

export const calculateFootprint = ({megapackXL, megapack2, megapack, powerpack, transformer}: ProductProps) => {
    const megapackXLSize = megapackXL * products.megapackXL.size[0] * products.megapackXL.size[1];
    const megapack2Size = megapack2 * products.megapack2.size[0] * products.megapack2.size[1];
    const megapackSize = megapack * products.megapack.size[0] * products.megapack.size[1];
    const powerpackSize = powerpack * products.powerpack.size[0] * products.powerpack.size[1];
    const transformerSize = transformer * products.transformer.size[0] * products.transformer.size[1];

    const totalSize = megapackXLSize + megapack2Size + megapackSize + powerpackSize + transformerSize;

    return totalSize
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