const express = require('express');
const app = express();


app.get("/vapi", (req, res) => {
    res.json({
        success: 1,
        message: "API is working"
    })
});

app.listen(3000, () => {
    console.log("Server is up and ruunning")
});

