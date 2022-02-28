export interface INutritionalValue {
    id: number,
    name: string,
    value: string
}

export interface ProductInterface {
    id: number,
    name: string,
    image: string,
    description: string,
    weight: number,
    price: number,
    nutritionalValue: INutritionalValue[]
}
