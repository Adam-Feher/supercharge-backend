import {Request, Response } from 'express';
import {controller, httpGet, httpPost, interfaces, requestBody, response} from "inversify-express-utils";
import {ScoreRequest} from "../models/scoreRequest";
import {ScoreResponse} from "../models/scoreResponse";
import {Score} from "../models/score";
import {inject} from "inversify";
import {ScoreService} from "../services/score.service";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpGet('/')
    private async get(req: Request, res: Response) {
        return await Score.find();//.sort((obj1: any, obj2: any) => obj1.steps-obj2.steps);
    }

    @httpPost('/')
    private post(@requestBody() req: ScoreRequest, res: ScoreResponse, @response() status: Response) {
        if (this.scoreService.ifValidScore(req) !== undefined) {
            const score = new Score({steps: req.steps, seconds: req.seconds, name: req.name});
            score.save();
            return status.status(200).send();
        }
        return status.status(400).send(new Error("Invalid game token").message);
    }
}