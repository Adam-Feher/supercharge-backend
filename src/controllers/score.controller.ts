import {Request, Response } from 'express';
import {controller, httpGet, httpPost, interfaces, requestBody} from "inversify-express-utils";
import {ScoreRequest} from "../models/scoreRequest";
import {ScoreResponse} from "../models/scoreResponse";
import {Score, ScoreModel} from "../models/score";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor() { }

    @httpGet('/')
    private async get(req: Request, res: Response) {
        return await Score.find();//.sort((obj1: any, obj2: any) => obj1.steps-obj2.steps);
    }

    @httpPost('/')
    private post(@requestBody() req: ScoreRequest, res: ScoreResponse) {
        const score = new Score ({steps: req.steps, seconds: req.seconds, name: req.name});
        score.save();
        return {position: 4}
    }
}