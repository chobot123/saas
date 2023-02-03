import Router, { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect, useState } from "react";
import { Product } from "../api/stripe/products/list_products";
import Image_Carousel from "@/components/product-component/image_carousel/image_carousel";

const stripe = require('stripe')(process.env.NEXT_TEST_PRIVATE_KEY);  

export const getServerSideProps: GetServerSideProps<{ data: Product }> = async (context) => {
    const pId = context.query.pId;

    const data: Product = await stripe.products.retrieve(pId);

    return {
        props: {
            data
        }
    }

    // try {

    //     if(typeof pId !== "string") {

    //         const data = {};
    //         return {
    //             props: {
    //                 data
    //             }
    //         }
    //     } 

    //     const data: Product = await stripe.products.retrieve(pId);

    //     return {
    //         props: {
    //             data
    //         }
    //     }
    // }catch {

    //     const data = {};
    //     return {
    //         props: {
    //             data
    //         }
    //     }
    // }
};

export default function P(
    {data} : InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {

    const [quantity, setQuantity] = useState(1);

    function incrementQuant(): void {
        if(quantity == 99) {
            return;
        }

        setQuantity(quantity + 1);
    }

    function decrementQuant(): void {
        if(quantity == 0) {
            return;
        }

        setQuantity(quantity - 1);
    }

    console.log(data);

    return (
        <div className="product">
            <Image_Carousel></Image_Carousel>

            <div className="product-info container flex flex-col">
                <div className="name text-3xl">{data.name}</div>
                <div className="price">$250.00</div>
                <div className="size"></div>
                <div className="quantity inline-flex self-start border border-black rounded-sm my-3">
                    <button className="dec aspect-square px-5 py-3" onClick={() => decrementQuant()}>-</button>
                    <input className="count px-3 py-3 text-center" 
                        type="number"
                        name='manual-quant-input'
                        min={0}
                        max={99}
                        value={quantity}
                        id="manual-quant-input"
                    />
                    <button className="inc px-5 py-3" onClick={() => incrementQuant()}>+</button>
                </div>
                <button className="add-to-cart border border-black py-3 my-3">Add to Cart</button>
                <div className="description">{data.description}</div>
            </div>
        </div>
    )
}