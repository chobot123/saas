import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "./list_products";

const stripe = require('stripe')(process.env.NEXT_TEST_PRIVATE_KEY);  

//GET - Query : { pId }
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method != 'GET' || typeof req.query.pId != 'string') {
        return res.status(404).end();
    }

    console.log(req.query.pId);
    try {
        return res.json('test');
    }catch(err: any) {
        console.log(err);
        return res.status(402).json({
            message: err.message
        });
    }
}