import { ArrowLeft, Download, Eye } from "lucide-react";
import GenreBadge from "./GenreBadge";
import ActorInfo from "./ActorInfo";
import DurationInfo from "./DurationInfo";
import { useState } from "react";

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

interface DetailViewProps {
  play: Play;
  onClick: () => void;
}

function DetailView({ play, onClick }: DetailViewProps) {
  const [downloadCounts, setDownloadCounts] = useState<DownloadCounts>({});

  const handleDownload = (play: Play): void => {
    setDownloadCounts((prev) => ({
      ...prev,
      [play.id]: (prev[play.id] || 0) + 1,
    }));
    alert(
      `Descargando "${play.title}" - Reemplazar con funcionalidad real de descarga`
    );
  };

  return (
    <div className={styles.page}>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button onClick={onClick} className={styles.button.back}>
          <ArrowLeft className="w-4 h-4" />
          Volver a la lista
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={play.poster}
                alt={play.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {play.title}
                  </h1>
                  <GenreBadge genre={play.genre} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-600">
                <ActorInfo
                  maleActors={play.maleActors}
                  femaleActors={play.femaleActors}
                />
                <DurationInfo duration={play.duration} />
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Sinopsis
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {play.fullSummary}
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <button
                  onClick={() => handleDownload(play)}
                  className={styles.button.primary}
                >
                  <Download className="w-4 h-4" />
                  Descargar Obra
                </button>

                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span className="font-medium">
                    {downloadCounts[play.id] || 0} descargas
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

export default DetailView;
