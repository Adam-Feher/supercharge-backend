import {injectable} from "inversify";

@injectable()
export class GameService {
    private pictures: string[] = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];

    public newGame(difficulty: number) {
        const usedCards = this.pictures.slice(0, difficulty);
        console.log(this.shuffle([...usedCards, ...usedCards]));
        return this.shuffle([...usedCards,...usedCards])
    }

    private shuffle(cards: string[]) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }
}