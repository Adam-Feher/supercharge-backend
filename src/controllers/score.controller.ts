import { Response } from 'express';
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
    private async getHighScores() {
        const allScores = await Score.find();
        return allScores.sort((score1, score2) => score1.steps - score2.steps);
    }

    @httpPost('/')
    private postScore(@requestBody() req: ScoreRequest, res: ScoreResponse, @response() status: Response) {
        if (this.scoreService.ifValidScore(req) !== undefined) {
            const score = new Score({steps: req.steps, seconds: req.seconds, name: req.name});
            score.save();
            return status.status(200).send();
        }
        return status.status(400).send(new Error("Invalid game token").message);
    }
}