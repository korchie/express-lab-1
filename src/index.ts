import express from "express";
import route from "./routes/routing";


const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})

app.use(express.json()); // this line MUST come before the next!
app.use(route);