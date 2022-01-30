import PaginaPrincipal from "./PaginaPrincipal"
import PaginaInicial from "."
import Opcoes from '../model/Opcoes';

const opcoesGerais = new Opcoes();

function MyApp({ Component, pageProps }) {
  return <PaginaInicial opcoes={opcoesGerais}/>
  // return <Lacuna palavra = "teste"/>
}

export default MyApp
