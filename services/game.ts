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

const memoryGames: Game[] = [
  {
    id: "1",
    name: "Any game name",
    teamOne: {
      id: "t1",
      fouls: 1,
      name: "DC Baska",
      points: 10,
    },
    teamTwo: {
      id: "t2",
      fouls: 2,
      name: "DC Baska 2",
      points: 12,
    },
  },
];

export const getGame = async (id: string): Promise<Game> => {
  return memoryGames[0];
};

export const addPoints = async (data: {
  gameId: string;
  teamId: string;
  qty: number;
}) => {
  const t1 = memoryGames[0].teamOne;
  const t2 = memoryGames[0].teamTwo;

  if (t1.id === data.teamId) {
    t1.points += data.qty;
  } else {
    t2.points += data.qty;
  }

  console.log(memoryGames[0].teamOne);
  console.log(memoryGames[0].teamTwo);
};

export const addFouls = async (data: {
  gameId: string;
  teamId: string;
  qty: number;
}) => {
  const t1 = memoryGames[0].teamOne;
  const t2 = memoryGames[0].teamTwo;

  if (t1.id === data.teamId) {
    t1.fouls += data.qty;
  } else {
    t2.fouls += data.qty;
  }

  console.log(memoryGames[0].teamOne);
  console.log(memoryGames[0].teamTwo);
};
