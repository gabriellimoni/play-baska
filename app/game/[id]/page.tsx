import Team from "@/components/team";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="bg-white h-full">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Jogo X
        </h1>
      </div>

      <div className="bg-gray-100 flex flex-row p-2">
        <Team name="Time 1" points={10} fouls={2} bgColor="bg-blue-500" />
        <Team name="Time 2" points={20} fouls={1} bgColor="bg-green-500" />
      </div>
    </div>
  );
}
