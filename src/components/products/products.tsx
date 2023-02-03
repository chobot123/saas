
import { Product } from "@/pages/api/stripe/products/list_products";
import { Hash } from "crypto";
import { useEffect, useState } from "react";
import Image from 'next/image';

interface productsProps {
    products: Product[],
}

export default function Products(props: productsProps): JSX.Element {

    return (
        <div className="Products">
            <ul className="wrapper">
                {
                    props.products.map((product, index) => {
                        return (
                            <li className="product" key={index}>
                                <div className="image">
                                    <Image 
                                        src={product.images[0]} 
                                        alt="product_image" 
                                        width={32}
                                        height={32}
                                    />
                                </div>
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
            </ul>
        </div>
    )
}