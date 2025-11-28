// src/index.js
console.log("🚀 Desafio DIO - Lógica de Programação");
console.log("=====================================");
console.log("📅 Data: 27/11/2025");
console.log("=====================================");

let nomeHeroi;
let xpHeroi;
let nivel; // ✅ Declarar a variável nivel

// Atribuindo o resultado do prompt às variáveis
nomeHeroi = prompt("Digite o nome do seu herói:");
xpHeroi = parseInt(prompt("Digite o XP do seu herói:")); // ✅ Converter para número

if(xpHeroi < 1000){
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivel = "Ascendente"; // ✅ Adicionar ponto e vírgula
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal"; // ✅ Adicionar ponto e vírgula
} else {
    nivel = "Radiante";
}

// ✅ Corrigir: mostrar nivel em vez de xpHeroi
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);