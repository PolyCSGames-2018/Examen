import * as express from "express"

export class RootController {
    public router: express.Router;

    constructor() {
        this.router = express.Router();

        this.router.get("/", this.root);
    }

    root(req: express.Request, res: express.Response) {
        res.json({name: "Poulet-Avion", message: "🐔-✈"});
    }
}
