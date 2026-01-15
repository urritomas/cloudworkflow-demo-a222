"use client";
import { useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  const typeColors = {
    fire: 'from-orange-500 to-red-600',
    water: 'from-cyan-400 to-blue-600',
    grass: 'from-emerald-400 to-green-600',
    electric: 'from-yellow-300 to-amber-500',
    psychic: 'from-purple-400 to-pink-500',
    ice: 'from-cyan-300 to-blue-400',
    dragon: 'from-indigo-600 to-purple-700',
    dark: 'from-gray-800 to-black',
    fairy: 'from-pink-300 to-rose-500',
    normal: 'from-gray-500 to-stone-600',
    fighting: 'from-amber-700 to-red-700',
    flying: 'from-blue-300 to-purple-400',
    poison: 'from-purple-600 to-pink-600',
    ground: 'from-amber-600 to-yellow-700',
    rock: 'from-stone-700 to-gray-800',
    bug: 'from-lime-500 to-green-700',
    ghost: 'from-purple-800 to-indigo-900',
    steel: 'from-slate-500 to-slate-700',
  };

  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const gradientClass = typeColors[primaryType] || 'from-gray-400 to-gray-600';

  return (
    <div className="pokemon-card bg-gradient-to-b from-gray-100 to-gray-50 border-4 border-yellow-400 p-6 shadow-2xl">
      <div className={`bg-gradient-to-br ${gradientClass} rounded-xl p-4 mb-4 flex justify-center min-h-32 shadow-lg hover:shadow-2xl transition-all`}>
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name}
          className="h-32 w-32 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300" 
        />
      </div>
      
      <h3 className="text-2xl font-black text-center capitalize text-gray-800" style={{
        textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
      }}>
        {pokemon.name}
      </h3>
      
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {pokemon.types.map((t) => (
          <span 
            key={t.type.name}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold capitalize border-2 border-blue-800 shadow-md"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <button
        onClick={() => setShowStats(!showStats)}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-full font-black hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl border-2 border-red-800 uppercase hover:scale-105 active:scale-95"
      >
        {showStats ? "◀ Hide Stats" : "Show Stats ▶"}
      </button>

      {showStats && (
        <div className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300 shadow-md animate-fade-in">
          <div className="space-y-3">
            {pokemon.stats.map((s) => (
              <div key={s.stat.name} className="text-sm animate-fade-in">
                <div className="flex justify-between mb-1">
                  <span className="font-bold capitalize text-blue-900">{s.stat.name}:</span>
                  <span className="font-bold text-red-600 bg-white px-2 py-0.5 rounded">{s.base_stat}</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 border border-blue-200 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(s.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}