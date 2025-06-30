interface GenreColors {
  [key: string]: string;
}

const genreColors: GenreColors = {
  Drama: "bg-red-100 text-red-800",
  "Comedia Dramática": "bg-yellow-100 text-yellow-800",
  "Ciencia Ficción": "bg-blue-100 text-blue-800",
  Comedia: "bg-purple-100 text-purple-800",
  "Comedia Romántica": "bg-pink-100 text-pink-800",
  "Drama Histórico": "bg-green-100 text-green-800",
};

function GenreBadge({ genre }: { genre: string }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${genreColors[genre]}`}
    >
      {genre}
    </span>
  );
}

export default GenreBadge;
