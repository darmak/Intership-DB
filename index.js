import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import serverRoutes from './routes/servers.js';

const __dirname = path.resolve()

const _PORT = process.env.PORT ?? 5000;
const app = express();

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Dmitry:21081915omgQ@cluster0.j5mbw.mongodb.net/myFirstDatabase', {
            useNewUrlParser: true
        });
        app.listen(_PORT, () => {
            console.log("Server has been started on " + _PORT + " port");
        });
    } catch (e) {
        console.log(e);
    }
}


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
app.use(express.urlencoded({extended: true}));

app.use(serverRoutes);

app.get('/', (req, res) => {
    res.send('is working...!!!!');
});

start();