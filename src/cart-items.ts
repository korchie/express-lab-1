interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [
    {
        id: 1,
        product: "Samsung Galaxy S21 Ultra",
        price: 1200,
        quantity: 1
    },
    {
        id: 2,
        product: "Asus Laptop",
        price: 2000,
        quantity: 1
    },
    {
        id: 3,
        product: "Playstation 5",
        price: 600,
        quantity: 1
    },
    {
        id: 4,
        product: "GoPro",
        price: 400,
        quantity: 1
    },
    {
        id: 5,
        product: "Gaming PC",
        price: 2500,
        quantity: 1
    },
]

export default cart;

export { CartItem };