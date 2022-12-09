export const products = {
    megapackXL: {
        name: 'Megapack XL',
        size: [40, 10],
        cost: 120000,
        energy: 4
    },
    megapack2: {
        name: 'Megapack 2',
        size: [30, 10],
        cost: 80000,
        energy: 3
    },
    megapack: {
        name: 'Megapack',
        size: [30, 10],
        cost: 50000,
        energy: 2
    },
    powerpack: {
        name: 'Powerpack',
        size: [10, 10],
        cost: 10000,
        energy: 1
    },
    transformer: {
        name: 'Transformer',
        size: [10, 10],
        cost: 10000,
        energy: -.5
    },
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}