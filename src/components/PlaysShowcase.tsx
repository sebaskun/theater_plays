import React, { useState } from "react";
import { Download, ArrowLeft, Eye } from "lucide-react";
import GenreBadge from "./GenreBadge";
import ActorInfo from "./ActorInfo";
import PlayCard from "./PlayCard";
import plays from "../assets/theater_plays.json";
import DurationInfo from "./DurationInfo";

// Type definitions
interface Play {
  id: number;
  title: string;
  poster: string;
  genre: string;
  maleActors: number;
  femaleActors: number;
  duration: string;
  briefSummary: string;
  fullSummary: string;
  downloadUrl: string;
}

interface DownloadCounts {
  [key: number]: number;
}

interface Styles {
  page: string;
  container: string;
  card: string;
  button: {
    primary: string;
    back: string;
  };
  text: {
    title: string;
    subtitle: string;
    meta: string;
  };
}

function PlaysShowcase() {
  const [selectedPlay, setSelectedPlay] = useState<Play | null>(null);
  const [downloadCounts, setDownloadCounts] = useState<DownloadCounts>({});

  // Style constants
  // CONVERT INTO CUSTOM TAILWIND CSS STYLES
  const styles: Styles = {
    page: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
    container: "max-w-6xl mx-auto px-6",
    card: "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden",
    button: {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2",
      back: "flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium",
    },
    text: {
      title: "text-xl font-bold text-gray-900 mb-3",
      subtitle: "text-gray-600 mb-4 line-clamp-3",
      meta: "flex items-center gap-2 text-sm text-gray-500",
    },
  };

  const handleBackToList = (): void => setSelectedPlay(null);

  const handleDownload = (play: Play): void => {
    setDownloadCounts((prev) => ({
      ...prev,
      [play.id]: (prev[play.id] || 0) + 1,
    }));
    alert(
      `Descargando "${play.title}" - Reemplazar con funcionalidad real de descarga`
    );
  };

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
      <div className={styles.page}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button onClick={handleBackToList} className={styles.button.back}>
            <ArrowLeft className="w-4 h-4" />
            Volver a la lista
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={selectedPlay.poster}
                  alt={selectedPlay.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              <div className="md:w-2/3 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                      {selectedPlay.title}
                    </h1>
                    <GenreBadge genre={selectedPlay.genre} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-600">
                  <ActorInfo
                    maleActors={selectedPlay.maleActors}
                    femaleActors={selectedPlay.femaleActors}
                  />
                  <DurationInfo duration={selectedPlay.duration} />
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Sinopsis
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPlay.fullSummary}
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <button
                    onClick={() => handleDownload(selectedPlay)}
                    className={styles.button.primary}
                  >
                    <Download className="w-4 h-4" />
                    Descargar Obra
                  </button>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">
                      {downloadCounts[selectedPlay.id] || 0} descargas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main List View
  return (
    <div className={styles.page}>
      <header className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 shadow-2xl overflow-hidden">
        <HeaderBackground />

        <div className={`relative ${styles.container} py-16`}>
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
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plays.map((play: Play) => (
              <PlayCard key={play.id} play={play} onClick={setSelectedPlay} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className={`${styles.container} text-center`}>
          <h3 className="text-2xl font-bold mb-4">
            ¿Interesado en montar estas obras?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Todas las obras están disponibles para ser representadas por grupos
            teatrales, escuelas y organizaciones comunitarias. Contáctame para
            información sobre licencias y derechos de representación.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PlaysShowcase;
