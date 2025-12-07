// src/index.js
console.log("🚀 Desafio DIO - Lógica de Programação");
console.log("=====================================");
console.log("📅 Data: 27/11/2025");


let nomeHeroi = "Flash";
let xpHeroi = 10005;
let nivel; 


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
    nivel = "Ascendente"; // 
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal"; // 
} else {
    nivel = "Radiante";
}
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

console.log("=====================================");