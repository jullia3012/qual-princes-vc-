// Links das imagens de fundo
const FOTO_TELA_INICIAL = "https://kidstok.cdn.magazord.com.br/img/2025/07/blog/9449/nomes-de-princisas-da-disney-1.jpg"; // Foto exclusiva do início
const FOTO_PERGUNTAS = "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2017/12/from-damsels-in-distress-to-vibrant-viragos-the-evolution-of-disney-princesses-disney.jpg"; // Foto exclusiva durante o quiz

const FOTOS_PRINCESAS = {
     Ariel: "https://i.pinimg.com/1200x/21/f2/40/21f24069c2eb97a77aec6ea60475f181.jpg",
    Bela: "https://i.pinimg.com/736x/5f/02/d9/5f02d9764210836882cfad7e02c8e39c.jpg",
    Mulan: "https://wallpapercat.com/w/full/8/0/5/1082435-3840x2160-desktop-4k-mulan-1998-wallpaper-photo.jpg",
    Cinderela: "https://i.pinimg.com/736x/85/19/55/85195515f1feb72477f034ca77af5895.jpg",
    Tiana: "https://i.pinimg.com/1200x/80/4f/6d/804f6de7b6652156da24782ce18bb1d9.jpg",
    Merida: "https://i.pinimg.com/1200x/ec/5b/8d/ec5b8dfb51085de3e6662b6532c1267d.jpg",
    BrancaDeNeve: "https://i.pinimg.com/1200x/c1/07/51/c10751541d3980363221d559a375a55a.jpg",
    Aurora: "https://i.pinimg.com/1200x/46/46/b7/4646b7bd25785c446cb84cb6bd11ef62.jpg",
    Rapunzel: "https://i.pinimg.com/736x/d4/2c/07/d42c07efde085fc3f0324bab75e97c38.jpg",
    Ana: "https://i.pinimg.com/1200x/e2/a7/68/e2a7689122174a9c2d7996add29dc2a8.jpg",
    Elsa: "https://i.pinimg.com/1200x/0d/cb/f1/0dcbf1f017a979b1bf5d570e680ca143.jpg",
    Jasmine: "https://i.pinimg.com/1200x/1f/20/29/1f202920fec4d62a10217bb09f0a06d1.jpg",
    Pocahontas: "https://i.pinimg.com/736x/d4/04/6c/d4046c560327a85cb33bb980a8fa24ce.jpg"
};


// Contagem de pontos zerada
const pontuacao = {
    Ariel: 0,
    Bela: 0,
    Mulan: 0,
    Cinderela: 0,
    Tiana: 0,
    Merida: 0,
    BrancaDeNeve: 0,
    Aurora: 0,
    Rapunzel: 0,
    Ana: 0,
    Elsa: 0,
    Jasmine: 0,
    Pocahontas: 0
};

// Descrições finais de cada princesa
const resultadosPrincesas = {
    Ariel: "Você é a Ariel! Curiosa, apaixonada por novidades e com um espírito livre.",
    Bela: "Você é a Bela! Inteligente, leitora e consegue enxergar a beleza interior das pessoas.",
    Mulan: "Você é a Mulan! Corajosa, determinada e disposta a tudo para proteger quem ama.",
    Cinderela: "Você é a Cinderela! Gentil, resiliente e nunca deixa de acreditar nos seus sonhos.",
    Tiana: "Você é a Tiana! Trabalhadora, focada e luta com garra para conquistar seus objetivos.",
    Merida: "Você é a Mérida! Independente, valente e dona do seu próprio destino.",
    BrancaDeNeve: "Você é a Branca de Neve! Doce, otimista e consegue ver o lado bom em todos.",
    Aurora: "Você é a Aurora! Romântica, graciosa e cheia de imaginação.",
    Rapunzel: "Você é a Rapunzel! Criativa, animada e sempre pronta para explorar o mundo.",
    Ana: "Você é a Ana! Leal, espontânea e ama com todo o coração.",
    Elsa: "Você é a Elsa! Reservada, poderosa e protetora das pessoas ao seu redor.",
    Jasmine: "Você é a Jasmine! Forte, autêntica e não aceita que decidam por você.",
    Pocahontas: "Você é a Pocahontas! Espiritual, ligada à natureza e cheia de sabedoria."
};

