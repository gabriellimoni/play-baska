"use client";

import { addFouls, addPoints, Team as TeamType } from "@/services/game";

export default function Team(props: {
  bgColor?: string;
  gameId: string;
  team: TeamType;
}) {
  const { id: teamId, name, points, fouls } = props.team;

  const handleAddPoint = async (qty: number) => {
    addPoints({
      gameId: props.gameId,
      qty,
      teamId,
    });
  };
  const handleAddFoul = async (qty: number) => {
    addFouls({
      gameId: props.gameId,
      qty,
      teamId,
    });
  };

  return (
    <div
      className={`flex-1 flex items-center justify-center ${
        props.bgColor || ""
      }`}
    >
      <div>
        <h1 className="text-white text-2xl font-bold">{name}</h1>
        <h2 className="text-white text-1xl font-bold">Pontuação: {points}</h2>
        <div className="flex items-center">
          <button
            className="rounded-md m-1 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(1)}
          >
            +1
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(2)}
          >
            +2
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(-1)}
          >
            -1
          </button>
          <button
            className="rounded-md m-1 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddPoint(-2)}
          >
            -2
          </button>
        </div>

        <h2 className="text-white text-1xl font-bold">Faltas: {fouls}</h2>
        <div className="flex items-center">
          <button
            className="rounded-md m-1 bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddFoul(1)}
          >
            +1
          </button>
          <button
            className="rounded-md m-1 bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleAddFoul(-1)}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}
