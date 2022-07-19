import app from "./index";
import { Request, Response} from "express"



app.get("/teste", (req: Request, res: Response) => {
    res.send("blablabla")
})

