import '../styles/globals.css'

import Musica from "../components/Musica"
import Lacuna from '../components/Lacuna'
import PaginaPrincipal from "./paginaPrincipal"
import PaginaInicial from "./paginaInicial"


function MyApp({ Component, pageProps }) {
  return <PaginaInicial/>
  // return <Lacuna palavra = "teste"/>
}

export default MyApp
