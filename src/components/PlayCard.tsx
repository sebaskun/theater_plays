import GenreBadge from "./GenreBadge";
import ActorInfo from "./ActorInfo";
import DurationInfo from "./DurationInfo";
import { Youtube } from "lucide-react";

import type { Play } from "../types/Play";

interface PlayCardProps {
  play: Play;
  onClick: (play: Play) => void;
}

function PlayCard({ play, onClick }: PlayCardProps) {
  return (
    <div className="play-card" onClick={() => onClick(play)}>
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
        <div className="inline-flex items-center gap-2 mb-4">
          <h2 className="text-title">{play.title}</h2>
          {play.youtubeUrl && (
            <a
              href={play.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-meta hover:text-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-subtitle">{play.briefSummary}</p>
        <div className="flex items-center justify-between">
          <ActorInfo
            maleActors={play.maleActors}
            femaleActors={play.femaleActors}
            className="text-meta"
          />
          <DurationInfo duration={play.duration} className="text-meta" />
        </div>
      </div>
    </div>
  );
}

export default PlayCard;
