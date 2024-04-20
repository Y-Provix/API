const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());

async function getRequest(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function postRequest(url, body) {
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

app.get("/", async (req, res) => {
    res.send({ message: "Hello world :)" });
});

app.post("/get-request", async (req, res) => {
    try {
        const jsonReturned = await getRequest(req.body.url);
        res.send(jsonReturned);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/post-request", async (req, res) => {
    try {
        const jsonReturned = await postRequest(req.body.url, req.body.body);
        res.send(jsonReturned);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});