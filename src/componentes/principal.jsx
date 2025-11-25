import { useState } from "react";

export default function Principal() {
  const imagenes = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGgSViaOOTtqXxWXoHoSXVSaAVSBdPsZtHvK2t2GQdDK1yrypj",
    "https://assets.tvnotas.com.mx/dims4/default/48bd9f3/2147483647/strip/true/crop/2880x1620+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk3-prod-tvnotas.s3.us-west-2.amazonaws.com%2Fbrightspot%2F65%2Ffa%2F0223b8df4afdad6bcb89643df42f%2Fdescarga-4.jpg",
    "https://cdn.clarosports.com/clarosports/2024/05/terrorgok1-141923.jpg",

  ];

  const [actual, setActual] = useState(0);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-[#150025] to-[#0a0a0a] text-gray-100 flex flex-col justify-center items-center text-center px-6">

      <img
        src="https://img.freepik.com/foto-gratis/celebracion-dia-halloween-disfraces_23-2151880079.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Ambiente de terror"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
          Bienvenidos a TerrorVerse
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Sumergite en un universo de horror cinematográfico y televisivo.
          Descubrí los clásicos, las nuevas pesadillas y los monstruos que
          acechan la oscuridad.
        </p>
      </div>

     
   <div className="relative z-10 mt-6 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${actual * 100}%)` }}
  >
    {imagenes.map((src, i) => (
      <img key={i} src={src} className="w-full shrink-0" />
    ))}
  </div>

  <button
    onClick={() =>
      setActual((actual - 1 + imagenes.length) % imagenes.length)
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
  >
    ‹
  </button>

  <button
    onClick={() => setActual((actual + 1) % imagenes.length)}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
  >
    ›
  </button>
</div>


    </main>
  );
}