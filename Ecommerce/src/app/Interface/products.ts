export class Product {
    public name: string;
    public price: number;
    public description?: string;
    public productPath: string;

    constructor(name: string, price: number, productPath: string, description?: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.productPath = productPath;
    }
}