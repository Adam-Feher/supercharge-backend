import {inject, injectable} from "inversify";
import {ScoreRequest} from "../models/scoreRequest";
import {GameService} from "./game.service";

@injectable()
export class ScoreService {

    constructor(@inject('GameService') private gameService: GameService){}

    public ifValidScore(score: ScoreRequest) {
        return this.gameService.runningGames.find(game => game.token === score.token);
    }
}