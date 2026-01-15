import Navbar from "./components/Navbar";
import ClientWrapper from "./components/ClientWrapper";

async function fetchPokemon(limit = 20) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const list = await res.json();

  const detailed = await Promise.all(
    list.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return detailed;
}

export default async function Page() {
  const data = await fetchPokemon(30);

  return (
    <main className="max-w-7xl mx-auto">
      <div className="mb-8 text-center animate-slide-in-down">
        <h2 className="text-4xl md:text-5xl font-black text-yellow-300 animate-pulse-glow" style={{
          textShadow: '4px 4px 0px #e60000, 8px 8px 0px rgba(0,0,0,0.4)',
          fontStyle: 'italic',
          letterSpacing: '2px'
        }}>
          POKÉDEX
        </h2>
        <p className="text-lg text-yellow-200 mt-2 font-bold animate-bounce-soft">Catch 'em all!</p>
      </div>
      <ClientWrapper data={data} />
    </main>
  );
}