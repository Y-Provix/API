const axios = require('axios');
const express = require("express")
const app = express()

async function getReq() {
    try {
        const response = await axios.get(url);
        return response
    } catch (error) {
        return error
    }
}


app.post("/getreq", (req, res) => {
    res.send(getReq(req.body.url));
})