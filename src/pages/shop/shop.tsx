import Products from "@/components/products/products";
import { Hash } from "crypto";
import { useEffect, useState } from "react";
import { Product } from "../api/stripe/products/list_products";

type productsData = {
    data: Product[],
    has_more: boolean,
    object: string,
    url: string
}

export default function Shop() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const getProducts = async () => {
            const response = await fetch('/api/stripe/products/list_products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });

            const responseData: productsData = await response.json();

            console.log(responseData);

            const products = responseData.data;

            setProducts([...products]);
        };

        getProducts().catch(console.error);

    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <div className="shop">
            <Products products={products}></Products>
        </div>
    )
}