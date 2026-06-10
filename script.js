```javascript
/* ==========================================
   AGRINHO 2026 - SCRIPT.JS
   Agro Forte, Futuro Sustentável
========================================== */

// MENSAGEM DE BOAS-VINDAS

window.addEventListener("load", () => {

    console.log("🌱 Bem-vindo ao Projeto Agrinho 2026!");

});

// ==========================================
// EFEITO DIGITAÇÃO
// ==========================================

const textoHero =
"Agro Forte, Futuro Sustentável";

const elementoTexto =
document.querySelector(".hero p");

let contadorTexto = 0;

function escreverTexto() {

    if (!elementoTexto) return;

    elementoTexto.textContent =
    textoHero.slice(0, contadorTexto);

    contadorTexto++;

    if(contadorTexto <= textoHero.length){

        setTimeout(escreverTexto, 100);

    }
}

escreverTexto();

// ==========================================
// ANIMAÇÃO DOS CARDS AO ROLAR
// ==========================================

const cards =
document.querySelectorAll(".card");

const observador =
new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";
            entrada.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity="0";
    card.style.transform=
    "translateY(50px)";
    card.style.transition=
    "1s";

    observador.observe(card);

});

// ==========================================
// CONTADOR DE ESTATÍSTICAS
// ==========================================

const numeros =
document.querySelectorAll(".numero h2");

function animarNumero(){

    numeros.forEach(numero=>{

        const alvo =
        parseInt(numero.innerText);

        if(isNaN(alvo)) return;

        let atual = 0;

        const incremento =
        alvo / 100;

        const contador = setInterval(()=>{

            atual += incremento;

            numero.innerText =
            Math.floor(atual);

            if(atual >= alvo){

                numero.innerText = alvo;
                clearInterval(contador);

            }

        },20);

    });

}

const secaoNumeros =
document.querySelector(".estatisticas");

if(secaoNumeros){

const observadorNumeros =
new IntersectionObserver((entrada)=>{

    if(entrada[0].isIntersecting){

        animarNumero();

        observadorNumeros.disconnect();

    }

});

observadorNumeros.observe(secaoNumeros);

}

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

const botaoTopo =
document.createElement("button");

botaoTopo.innerHTML = "⬆";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.border = "none";
botaoTopo.style.background = "#2e7d32";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        botaoTopo.style.display = "block";

    }

    else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==========================================
// MENU ATIVO
// ==========================================

const links =
document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let atual = "";

    document.querySelectorAll("section")
    .forEach(secao=>{

        const topo =
        secao.offsetTop - 200;

        if(window.scrollY >= topo){

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("ativo");

        if(link.href.includes(atual)){

            link.classList.add("ativo");

        }

    });

});

// ==========================================
// FRASES MOTIVACIONAIS
// ==========================================

const frases = [

"🌱 Pequenas ações geram grandes colheitas.",

"🚜 Tecnologia e sustentabilidade caminham juntas.",

"🌎 O futuro começa com atitudes conscientes.",

"💧 Preservar a água é preservar a vida.",

"🌳 O campo produz, a natureza agradece."

];

function fraseAleatoria(){

    const indice =
    Math.floor(Math.random()*frases.length);

    console.log(frases[indice]);

}

setInterval(fraseAleatoria,10000);

// ==========================================
// EFEITO PARALLAX
// ==========================================

window.addEventListener("scroll", ()=>{

    const header =
    document.querySelector("header");

    if(header){

        header.style.backgroundPositionY =
        window.scrollY * 0.5 + "px";

    }

});

// ==========================================
// GALERIA COM ZOOM
// ==========================================

const imagens =
document.querySelectorAll(".galeria img");

imagens.forEach((img)=>{

    img.addEventListener("click", ()=>{

        const tela =
        document.createElement("div");

        tela.style.position="fixed";
        tela.style.top="0";
        tela.style.left="0";
        tela.style.width="100%";
        tela.style.height="100%";
        tela.style.background=
        "rgba(0,0,0,0.9)";
        tela.style.display="flex";
        tela.style.justifyContent="center";
        tela.style.alignItems="center";

        const imagemGrande =
        document.createElement("img");

        imagemGrande.src = img.src;

        imagemGrande.style.maxWidth="90%";
        imagemGrande.style.maxHeight="90%";

        tela.appendChild(imagemGrande);

        document.body.appendChild(tela);

        tela.addEventListener("click", ()=>{

            tela.remove();

        });

    });

});

// ==========================================
// PARTICULAS AGRINHO
// ==========================================

for(let i=0;i<25;i++){

    const folha =
    document.createElement("div");

    folha.innerHTML = "🍃";

    folha.style.position="fixed";

    folha.style.left=
    Math.random()*100+"vw";

    folha.style.top=
    "-50px";

    folha.style.fontSize=
    Math.random()*20+15+"px";

    folha.style.opacity="0.5";

    folha.style.pointerEvents="none";

    folha.style.zIndex="1";

    document.body.appendChild(folha);

    let posicao = -50;

    setInterval(()=>{

        posicao += 2;

        folha.style.top =
        posicao+"px";

        folha.style.transform =
        `rotate(${posicao}deg)`;

        if(posicao > window.innerHeight){

            posicao = -50;

            folha.style.left =
            Math.random()*100+"vw";

        }

    },50);

}

// ==========================================
// RELÓGIO EM TEMPO REAL
// ==========================================

const relogio =
document.createElement("div");

document.body.appendChild(relogio);

relogio.style.position="fixed";
relogio.style.top="20px";
relogio.style.right="20px";
relogio.style.background="#1b5e20";
relogio.style.color="white";
relogio.style.padding="10px";
relogio.style.borderRadius="10px";
relogio.style.zIndex="999";

setInterval(()=>{

    const agora = new Date();

    relogio.innerHTML =
    agora.toLocaleTimeString("pt-BR");

},1000);

// ==========================================
// FORMULÁRIO
// ==========================================

const formulario =
document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "🌱 Obrigado por contribuir com o Agrinho 2026!"
    );

    formulario.reset();

});

}

// ==========================================
// FINAL
// ==========================================

console.log(
"🚜 Sistema Agrinho 2026 carregado com sucesso!"
);
```