// Perguntas cobrindo TODAS as 13 princesas
const perguntas = [
    {
        enunciado: "1. Num dia livre e sem obrigações no reino, o que você mais gostaria de fazer?",
        alternativas: [
            { texto: "Explorar lugares novos e criar coisas artísticas.", princesa: "Rapunzel" },
            { texto: "Ler um bom livro e aprender algo novo.", princesa: "Bela" },
            { texto: "Praticar esportes ou passear ao ar livre.", princesa: "Merida" },
            { texto: "Cuidar dos animais e passar tempo com amigos.", princesa: "BrancaDeNeve" },
            { texto: "Focar nos meus projetos e no meu futuro.", princesa: "Tiana" }
        ]
    },
    {
        enunciado: "2. Como você reage quando surge um grande obstáculo?",
        alternativas: [
            { texto: "Enfrento com coragem e liderança imediata.", princesa: "Mulan" },
            { texto: "Procuro soluções criativas e mantenho o otimismo.", princesa: "Ana" },
            { texto: "Analiso com calma para agir de forma independente.", princesa: "Jasmine" },
            { texto: "Protejo quem amo usando minha força interior.", princesa: "Elsa" },
            { texto: "Escuto minha intuição e busco harmonia.", princesa: "Pocahontas" }
        ]
    },
    {
        enunciado: "3. Se você pudesse escolher um lugar mágico para morar, qual seria?",
        alternativas: [
            { texto: "Um castelo à beira do mar com vista para o oceano.", princesa: "Ariel" },
            { texto: "Uma torre cheia de luz, tintas e espaço.", princesa: "Rapunzel" },
            { texto: "Um palácio aconchegante perto de uma floresta encantada.", princesa: "Aurora" },
            { texto: "Um refúgio na natureza entre rios e florestas.", princesa: "Pocahontas" },
            { texto: "Um castelo clássico e elegante no topo do reino.", princesa: "Cinderela" }
        ]
    },
    {
        enunciado: "4. Qual destas qualidades seus amigos mais admiram em você?",
        alternativas: [
            { texto: "Gentileza, empatia e elegância.", princesa: "Cinderela" },
            { texto: "Espírito aventureiro e curiosidade sobre tudo.", princesa: "Ariel" },
            { texto: "Sabedoria, paciência e amor pela leitura.", princesa: "Bela" },
            { texto: "Determinação inabalável e dedicação.", princesa: "Tiana" },
            { texto: "Independência e coragem de ser quem sou.", princesa: "Merida" }
        ]
    },
    {
        enunciado: "5. Se alguém muito próximo precisasse de ajuda rápida, você:",
        alternativas: [
            { texto: "Iria ao resgate sem pensar duas vezes.", princesa: "Ana" },
            { texto: "Usaria minha inteligência e estratégia para resolver.", princesa: "Mulan" },
            { texto: "Questionaria qualquer regra injusta para defender o certo.", princesa: "Jasmine" },
            { texto: "Faria um grande sacrifício para proteger a todos.", princesa: "Elsa" },
            { texto: "Usaria a gentileza para transformar a situação.", princesa: "Cinderela" }
        ]
    },
    {
        enunciado: "6. Como você escolhe suas decisões mais importantes?",
        alternativas: [
            { texto: "Sigo a intuição e o que o coração diz.", princesa: "Pocahontas" },
            { texto: "Peso prós e contras com bastante lógica.", princesa: "Bela" },
            { texto: "Tomo a decisão mais prática que ajude meus planos.", princesa: "Tiana" },
            { texto: "Decido com entusiasmo, pronta para a aventura.", princesa: "Ariel" },
            { texto: "Consulto meus sentimentos e o bem dos outros.", princesa: "Aurora" }
        ]
    },
    {
        enunciado: "7. O que você faz se encontrar uma regra com a qual discorda?",
        alternativas: [
            { texto: "Enfrento abertamente e luto para mudar.", princesa: "Jasmine" },
            { texto: "Sigo meu próprio caminho sem aceitar imposição.", princesa: "Merida" },
            { texto: "Encontro uma forma inteligente e discreta de contornar.", princesa: "Mulan" },
            { texto: "Mantenho a paciência até o momento certo.", princesa: "Cinderela" },
            { texto: "Vejo o lado bom, mas preservo minha liberdade.", princesa: "Rapunzel" }
        ]
    },
    {
        enunciado: "8. Qual é o seu ambiente perfeito para relaxar?",
        alternativas: [
            { texto: "Um jardim ensolarado cheio de flores.", princesa: "BrancaDeNeve" },
            { texto: "Uma biblioteca silenciosa com livros incríveis.", princesa: "Bela" },
            { texto: "Um campo aberto ao vento com espaço livre.", princesa: "Merida" },
            { texto: "Um quarto confortável para sonhar acordada.", princesa: "Aurora" },
            { texto: "Um espaço calmo e organizado para pensar.", princesa: "Tiana" }
        ]
    },
    {
        enunciado: "9. O que te traz mais energia no dia a dia?",
        alternativas: [
            { texto: "Descobrir novidades e explorar coisas diferentes.", princesa: "Ariel" },
            { texto: "Proteger e trazer paz para as pessoas ao meu redor.", princesa: "Elsa" },
            { texto: "Ver meu esforço virando resultados de verdade.", princesa: "Tiana" },
            { texto: "Espalhar otimismo e fazer os outros sorrirem.", princesa: "BrancaDeNeve" },
            { texto: "Aprender algo novo e expandir meus horizontes.", princesa: "Rapunzel" }
        ]
    },
    {
        enunciado: "10. Qual destas atitudes mais representa a sua força?",
        alternativas: [
            { texto: "A coragem de decidir meu próprio futuro.", princesa: "Merida" },
            { texto: "Nunca perder a fé e a bondade no coração.", princesa: "Cinderela" },
            { texto: "A bravura de superar medos por quem eu amo.", princesa: "Mulan" },
            { texto: "A determinação de trabalhar firme pelos meus sonhos.", princesa: "Tiana" },
            { texto: "A lealdade de apoiar minha família e amigos aconteça o que acontecer.", princesa: "Ana" }
        ]
    }
];

