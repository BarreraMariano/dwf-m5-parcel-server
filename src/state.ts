type Move = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Move;
  myPlay: Move;
};

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [],
  },
  setMove(move: Move) {
    const currentState = this.getState();
    currentState.currentGame.myPlay;
  },
  pushHistory(play: Game) {
    const currentState = this.getState();
    currentState.history({});
  },
  whoWins(myPlay: Move, computerPlay: Move) {
    const ganeConTijera: boolean =
      myPlay === "tijera" && computerPlay === "papel";
    const ganeConPiedra: boolean =
      myPlay === "piedra" && computerPlay === "tijera";
    const ganeConPapel: boolean =
      myPlay === "papel" && computerPlay === "piedra";
  },
};

// state.setMove("piedra");
state.pushHistory({ computerPlay: "papel", myPlay: "piedra" });
