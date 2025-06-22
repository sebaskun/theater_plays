import React, { useState } from "react";
import { Download, Clock, ArrowLeft, Eye } from "lucide-react";
import GenreBadge from "./GenreBadge";
import ActorInfo from "./ActorInfo";

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

interface DurationInfoProps {
  duration: string;
  className?: string;
}

interface PlayCardProps {
  play: Play;
}

function PlaysShowcase() {
  const [selectedPlay, setSelectedPlay] = useState<Play | null>(null);
  const [downloadCounts, setDownloadCounts] = useState<DownloadCounts>({});

  // Sample data - replace with your actual plays
  const plays: Play[] = [
    {
      id: 1,
      title: "Confesiones de Medianoche",
      poster:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=600&fit=crop",
      genre: "Drama",
      maleActors: 2,
      femaleActors: 2,
      duration: "90 minutos",
      briefSummary:
        "Cuatro extraños atrapados en un ascensor durante un apagón revelan sus secretos más profundos.",
      fullSummary:
        "Un drama psicológico intenso que explora las profundidades de la conciencia humana cuando cuatro extraños se encuentran atrapados en un ascensor durante un apagón en toda la ciudad. Mientras pasan las horas, se revelan secretos y se ponen a prueba los límites morales. La obra examina temas de culpa, redención y conexión humana a través de diálogos intensos y reveladores que mantienen al público en vilo hasta el final.",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "El Último Jardín",
      poster:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=600&fit=crop",
      genre: "Comedia Dramática",
      maleActors: 1,
      femaleActors: 2,
      duration: "75 minutos",
      briefSummary:
        "Una anciana se niega a vender su jardín urbano a los desarrolladores.",
      fullSummary:
        "Una historia conmovedora sobre una mujer mayor que se niega a vender su jardín urbano a los desarrolladores inmobiliarios. A través del humor y el patetismo, examina temas de progreso versus preservación y el valor de los espacios comunitarios. La obra presenta personajes entrañables que luchan por mantener viva la esencia de su barrio mientras enfrentan las presiones del mundo moderno.",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Fantasmas Digitales",
      poster:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      genre: "Ciencia Ficción",
      maleActors: 3,
      femaleActors: 2,
      duration: "100 minutos",
      briefSummary:
        "En un futuro cercano, la conciencia puede preservarse digitalmente.",
      fullSummary:
        "Ambientada en un mundo de futuro cercano donde la conciencia puede ser preservada digitalmente, esta obra provocativa cuestiona qué significa ser humano cuando la tecnología difumina la línea entre la vida y la muerte. Los personajes enfrentan dilemas éticos profundos mientras navegan por un mundo donde la inmortalidad digital es posible pero a un costo emocional y social muy alto.",
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Secretos de Pueblo",
      poster:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      genre: "Misterio",
      maleActors: 3,
      femaleActors: 3,
      duration: "95 minutos",
      briefSummary:
        "Una periodista investiga una desaparición de décadas en su pueblo natal.",
      fullSummary:
        "Cuando una periodista regresa a su pueblo natal para investigar una desaparición ocurrida décadas atrás, descubre una red de mentiras que amenaza con destruir la comunidad que una vez llamó hogar. La obra teje una intrincada trama de misterio mientras explora temas de verdad, política de pueblo pequeño y justicia, manteniendo al público adivinando hasta la revelación final.",
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Amor en Traducción",
      poster:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      genre: "Comedia Romántica",
      maleActors: 2,
      femaleActors: 2,
      duration: "80 minutos",
      briefSummary:
        "Dos traductores se enamoran a través de emails mal traducidos.",
      fullSummary:
        "Una comedia romántica bilingüe sobre dos traductores que se enamoran a través de emails mal traducidos, explorando cómo el lenguaje tanto conecta como divide en asuntos del corazón. La obra juega ingeniosamente con las barreras del idioma y los malentendidos culturales, creando situaciones cómicas que revelan verdades profundas sobre la comunicación y el amor en un mundo globalizado.",
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "El Peso de las Palabras",
      poster:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=600&fit=crop",
      genre: "Drama Histórico",
      maleActors: 4,
      femaleActors: 3,
      duration: "110 minutos",
      briefSummary:
        "Periodistas en tiempo de guerra deben decidir entre reportar la verdad o proteger vidas.",
      fullSummary:
        "Basada en eventos reales, este poderoso drama sigue a un grupo de periodistas durante tiempo de guerra que deben decidir si reportar la verdad o proteger vidas, examinando la responsabilidad que viene con el poder de la prensa. La obra explora los dilemas éticos del periodismo en zonas de conflicto y el peso moral de las decisiones que pueden cambiar el curso de la historia.",
      downloadUrl: "#",
    },
  ];

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

  const handlePlayClick = (play: Play): void => setSelectedPlay(play);
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

  // Component: Duration Info
  const DurationInfo: React.FC<DurationInfoProps> = ({
    duration,
    className = "",
  }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="w-4 h-4" />
      <span>{duration}</span>
    </div>
  );

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

  // Component: Play Card
  const PlayCard: React.FC<PlayCardProps> = ({ play }) => (
    <div className={styles.card} onClick={() => handlePlayClick(play)}>
      <div className="relative">
        <img
          src={play.poster}
          alt={play.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <GenreBadge genre={play.genre} />
        </div>
      </div>

      <div className="p-6">
        <h2 className={styles.text.title}>{play.title}</h2>
        <p className={styles.text.subtitle}>{play.briefSummary}</p>

        <div className="flex items-center justify-between">
          <ActorInfo
            maleActors={play.maleActors}
            femaleActors={play.femaleActors}
            className={styles.text.meta}
          />
          <DurationInfo duration={play.duration} className={styles.text.meta} />
        </div>
      </div>
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
              <PlayCard key={play.id} play={play} />
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
