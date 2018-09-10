import {controller, httpGet, interfaces, requestParam, response} from "inversify-express-utils";
import {inject} from "inversify";
import {GameService} from "../services/game.service";
import {Response} from "express";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private newGame(@requestParam('size') size: number, @response() resp: Response) {
        if (size < 2 || size > 10) {
            return resp.status(400).send(Error("Invalid difficulty. Valid difficulties are between 2-10").message);
        }
        return this.gameService.newGame(size);
    }
}