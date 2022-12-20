import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body

    if(req.method !== 'POST') {
        return res.status(405).json({ eror: 'Method not allowed.' })
    }

    if(!priceId) {
        return res.status(400).json({ eror: 'Price not found.' })
    }

    const successUrl = `https://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `https://localhost:3000/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ]
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}