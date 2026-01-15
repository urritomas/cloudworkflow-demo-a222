export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-lg p-8 animate-slide-in-up">
        <h1 className="text-4xl font-black mb-8 text-gray-900">
          About This Project
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          This website was created as a performance task for the Web Programming course. Its main goal
          is to demonstrate how to fetch and render API data using <span className="font-semibold text-gray-900">Next.js App Router</span> with <span className="font-semibold text-gray-900">Tailwind CSS</span>.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Pokémon Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            Pokémon (short for Pocket Monsters) is a popular game franchise developed by Nintendo. It
            features fictional creatures that players can collect, train, and battle. Since its debut in
            1996, Pokémon has expanded into trading cards, animation, and media worldwide.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">API Source</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            All Pokémon information displayed in this application comes from the open REST API:
          </p>
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors font-semibold"
          >
            PokéAPI.co
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Note</h2>
          <p className="text-gray-600 leading-relaxed">
            This website is intended solely for educational demonstration. No commercial usage is
            intended, and all Pokémon data & assets belong to their respective copyright owners.
          </p>
        </div>

        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6 mt-8">
          © {new Date().getFullYear()} Web Programming — Demo Application
        </div>
      </div>
    </div>
  );
}