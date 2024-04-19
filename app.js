const axios = require("axios");
const express = require("express");
const app = express()

async function getReq(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
app.get("/", async (req, res) => {
    res.send({ message: "Hello world :)" })
})
app.post("/getreq", async (req, res) => {
    const jsonReturned = await getReq(req.body.url)
    res.send(jsonReturned);
})


app.listen(3000 || process.env.PORT, () => {
    console.log("Server is working!");
})