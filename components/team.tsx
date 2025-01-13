export default function Team(props: {
  name: string;
  points: number;
  fouls: number;
  bgColor?: string;
}) {
  const { name, points, fouls, bgColor } = props;
  return (
    <div className={`flex-1 flex items-center justify-center ${bgColor || ""}`}>
      <div>
        <h1 className="text-white text-2xl font-bold">{name}</h1>
        <h2 className="text-white text-1xl font-bold">Pontuação: {points}</h2>
        <h2 className="text-white text-1xl font-bold">Faltas: {fouls}</h2>
      </div>
    </div>
  );
}
