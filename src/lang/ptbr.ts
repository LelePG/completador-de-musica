import langModel from "./LangModel";

const ptbr = new langModel();
ptbr.setMainPageText("Procure pela música:", "Título:", "Autor:", "Dificuldade:", "Feito com 🪄 por LelePG");
ptbr.setErrorMessages(
	"Os seguintes problemas foram encontrados:",
	"O título da música não foi informado.",
	"O artista não foi informado.",
	"A chave da API está incorreta",
	"Houve um problema desconhecido"
);
ptbr.setSongPageButtons("Corrigir", "Limpar", "Mostrar", "Ocultar", "Resortear", "Voltar");
export default ptbr;
