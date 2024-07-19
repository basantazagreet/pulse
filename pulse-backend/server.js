import express from 'express';
import mongoose from 'mongoose';
import Videos from './Model.js';
import Cors from 'cors';


//app config
const app = express();
const PORT = process.env.PORT || 9000;
const CONNECTION_URL = "mongodb://localhost:27017/pulse";

//middlewares
app.use(Cors());
app.use(express.json());


//DB config
mongoose.connect(CONNECTION_URL)
    .then(() => {
        console.log("Database connected");
    }).catch(err => {
        console.log("Database error: ", err);
    })

//api endpoints

app.get("/", (req, res) => {
    res.status(200).send("Tik tok MERN live clone");
});


app.get("/v2/posts", async (req, res) => {

    try {
        const videos = await Videos.find();
        res.status(200).send(videos);
    } catch (err) {
        res.status(500).send(err);
    }


});

app.post("/v2/posts", async (req, res) => {

    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.listen(PORT, () => {
    console.log(`Listening to Localhost : ${PORT}`);
})