import { useParams, Link } from "react-router-dom";

const series = [
  {
    id: 1,
    titulo: "It: Welcome to Derry",
    genero: "Terror psicológico / Precuela",
    descripcion:
      "Una precuela que explora los orígenes del mal en Derry y el surgimiento de Pennywise, el payaso.",
    director: "Andy Muschietti",
    actores: ["Bill Skarsgård", "Jaeden Martell", "Sophia Lillis"],
    plataforma: "HBO Max",
    enlace: "https://www.hbomax.com",
    imagen:
      "https://cdn.vox-cdn.com/thumbor/WEMRRE2GZXE4QZxLfnVECbJrNYY=/0x0:2000x1000/1200x800/filters:focal(840x340:1160x660)/cdn.vox-cdn.com/uploads/chorus_image/image/72387760/Welcome_to_Derry.0.jpg",
  },
  {
    id: 2,
    titulo: "Estamos Muertos",
    genero: "Terror / Zombis",
    descripcion:
      "Un grupo de estudiantes lucha por sobrevivir en su escuela cuando un virus zombi se propaga sin control.",
    director: "Lee Jae-kyoo",
    actores: ["Park Ji-hu", "Yoon Chan-young", "Cho Yi-hyun"],
    plataforma: "Netflix",
    enlace: "https://www.netflix.com/title/81237994",
    imagen:
      "https://m.media-amazon.com/images/I/81I6UPiOQDL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    titulo: "From",
    genero: "Terror / Misterio",
    descripcion:
      "Una ciudad sin salida atrapa a todos los que entran, rodeada de criaturas que cazan por la noche.",
    director: "John Griffin",
    actores: ["Harold Perrineau", "Catalina Sandino Moreno"],
    plataforma: "MGM+",
    enlace: "https://www.mgmplus.com/",
    imagen:
      "https://m.media-amazon.com/images/I/71qM28N9JUL._AC_SL1200_.jpg",
  },
  {
    id: 4,
    titulo: "The Walking Dead",
    genero: "Terror / Apocalipsis",
    descripcion:
      "Un grupo de sobrevivientes intenta mantener su humanidad en un mundo dominado por zombis.",
    director: "Frank Darabont",
    actores: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride"],
    plataforma: "Netflix / Star+",
    enlace: "https://www.netflix.com/title/70177057",
    imagen:
      "https://m.media-amazon.com/images/I/81lU7G4l+RL._AC_SL1500_.jpg",
  },
];

export default function SerieDetalle() {
  const { id } = useParams();
  const serie = series.find((s) => s.id === Number(id));

  if (!serie)
    return (
      <div className="text-center text-white p-8 bg-black min-h-screen">
        <p>No se encontró la serie 😔</p>
        <Link to="/series" className="text-violet-400 hover:underline">
          ← Volver
        </Link>
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-black via-[#1a001a] to-[#0a0a0a] text-gray-100 min-h-screen p-8 text-center">
      <img
        src={serie.imagen}
        alt={serie.titulo}
        className="mx-auto rounded-2xl mb-6 w-full max-w-md shadow-2xl border-4 border-violet-700"
      />
      <h2 className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">
        {serie.titulo}
      </h2>
      <p className="italic text-violet-300 mb-4">{serie.genero}</p>
      <p className="text-gray-300 max-w-2xl mx-auto mb-4">
        {serie.descripcion}
      </p>

      <p className="text-yellow-400">
        🎬 Director: <span className="text-gray-200">{serie.director}</span>
      </p>
      <p className="text-yellow-400 mb-4">
        ⭐ Actores:{" "}
        <span className="text-gray-200">{serie.actores.join(", ")}</span>
      </p>

      <p className="mt-2">
        📺 Disponible en:{" "}
        <span className="font-semibold text-yellow-300">{serie.plataforma}</span>
      </p>

      <a
        href={serie.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-violet-700 hover:bg-violet-800 text-yellow-300 font-bold px-5 py-2 rounded-full transition"
      >
        🎥 Ver en {serie.plataforma}
      </a>

    </div>
  );
}
