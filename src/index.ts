import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/index";

const PORT = process.env.PORT || 3001;

const app = express();

app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.use(cors());

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server on port ', PORT);
})