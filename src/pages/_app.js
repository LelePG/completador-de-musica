import '../styles/globals.css'

import PaginaPrincipal from "./PaginaPrincipal"
import PaginaInicial from "."
import Opcoes from '../model/Opcoes';

const opcoesGerais = new Opcoes();
//{
//   "id": 75244,
//   "title": "Killer Queen by Queen",
//   "albumArt": "https://images.genius.com/723a010c4f245165b60dae8d3af092e4.991x1000x1.jpg",
//   "url": "https://genius.com/Queen-killer-queen-lyrics"
// }

function MyApp({ Component, pageProps }) {
  return <PaginaPrincipal caminho="Queen-killer-queen"/>
  // return <PaginaInicial opcoes={opcoesGerais} />

  // return <Lacuna palavra = "teste"/>
}

export default MyApp
