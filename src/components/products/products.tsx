
import { Product } from "@/pages/api/stripe/products/list_products";
import { Hash } from "crypto";
import { useEffect, useState } from "react"

interface productsProps {
    products: Product[],
}

export default function Products(props: productsProps): JSX.Element {

    return (
        <div className="Products">
            {
                props.products.map((product, index) => {
                    return (
                        <li className="product" key={index}>
                            <div className="name">{product.name}</div>
                            <div className="price">
                                {
                                    new Intl.NumberFormat('en-US', 
                                    {
                                        style: 'currency',
                                        currency: product.price.currency
                                    }
                                    ).format(product.price.unit_amount)
                                }
                            </div>
                        </li>
                    )
                })
            }
        </div>
    )
}