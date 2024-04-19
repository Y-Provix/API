const axios = require('axios');
const express = require("express");
const { env } = require('process');
const app = express()

async function getReq() {
    try {
        const response = await axios.get(url);
        return response
    } catch (error) {
        return error
    }
}
app.get("/", (req, res) => {
    res.send({ message: "Hello world :)" })
})
app.post("/getreq", (req, res) => {
    res.send(getReq(req.body.url));
})


app.listen(3000 || process.env.PORT, () => {
    console.log("Server is working!");
})