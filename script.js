const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formJogos")
const lista = document.getElementById("listarJogos")
const mensagemVazia = document.getElementById("mensagemVazia")

btnCadastrar.addEventListener("click",() =>{
    modal.showModal()
})
btnCancelar.addEventListener("click",() =>{
    modal.close()
})
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const jogo = document.getElementById("jogo").value.trim()
    const plataforma = document.getElementById("plataforma").value.trim()
    const desenvolvedor = document.getElementById("desenvolvedor").value.trim()
    const genero = document.getElementById("genero").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)
    const data_cadastro = (document.getElementById("data_cadastro").value)

    criarCard(jogo,plataforma,desenvolvedor,genero,imagem,preco,data_cadastro)
    form.reset()
    modal.close()
})
function criarCard(jogo, plataforma, desenvolvedor, genero, imagem, preco, data_cadastro){
    mensagemVazia.hidden = true;

    const card = document.createElement("article")
    card.classList.add("card-jogo")
    const capa = document.createElement("div")
    capa.classList.add("capa")
    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    capa.appendChild(imagemCapa)
    const info = document.createElement("div")
    info.classList.add("info-jogo")
    const titulo = document.createElement("h3")
    titulo.textContent = jogo
    const nomeDesenvolvedor = document.createElement("p")
    nomeDesenvolvedor.textContent = "Desenvolvedor: " + desenvolvedor
    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Gênero: " + genero
    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
    info.append(titulo,nomeDesenvolvedor,nomeGenero,valor)
    card.append(capa,info)
    lista.appendChild(card)
}