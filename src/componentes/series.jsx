export default function Series() {
  const series = [
    {
     titulo: "Welcome to Derry",
      genero: "Terror / Misterio",
      imagen:
        "https://fox23maine.com/resources/media2/16x9/1296/986/0x41/90/9ae0e016-0d57-429a-8787-dbfc0f224216-keyart_4.jpg",
       link: "/series/welcometoderry"  
      },
    {
      titulo: "Estamos Muertos",
      genero: "Terror / Ciencia ficción",
      imagen:
        "https://image.tmdb.org/t/p/original/kT1c6QGG6bUHDqb4W4Rrw0Rm1v9.jpg",
        link: "/series/estamosmuertos"  
    },
    {
      titulo: "From",
      genero: "Terror / Ciencia ficción",
      imagen:
        "https://upload.wikimedia.org/wikipedia/pt/c/c0/From_%28s%C3%A9rie%29.jpg",
        link: "/series/from"  
    },
    {
      titulo: "The Walking Dead",
      genero: "Drama / Terror",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/TWD_Season_11_poster.jpg",
        link: "/series/thewalkingdead"  
    },
     {
    titulo: "Stranger Things",
    genero: "Ciencia ficción / Terror / Aventura",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Stranger_Things_season_1.jpg",
    link: "/series/strangerthings"
  },
  {
    titulo: "Squid Game",
    genero: "Thriller / Suspenso / Drama",
    imagen:
      "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/U8YAAOSwthhi2kVl/$_57.JPG?set_id=8800005007",
    link: "/series/squidgame"
  },
  {
    titulo: "Rumbo al Infierno",
    genero: "Terror / Fantasía / Suspenso",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjIwMDBlZjItNzMyMi00NjQwLWEzOTgtNGFmZTA0NThiMDhkXkEyXkFqcGc@._V1_.jpg",
    link: "/series/rumboalinfierno"
  },
  {
    titulo: "Dahmer: Monster – The Jeffrey Dahmer Story",
    genero: "Crimen / Drama",
    imagen:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22931799_b_v13_aa.jpg",
    link: "/series/dahmer"
  },
  {
    titulo: "Monstruo: La Historia de Ed Gein",
    genero: "Crimen / Documental",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfiqarpfQeIkTSSPuZme67nQuNAOsjfsEDQ&s",
    link: "/series/edgein"
  },
  {
    titulo: "Sweet Home (Dulce Hogar)",
    genero: "Terror / Acción / Fantasía",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZDE0MTM5YjgtMzNhOS00NWE2LTkxN2EtMzg0NWRmODBmMDA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "/series/sweethome"
  },
  {
    titulo: "Alice in Borderland",
    genero: "Suspenso / Ciencia ficción",
    imagen:
      "https://es.web.img3.acsta.net/pictures/20/12/10/09/47/3988792.jpg",
    link: "/series/aliceinbonderland"
  },
  {
    titulo: "The Last of Us",
    genero: "Drama / Terror / Postapocalíptico",
    imagen:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Last_of_Us_season_1_Blu-ray.png",
    link: "/series/thelastofus"
  },
  {
    titulo: "Kingdom",
    genero: "Terror / Histórico / Acción",
    imagen:
      "https://es.web.img2.acsta.net/c_310_420/pictures/18/12/24/09/53/1626925.jpg",
    link: "/series/kingdom"
  },
  {
    titulo: "Chucky (Serie)",
    genero: "Terror / Slasher",
    imagen:
      "https://es.web.img3.acsta.net/pictures/21/09/06/17/25/5742155.jpg",
    link: "/series/chuckyserie"
  },
  {
    titulo: "La Niebla (The Mist)",
    genero: "Terror / Suspenso",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMzE3MDk0ODkwM15BMl5BanBnXkFtZTgwMzA5NTk5MTI@._V1_FMjpg_UX1000_.jpg",
    link: "/series/laniebla"
  },
  
  ];

  return (
    <main className="container mx-auto px-6 py-12 bg-gradient-to-b from-black via-[#1a0020] to-[#0a0a0a] text-gray-100 min-h-screen">
  <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]">
    📺 Series recomendadas
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {series.map((s, i) => (
      <div
        key={i}
        className="bg-[#120013] border border-violet-700 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-500/30 hover:scale-105 transition-transform"
      >
        <img
          src={s.imagen}
          alt={s.titulo}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-yellow-400 mb-1">
            {s.titulo}
          </h3>
          <p className="text-sm text-violet-400 mb-2 italic">{s.genero}</p>
          
         <a
          href={s.link}
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