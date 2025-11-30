export default function Peliculas() {
  const peliculas = [
     {
      titulo: "It: Capítulo Uno ",
      genero: "Terror / Suspenso",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
       link: "/peliculas/it2017"  
      
    },
     {
      titulo: "It: Capítulo Dos",
      genero: "Terror / Drama",
      imagen:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggmbeAJLBD2qVBu398duEmaTlGCQcyvS2xchFiaM8Z1ehn7679EO4KhgkMobhwt3XshJqGPEYPJyq0X2dCakr4Qbo89SZPPYLss04k4tFSFsUlVT6QmeIpCxD5s0Pkh7VquJN0T6AhuFg/s1600/it-capitulo-2-poster.jpg",
       link: "/peliculas/it2019"
      },
    {
      titulo: "Scream 5",
      genero: "Terror / Misterio",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg",
        link: "/peliculas/scream5"
    },
    {
      titulo: "Guerra Mundial Z",
      genero: "Acción / Terror",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/World_War_Z_poster.jpg",
        link: "/peliculas/guerramundialz"
    },
     {
    titulo: "Five Nights at Freddy's (FNAF)",
    genero: "Terror / Suspenso",
    imagen: "https://sm.ign.com/ign_latam/movie/f/five-night/five-nights-at-freddys-theater_j7c6.jpg",
    link: "/peliculas/fnaf"
  },
  {
    titulo: "El Conjuro",
    genero: "Terror / Sobrenatural",
    imagen: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "/peliculas/conjuro1"
  },
  {
    titulo: "El Conjuro 2",
    genero: "Terror / Sobrenatural",
    imagen: "https://m.media-amazon.com/images/M/MV5BMzM2OTE4ZWUtMzNiNy00MzhmLWE0YmMtZGE3ZTg2ZmUwODUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "/peliculas/conjuro2"
  },
  {
    titulo: "Annabelle",
    genero: "Terror / Sobrenatural",
    imagen: "https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "/peliculas/annabelle"
  },
  {
    titulo: "Saw: El Juego del Miedo",
    genero: "Terror / Thriller",
    imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/89/75/36/20065254.jpg",
    link: "/peliculas/saw"
  },
  {
    titulo: "Coraline",
    genero: "Animación / Terror / Fantasía",
    imagen: "https://pm1.aminoapps.com/6571/469dccc734cd3ea1aae2fbe608688c80f1e28e9a_hq.jpg",
    link: "/peliculas/coraline"
  },
  {
    titulo: "Chucky: El Muñeco Diabólico",
    genero: "Terror / Slasher",
    imagen: "https://m.media-amazon.com/images/M/MV5BY2IzZTc5MDgtNzVmMy00YzlhLTgyODEtMWM2ZGEyNmU3MGVmXkEyXkFqcGc@._V1_.jpg",
    link: "/peliculas/chucky"
  },
  {
    titulo: "Destino Final 5",
    genero: "Terror / Suspenso",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56stHV8bBOmjJh21MmTXeLN5NR1N2GlWTTw&s",
    link: "/peliculas/destinofinal5"
  },
  {
    titulo: "Scream",
    genero: "Terror / Slasher",
    imagen: "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg",
    link: "/peliculas/scream1"
  },
{
    titulo: "Weapons (La Hora de la Desaparición)",
    genero: "Terror / Misterio",
    imagen: "https://resizing.flixster.com/urnEX1TNbxIyYQPcRuEISEPcCqM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30053254_v_v13_ah.jpg",
    link: "/peliculas/weapons"
  },
  {
    titulo: "Bárbaro (Barbarian)",
    genero: "Terror / Sobrenatural",
    imagen: "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    link: "/peliculas/barbaro"
  }
  ];

  return (
 <main className="mx-auto px-6 pt-24 pb-12 bg-gradient-to-b from-black via-[#1a0020] to-[#0a0a0a] text-gray-100 min-h-screen">
  <h2 className="bg-black/50 p-2 rounded text-3xl font-bold text-yellow-400 mb-10 text-center">
    🎬 Películas recomendadas
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {peliculas.map((p, i) => (
      <div
        key={i}
        className="bg-[#120013] border border-violet-700 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-500/30 hover:scale-105 transition-transform"
      >
        <img
          src={p.imagen}
          alt={p.titulo}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-yellow-400 mb-1">
            {p.titulo}
          </h3>
          <p className="text-sm text-violet-400 mb-2 italic">
            {p.genero}
          </p>
          <a
            href={p.link}
            className="block w-full mt-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition text-center"
          >
            Ver
          </a>
        </div>
      </div>
    ))}
  </div>
</main>
  );
}