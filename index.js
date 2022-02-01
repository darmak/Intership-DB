import express from "express";
import cors from 'cors';
import path from 'path';
import serverRoutes from './routes/servers.js';

const __dirname = path.resolve()

const _PORT = process.env.PORT ?? 5000;
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        preflightContinue: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.use(express.static(path.resolve(__dirname, "static")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(serverRoutes);

app.get('/', (req, res) => {
    res.send('is working...!!!!');
});

app.listen(_PORT, () => {
    console.log("Server has been started on " + _PORT + " port");
});