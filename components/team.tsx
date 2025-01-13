"use client";

import { addFouls, addPoints, Game, Team as TeamType } from "@/services/game";

const firstFoulPenaltyCount = 7;
const lastFoulPenaltyCount = 10;

export default function Team(props: {
  bgColor?: string;
  game: Game;
  team: TeamType;
}) {
  const { id: teamId, name, points, fouls } = props.team;

  const handleAddPoint = async (qty: number) => {
    addPoints({
      game: props.game,
      qty,
      teamId,
    });
  };
  const handleAddFoul = async (qty: number) => {
    addFouls({
      game: props.game,
      qty,
      teamId,
    });
  };

  return (
    <div className={`flex-1 flex flex-col items-center ${props.bgColor || ""}`}>
      <div>
        <h1 className="text-white text-2xl font-bold">{name}</h1>
        <h2 className="text-white text-1xl font-bold">Pontuação: {points}</h2>
        <div className="flex items-center">
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(1)}
          >
            +1
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(2)}
          >
            +2
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(-1)}
          >
            -1
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(-2)}
          >
            -2
          </button>
        </div>

        <h2 className="text-white text-1xl font-bold">Faltas: {fouls}</h2>
        <div className="flex items-center">
          <button
            className="rounded-md m-1 bg-red-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddFoul(1)}
          >
            +1
          </button>
          <button
            className="rounded-md m-1 bg-red-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddFoul(-1)}
          >
            -1
          </button>
        </div>
      </div>

      {fouls >= firstFoulPenaltyCount && fouls < lastFoulPenaltyCount && (
        <>
          <div
            className="text-xs bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 mb-3"
            role="alert"
          >
            <span className="block sm:inline">
              <b>Esse time já tem {firstFoulPenaltyCount} faltas!</b>
              <br />A partir dessa falta a penalização será de 2 lances livres.
              <br />
              Independentemente se acertar ou não, se o chute for de 1 ou de 2.
            </span>
          </div>
        </>
      )}

      {fouls >= lastFoulPenaltyCount && (
        <>
          <div
            className="text-xs bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 mb-3"
            role="alert"
          >
            <span className="block sm:inline">
              <b>Esse time já tem {lastFoulPenaltyCount} faltas!</b>
              <br />
              A partir dessa falta a penalidade será de 2 lances livres e posse
              de bola para o time que sofreu a falta.
              <br />
              Independentemente se acertar ou não, se o chute for de 1 ou de 2.
            </span>
          </div>
        </>
      )}
    </div>
  );
}
