import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 3000;

const handleListening = () => {
  console.log(`listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("hello from bang bag");
};

const handleProfile = (req, res) => {
  res.send("you are on my very profilfe, PF123 bnag");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
// // respond with "hello world" when a GET request is made to the homepage
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
