import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "51OWwUzAqnfiPSR3BcjMrnTFa2jOQQcUuWFktRXa96MgC74hfRrZoqfu6hBkWYd8bxflicqdcx0hkaBdy25SKfDR700FZpDFh7S"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe ={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}