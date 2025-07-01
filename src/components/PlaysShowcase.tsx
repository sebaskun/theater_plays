import React, { useState } from "react";
import PlayCard from "./PlayCard";
import plays from "../assets/theater_plays.json";
import DetailView from "./DetailView";

import type { Play } from "../types/Play";

function PlaysShowcase() {
  const [selectedPlay, setSelectedPlay] = useState<Play | null>(null);

  // Component: Header Background
  const HeaderBackground: React.FC = () => (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
    </div>
  );

  // Detail View
  if (selectedPlay) {
    return (
      <DetailView play={selectedPlay} onClick={() => setSelectedPlay(null)} />
    );
  }

  // Main List View
  return (
    <div className="page">
      <header className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 shadow-2xl overflow-hidden">
        <HeaderBackground />

        <div className="relative container py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Obras de teatro
              </span>
              <br />
              <span className="text-white">de Sebastian Lopez</span>
            </h1>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <p className="text-2xl text-white leading-relaxed drop-shadow-lg">
                ¡Hola! estas son algunas de las obras que escribí. Si alguien
                desea leerlas es libre de hacerlo. Si quieren montarlas pues
                ¡avísenme!
                <p>
                  <b>sebas.obras.contacto@gmail.com</b>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-slate-50">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </header>

      <main className="py-16">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plays.map((play: Play) => (
              <PlayCard key={play.id} play={play} onClick={setSelectedPlay} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Interesado en montar estas obras?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Todas las obras están disponibles para ser representadas por grupos
            teatrales, escuelas y organizaciones comunitarias. Contáctame para
            información sobre licencias y derechos de representación.
          </p>
          <p>sebas.obras.contacto@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default PlaysShowcase;
