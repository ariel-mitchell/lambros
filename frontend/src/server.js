const stripe = require('stripe')('sk_test_51OWwUzAqnfiPSR3Bkstm1Qz4waN05GJ5g0dGjbgtmWK7lPsCgK0JQP4fw6bPfuGkkrleZ9DdnmhdjRuNWnPyrpjL00lLJ8Zqoy');

const paymentIntent = await stripe.paymentIntents.create({
    amount: 30000,
    currency: 'usd',
    description: 'Lambros Premium Rentals',
    automatic_payment_methods: {
        enabled: true,
    },
});

const express = require('express');
const app = express();

app.get('sercret', async (req, res) => {
    const intent = paymentIntent
    res.json({client_secret: intent.client_sercret});
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});

(async () => {
    const response = await fetch('/secret');
    const {client_secret: clientSecret} = await response.json();
})();

