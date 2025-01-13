"use client";

import { createGame } from "@/services/game";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GameForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    gameName: "",
    team1: "",
    team2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createGame({
      name: formData.gameName,
      t1Name: formData.team1,
      t2Name: formData.team2,
    }).then((gameId) => {
      router.push(`game/${gameId}`);
    });
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Cadastro de Jogo
        </h2>

        {/* Nome do Jogo */}
        <div className="mb-4">
          <label htmlFor="gameName" className="block text-gray-700 mb-1">
            Nome do Jogo
          </label>
          <input
            type="text"
            id="gameName"
            name="gameName"
            value={formData.gameName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nome do Time 1 */}
        <div className="mb-4">
          <label htmlFor="team1" className="block text-gray-700 mb-1">
            Nome do Time 1
          </label>
          <input
            type="text"
            id="team1"
            name="team1"
            value={formData.team1}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nome do Time 2 */}
        <div className="mb-4">
          <label htmlFor="team2" className="block text-gray-700 mb-1">
            Nome do Time 2
          </label>
          <input
            type="text"
            id="team2"
            name="team2"
            value={formData.team2}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
