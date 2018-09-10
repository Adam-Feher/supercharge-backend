import {Request, Response } from 'express';
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces} from "inversify-express-utils";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor() { }

    @httpGet('/:size')
    private get(req: Request, res: Response) {

    }
}