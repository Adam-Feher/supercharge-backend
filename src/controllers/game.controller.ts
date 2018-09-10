import {controller, httpGet, interfaces, requestParam} from "inversify-express-utils";
import {inject} from "inversify";
import {GameService} from "../services/game.service";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private newGame(@requestParam('size') size: number) {
        return this.gameService.newGame(size)
    }
}