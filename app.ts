import express, { Application, Request, Response, Router } from "express";
import cors, {CorsOptions} from "cors";
import helmet from "helmet";
import postcodes from "./src/routes/postcode.route";

const app: Application = express();

/** 
 * options for cors midddleware
 * Documentation: https://expressjs.com/en/resources/middleware/cors.html
 */
const options: CorsOptions = {
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
};

var router: Router = express.Router();

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

app.set("port", process.env.PORT || 3000);
app.options("*", cors(options)); //enable pre-flight
app.use(postcodes);

// This root is needed if you want to run this in the cloud
router.get("/", (async (req: Request, res: Response) => { res.send('root'); }));

try {
    app.listen(app.get("port"), () => {
        console.log("the server is running on port",
            app.get("port")
        );
    });

} catch (error) {
    console.log(error);
}
