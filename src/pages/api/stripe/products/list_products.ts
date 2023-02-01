import { Console } from "console";
import { Hash } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

export type Product = {
    id: string,
    object: string, 
    active: boolean, 
    created: number,
    default_price: string,
    description: string, 
    images: string[],
    livemode: boolean, 
    metadata: any,
    name: string,
    package_dimensions: Hash,
    shippable: boolean,
    statement_descriptor: string, 
    tax_code: string,
    unit_label: string,
    updated: Date,
    url: string,
    price: any
} 

type productList = {
    object: string, 
    url: string, 
    has_more: boolean,
    data: Product[]
}

const stripe = require('stripe')(process.env.NEXT_TEST_PRIVATE_KEY);  

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if(req.method != "GET") {
        return res.status(404).end();
    }

    try {
        const productsData: productList = await stripe.products.list();

        const products = productsData.data;

        const getPriceForProducts = async () => {
            
            for(let i = 0; i < products.length; i++) {

                let product = products[i];
                const price = await stripe.prices.retrieve(
                    product.default_price
                );
                product.price = price;
            }
        }

        await getPriceForProducts();

        return res.json(productsData);
    }catch (err: any){
        console.log(err);
        return res.status(402).json({
            message: err.message
        });
    }
}