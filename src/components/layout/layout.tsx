import { ReactNode } from "react";
import Header from "../header/header";
import { useState } from 'react';
import { Product } from "@/pages/api/stripe/products/list_products";

interface Props {
    children?: ReactNode
}

type lineItem = {
    product: Product,
    quantity: number
}

export default function Layout({children}: Props) {

    const [cart, setCart] = useState<lineItem[]>([]);

    return (
        <div className="layout">
            <Header></Header>
            <main>
                {children}
            </main>
        </div>
    )
}