//para criar uma lista com os numeros ja sorteados
let listaDeNumerosSorteados =[];
let numeroLimite = 100;
let NumeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

//Função Substiui as tag's desejadas pelos textos

function exibirTextoNatela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1','Jogo do Número Secreto');
    exibirTextoNatela('p','Escolha um número entre 1 e 100');
}
exibirMensagemInicial()


//Função atribui ação ao botão chutar

function verificarChute() {
    let chute = document.querySelector('input').value;
    //se o numero chutado for igual ao mumero secreto

    if (chute == NumeroSecreto){
        exibirTextoNatela('h1','Acertou!!');
        let palavraTentativa = tentativas>1? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('p',`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!!`) ;
        exibirTextoNatela('p', mensagemTentativas);
        //para reiniciar o jugo usando o botao reiniciar. obs ee foi identificado pela id
        document.getElementById('reiniciar').removeAttribute('disabled');
        // se o numero escolhido for diferente do numero secreto
    }else{
        if(chute>NumeroSecreto)
            exibirTextoNatela('p','O número secreto é menor');
        else{
            exibirTextoNatela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

//Gera um número pseudo aleatório que ficará armazenado na variável NumeroSecreto

function GerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
   let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;
if  (quantidadeDeElementosNaLista ==numeroLimite) {
    listaDeNumerosSorteados = [];
}


   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return GerarNumeroAleatorio();
   }   else {
    //para adicionar o numero já sorteado a lista
    listaDeNumerosSorteados.push(numeroEscolhido);

    return numeroEscolhido;
   }
}
//para limpar o campo após tentativa errada de chutes
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

//para atribuir função reniciar jogo ao botao reiniciar

function reiniciarJogo(){
    NumeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
