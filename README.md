# 🎯 Jogo do Número Secreto

Uma aplicação web interativa e acessível na qual o jogador precisa adivinhar um número secreto gerado aleatoriamente pelo sistema, desenvolvida com **HTML5, CSS3 e JavaScript (Vanilla JS)**.

🔗 **Deploy da aplicação**: [https://jogo-brown-ten.vercel.app](https://jogo-brown-ten.vercel.app)

---

## 🎯 Sobre o Projeto

O **Jogo do Número Secreto** foi desenvolvido para exercitar a lógica de programação, o controle de fluxo de dados, o gerenciamento de estados da interface e a integração com recursos de acessibilidade e sintetização de voz (Web Speech API).

### 🛠️ Funcionalidades

- **Sorteio Aleatório Sem Repetição**: O sistema gera um número secreto e armazena os números já jogados para evitar repetições na mesma sessão.
- **Dicas Dinâmicas**: Informa se o número secreto é maior ou menor que o chute inserido pelo jogador.
- **Contador de Tentativas**: Mensagem personalizada indicando o número exato de tentativas necessárias para acertar.
- **Recurso de Voz (ResponsiveVoice / Web Speech API)**: Leitura em áudio das instruções e resultados para melhor acessibilidade.
- **Novo Jogo**: Botão para reiniciar a partida, redefinir o placar e sorteio sem precisar recarregar a página.
- **Design Responsivo**: Layout limpo e fluido adaptado para desktop e telas menores.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica e acessível.
- **CSS3**: Estilização visual, uso de variáveis e layout responsivo.
- **JavaScript (ES6+)**: Algoritmos de comparação, manipuladores de eventos e controle do DOM.
- **Vercel**: Hospedagem e deploy contínuo da aplicação.

---

## 📁 Estrutura de Arquivos

```text
├── index.html          # Estrutura visual e elementos de interface
├── style.css           # Estilização e responsividade
├── app.js              # Lógica do jogo e controle de áudio/DOM
└── README.md           # Documentação do repositório
```
