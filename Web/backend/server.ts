import * as express from "express"
import * as bodyParser from "body-parser"
import * as path from "path";
import * as pino from "express-pino-logger"

import { RootController } from "./controllers/root.controller";

const cors = require("cors");

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.configure();
        this.configureRoutes();
    }

    configure() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        this.app.use(express.static(path.join(__dirname, './public')));
        this.app.use(cors());
        this.app.use(pino());
    }

    configureRoutes() {
        const rootController = new RootController();

        this.app.use(rootController.router);
    }
}

const server = Server.bootstrap();

const port = process.env.PORT || 3000;

server.app.listen(port, () => {
    console.log("Server is listening on port 3000.")
});

