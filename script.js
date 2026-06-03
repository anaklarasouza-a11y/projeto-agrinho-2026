// =================================================================
// PROJETO AGRINHO 2026 - SCRIPT INTERATIVO
// Objetivo: Conscientização sobre o uso da água e monitoramento do solo
// =================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("🌱 Projeto Agrinho 2026 carregado com sucesso!");
    
    // Inicializa as funções principais
    inicializarCalculadora();
    inicializarSimuladorSolo();
});

/**
 * 1. CALCULADORA DE ECONOMIA DE ÁGUA (Gotejamento vs. Aspersão convencional)
 */
function inicializarCalculadora() {
    const btnCalcular = document.getElementById("btn-calcular");
    
    if (!btnCalcular) return; // Evita erros se o botão não existir na página

    btnCalcular.addEventListener("click", () => {
        const areaInput = document.getElementById("input-area");
        const area = parseFloat(areaInput.value);

        if (isNaN(area) || area <= 0) {
            alert("Por favor, insira um tamanho de área válido (maior que zero).");
            return;
        }

        // Dados médios de consumo (Litros por hectare/dia)
        const consumoAspersao = 45000; // Aspersão comum gasta mais
        const consumoGotejamento = 27000; // Gotejamento é mais eficiente (economia de ~40%)

        const gastoTotalAspersao = area * consumoAspersao;
        const gastoTotalGotejamento = area * consumoGotejamento;
        const aguaEconomizada = gastoTotalAspersao - gastoTotalGotejamento;

        // Exibe os resultados na tela (Procura elementos com esses IDs no HTML)
        atualizarTexto("res-aspersao", `${gastoTotalAspersao.toLocaleString('pt-BR')} litros`);
        atualizarTexto("res-gotejamento", `${gastoTotalGotejamento.toLocaleString('pt-BR')} litros`);
        atualizarTexto("res-economia", `${aguaEconomizada.toLocaleString('pt-BR')} litros por dia! ✨`);

        // Mensagem de impacto ecológico
        const mensagemImpacto = `Com a irrigação por gotejamento, você preserva o equivalente a ${(aguaEconomizada / 20).toFixed(0)} galões de água de 20 litros TODOS OS DIAS!`;
        atualizarTexto("res-impacto", mensagemImpacto);
    });
}

/**
 * 2. SIMULADOR DE SENSOR DE UMIDADE DO SOLO
 * Simula a leitura que um sensor real (como o do Arduino) faria no campo.
 */
function inicializarSimuladorSolo() {
    const btnAtualizarSensor = document.getElementById("btn-sensor");
    
    if (!btnAtualizarSensor) return;

    btnAtualizarSensor.addEventListener("click", () => {
        // Gera uma umidade aleatória entre 15% e 95%
        const umidadeSimulada = Math.floor(Math.random() * (95 - 15 + 1)) + 15;
        const elementoStatus = document.getElementById("status-solo");
        const elementoAlerta = document.getElementById("alerta-solo");

        if (!elementoStatus || !elementoAlerta) return;

        elementoStatus.innerText = `${umidadeSimulada}%`;

        // Lógica de tomada de decisão baseada na umidade
        if (umidadeSimulada < 40) {
            elementoStatus.style.color = "#e74c3c"; // Vermelho
            elementoAlerta.innerText = "🚨 Alerta: Solo Seco! Ligando a irrigação automática...";
            elementoAlerta.className = "alerta perigo";
        } else if (umidadeSimulada >= 40 && umidadeSimulada <= 75) {
            elementoStatus.style.color = "#2ecc71"; // Verde
            elementoAlerta.innerText = "✅ Solo Ideal: Umidade perfeita para o plantio. Sistema em espera.";
            elementoAlerta.className = "alerta ideal";
        } else {
            elementoStatus.style.color = "#3498db"; // Azul
            elementoAlerta.innerText = "⚠️ Atenção: Solo Encharcado! Desligando qualquer fluxo de água.";
            elementoAlerta.className = "alerta encharcado";
        }
    });
}

// Função auxiliar para atualizar o texto na tela com segurança
function atualizarTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerText = texto;
    }
}
