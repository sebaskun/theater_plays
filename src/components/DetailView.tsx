import { ArrowLeft, Download, Eye } from "lucide-react";
import GenreBadge from "./GenreBadge";
import ActorInfo from "./ActorInfo";
import DurationInfo from "./DurationInfo";
import { useState } from "react";

import type { Play } from "../types/Play";

interface DownloadCounts {
  [key: number]: number;
}

interface DetailViewProps {
  play: Play;
  onClick: () => void;
}

function DetailView({ play, onClick }: DetailViewProps) {
  const [downloadCounts, setDownloadCounts] = useState<DownloadCounts>({});

  // const handleDownload = (play: Play): void => {
  //   setDownloadCounts((prev) => ({
  //     ...prev,
  //     [play.id]: (prev[play.id] || 0) + 1,
  //   }));
  //   alert(
  //     `Descargando "${play.title}" - Reemplazar con funcionalidad real de descarga`
  //   );
  // };

  const handleDownload = (play: Play): void => {
    setDownloadCounts((prev) => ({
      ...prev,
      [play.id]: (prev[play.id] || 0) + 1,
    }));

    // Try to download the file if downloadUrl exists
    if (play.downloadUrl) {
      const link = document.createElement("a");
      link.href = play.downloadUrl;
      link.download = `${play.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(
        `Descargando "${play.title}" - Reemplazar con funcionalidad real de descarga`
      );
    }
  };

  return (
    <div className="page">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button onClick={onClick} className="button-back">
          <ArrowLeft className="w-4 h-4" />
          Volver a la lista
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={play.poster}
                alt={play.title}
                className="w-full h-64 md:h-full object-cover rounded-lg shadow"
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

              {play.youtubeUrl && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Video
                  </h2>
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={play.youtubeUrl}
                      title={`Video de ${play.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <button
                  onClick={() => handleDownload(play)}
                  className="button-primary"
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
