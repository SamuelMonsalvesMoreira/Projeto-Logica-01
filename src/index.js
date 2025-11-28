// src/index.js
console.log("�� Desafio DIO - Lógica de Programação");
console.log("=====================================");
console.log("📅 Data:", new Date().toLocaleString('pt-BR'));
console.log("📂 Diretório:", __dirname);
console.log("📄 Arquivo:", __filename);
console.log("⚡ Node.js:", process.version);
console.log("=====================================");

// Exemplo de lógica básica
function exemploLogica() {
    console.log("\n🧠 Exemplo de Lógica:");
    
    for (let i = 1; i <= 5; i++) {
        if (i % 2 === 0) {
            console.log(`${i} é par`);
        } else {
            console.log(`${i} é ímpar`);
        }
    }
}

exemploLogica();
console.log("\n✅ Projeto executado com sucesso!");
