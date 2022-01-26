import '../styles/globals.css'

import Musica from "./Musica"
import Lacuna from '../components/Lacuna'

function MyApp({ Component, pageProps }) {
  return <Musica quantidadeLacunas = {20} dificuldade = {0.5} />
  // return <Lacuna palavra = "teste"/>
}

export default MyApp