// Elementos HTML
const telaInicial = document.querySelector(".tela-inicial");
const telaJogo = document.querySelector(".tela-jogo");
const telaResultado = document.querySelector(".tela-resultado");
const btnIniciar = document.querySelector(".btn-iniciar");
const btnReiniciar = document.querySelector(".btn-reiniciar");
const campoEnunciado = document.querySelector(".enunciado");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

let posicaoAtual = 0;

function mudarFundo(linkImagem) {
    document.body.style.backgroundImage = `linear-gradient(rgba(30, 10, 20, 0.75), rgba(15, 5, 10, 0.85)), url('${linkImagem}')`;
}

// Define a foto inicial
mudarFundo(FOTO_TELA_INICIAL);

btnIniciar.addEventListener("click", () => {
    telaInicial.classList.add("esconder");
    telaJogo.classList.remove("esconder");
    mudarFundo(FOTO_PERGUNTAS);
    mostrarPergunta();
});

function mostrarPergunta() {
    if (posicaoAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = perguntas[posicaoAtual];
    campoEnunciado.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.classList.add("btn-opcao");
        
        botao.addEventListener("click", () => {
            pontuacao[alternativa.princesa]++;
            posicaoAtual++;
            mostrarPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

// NOVA LÓGICA: Escolhe a vencedora e sorteia em caso de empate entre as mais votadas!
function calcularPrincesaVencedora() {
    let maiorPontuacao = -1;
    let candidatasVencedoras = [];

    // Encontra qual é a maior pontuação atingida
    for (const princesa in pontuacao) {
        if (pontuacao[princesa] > maiorPontuacao) {
            maiorPontuacao = pontuacao[princesa];
        }
    }

    // Pega TODAS as princesas que empataram com essa pontuação máxima
    for (const princesa in pontuacao) {
        if (pontuacao[princesa] === maiorPontuacao) {
            candidatasVencedoras.push(princesa);
        }
    }

    // Sorteia uma entre as empatadas (evita cair sempre na mesma!)
    const indiceSorteado = Math.floor(Math.random() * candidatasVencedoras.length);
    return candidatasVencedoras[indiceSorteado];
}

function mostrarResultado() {
    telaJogo.classList.add("esconder");
    telaResultado.classList.remove("esconder");
    
    const princesaVencedora = calcularPrincesaVencedora();
    textoResultado.textContent = resultadosPrincesas[princesaVencedora];
    
    // Altera o fundo para a foto da princesa vencedora
    mudarFundo(FOTOS_PRINCESAS[princesaVencedora]);
}

btnReiniciar.addEventListener("click", () => {
    window.location.reload();
});