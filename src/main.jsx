import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'

import Header from './componentes/header'
import Principal from './componentes/principal'
import Footer from './componentes/footer'
import Peliculas from './componentes/peliculas';
import Series from './componentes/series';
import WebsGratis from './componentes/websgratis';


//pelis
import It2017Detalle from './componentes/peli/it2017';
import It2019Detalle from './componentes/peli/it-capitulodos';
import Scream5Detalle from './componentes/peli/scream5';
import GuerraMundialZDetalle from './componentes/peli/guerramundialz';
import FnafDetalle from './componentes/peli/fnaf';
import Conjuro1Detalle from './componentes/peli/conjuro1';
import Conjuro2Detalle from './componentes/peli/conjuro2';
import AnnabelleDetalle from './componentes/peli/annabelle';
import SawDetalle from './componentes/peli/saw';
import CoralineDetalle from './componentes/peli/coraline';
import ChuckyDetalle from './componentes/peli/chucky';
import DestinoFinal5Detalle from './componentes/peli/destinofinal';
import Scream1Detalle from './componentes/peli/scream';
import WeaponsDetalle from './componentes/peli/weapons';
import BarbaroDetalle from './componentes/peli/barbarian';


//serie
import WelcomeToDerryDetalle from './componentes/seri/welcometoderry';
import EstamosMuertosDetalle from './componentes/seri/estamosmuertos';
import FromDetalle from './componentes/seri/from';
import TheWalkingDeadDetalle from './componentes/seri/thewalkingdead';
import StrangerThingsDetalle from './componentes/seri/strangerthings';
import SquidGameDetalle from './componentes/seri/squidgame';
import HellboundDetalle from './componentes/seri/rumboalinfierno';
import DahmerDetalle from './componentes/seri/dahmer';
import EdGeinDetalle from './componentes/seri/edgein';
import SweetHomeDetalle from './componentes/seri/sweethome';
import AliceInBorderlandDetalle from './componentes/seri/aliceinbonderland';
import TheLastOfUsDetalle from './componentes/seri/thelastofus';
import KingdomDetalle from './componentes/seri/kingdom';
import ChuckySerieDetalle from './componentes/seri/chucky(serie)';
import TheMistDetalle from './componentes/seri/laniebla';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Principal,
  },
  {
    path: "/peliculas",
    Component: Peliculas,
  },
  {
    path: "/series",
    Component: Series,
  },
    {
    path: "/webgratis",
    Component: WebsGratis,
  },

  //peliculas
  {
    path: "/peliculas/it2017",
    Component: It2017Detalle,
  },
 {
    path: "/peliculas/it2019",
    Component: It2019Detalle,
  },
   {
    path: "/peliculas/scream5",
    Component: Scream5Detalle,
  },
   {
    path: "/peliculas/guerramundialz",
    Component: GuerraMundialZDetalle,
  },
  {
    path: "/peliculas/fnaf",
    Component: FnafDetalle,
  },
  {
    path: "/peliculas/conjuro1",
    Component: Conjuro1Detalle,
  },
  {
    path: "/peliculas/conjuro2",
    Component: Conjuro2Detalle,
  },
   {
    path: "/peliculas/annabelle",
    Component: AnnabelleDetalle,
  },
   {
    path: "/peliculas/saw",
    Component: SawDetalle,
  },
   {
    path: "/peliculas/coraline",
    Component: CoralineDetalle,
  },
 {
    path: "/peliculas/chucky",
    Component: ChuckyDetalle,
  },
   {
    path: "/peliculas/destinofinal5",
    Component: DestinoFinal5Detalle,
  },
   {
    path: "/peliculas/scream1",
    Component: Scream1Detalle,
  },
  {
    path: "/peliculas/weapons",
    Component: WeaponsDetalle,
  },{
    path: "/peliculas/barbaro",
    Component: BarbaroDetalle,
  },

  
  //series
   {
    path: "/series/welcometoderry",
    Component: WelcomeToDerryDetalle,
  },
   {
    path: "/series/estamosmuertos",
    Component: EstamosMuertosDetalle,
  },
   {
    path: "/series/from",
    Component: FromDetalle,
  },
   {
    path: "/series/thewalkingdead",
    Component: TheWalkingDeadDetalle,
  },
   {
    path: "/series/strangerthings",
    Component: StrangerThingsDetalle,
  },
   {
    path: "/series/squidgame",
    Component: SquidGameDetalle,
  },
  {
    path: "/series/rumboalinfierno",
    Component: HellboundDetalle,
  },
   {
    path: "/series/dahmer",
    Component: DahmerDetalle,
  },
  {
    path: "/series/edgein",
    Component: EdGeinDetalle,
  },
  {
    path: "/series/sweethome",
    Component: SweetHomeDetalle,
  },
   {
    path: "/series/aliceinbonderland",
    Component: AliceInBorderlandDetalle,
  },
  {
    path: "/series/thelastofus",
    Component: TheLastOfUsDetalle,
  },
  {
    path: "/series/kingdom",
    Component: KingdomDetalle,
  },
  {
    path: "/series/chuckyserie",
    Component: ChuckySerieDetalle,
  },
   {
    path: "/series/laniebla",
    Component: TheMistDetalle,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
