import {Request, Response } from 'express';
import {controller, httpDelete, httpGet, httpPost, httpPut, interfaces} from "inversify-express-utils";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor() { }

    @httpGet('/')
    private get(req: Request, res: Response) {
        
    }

    @httpPost('/')
    private post(req: Request, res: Response) {

    }
}