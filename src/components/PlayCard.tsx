import GenreBadge from "./GenreBadge";

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

function PlayCard({ play }) {
  return (
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
}
