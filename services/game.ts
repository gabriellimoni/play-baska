import { edit as editOnFirebase } from "@/config/firebase";

export interface Game {
  id: string;
  name: string;
  teamOne: Team;
  teamTwo: Team;
}

export interface Team {
  id: string;
  name: string;
  points: number;
  fouls: number;
  bgColor?: string;
}

export const addPoints = async (data: {
  game: Game;
  teamId: string;
  qty: number;
}) => {
  const { game, teamId, qty } = data;
  const t1 = game.teamOne;
  const t2 = game.teamTwo;

  if (t1.id === teamId) {
    editOnFirebase("games", game.id, {
      ...game,
      teamOne: {
        ...t1,
        points: (t1.points += qty),
      },
    } as Game);
  } else {
    editOnFirebase("games", game.id, {
      ...game,
      teamTwo: {
        ...t2,
        points: (t2.points += qty),
      },
    } as Game);
  }
};

export const addFouls = async (data: {
  game: Game;
  teamId: string;
  qty: number;
}) => {
  const { game, teamId, qty } = data;
  const t1 = game.teamOne;
  const t2 = game.teamTwo;

  if (t1.id === data.teamId) {
    editOnFirebase("games", game.id, {
      ...game,
      teamOne: {
        ...t1,
        fouls: (t1.fouls += qty),
      },
    } as Game);
  } else {
    editOnFirebase("games", game.id, {
      ...game,
      teamTwo: {
        ...t2,
        fouls: (t2.fouls += qty),
      },
    } as Game);
  }
};

export const createGame = async (data: {
  name: string;
  t1Name: string;
  t2Name: string;
}): Promise<string> => {
  const { name, t1Name, t2Name } = data;
  const gameId = name.toLowerCase().replaceAll(" ", "-");

  await editOnFirebase("games", gameId, {
    name,
    teamOne: {
      fouls: 0,
      id: t1Name.toLowerCase().replaceAll(" ", "-"),
      name: t1Name,
      points: 0,
    },
    teamTwo: {
      fouls: 0,
      id: t2Name.toLowerCase().replaceAll(" ", "-"),
      name: t2Name,
      points: 0,
    },
  } as Game);

  return gameId;
};
