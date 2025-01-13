"use client";

import Team from "@/components/team";
import { subscribe } from "@/config/firebase";
import { Game, getGame } from "@/services/game";
import { useEffect, useState } from "react";

export default function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    let unsub: Function;
    params.then(({ id }) => {
      unsub = subscribe("games", id, (data: any) => {
        setGame(data);
      });
    });

    return () => {
      unsub();
    };
  }, []);

  if (!game) return <></>;

  const { teamOne, teamTwo, name } = game;

  return (
    <div className="bg-white h-full">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {name}
        </h1>
      </div>

      <div className="bg-gray-100 flex flex-row p-2">
        <Team bgColor="bg-green-500" team={teamOne} gameId={game.id} />
        <Team bgColor="bg-blue-500" team={teamTwo} gameId={game.id} />
      </div>
    </div>
  );
}
