export interface Play {
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
  youtubeUrl?: string; // Optional, if the play has a YouTube video
}
