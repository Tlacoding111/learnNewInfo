class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const players = [new Player("player 1", 1, "#e15258", true),
                        new Player("player 2", 2, "#e59a13")];
        return players;
    }
}