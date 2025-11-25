import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
export default function Header() {

   const refNav = useRef(0);
    function switchNav(){    
        refNav.current.classList.toggle("max-[660px]:-translate-y-full");
    }

  return (
       <header className="bg-gradient-to-r from-black via-[#6708b5] to-[#000000] text-yellow-400 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-wider hover:text-yellow-300 transition">
          👻 TerrorVerse
        </h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-violet-400 font-semibold transition">Inicio</a>
          <a href="/peliculas" className="hover:text-violet-400 font-semibold transition">Películas</a>
          <a href="/series" className="hover:text-violet-400 font-semibold transition">Series</a>
          <a href="/webgratis" className="hover:text-violet-400 font-semibold transition">Webs Gratis</a>
          </nav>
      </div>
    </header>
  );
}