const nomeHeroi = "Kryuger";
console.log(nomeHeroi);

let experiencia = 8578;
let resultado;

if (experiencia <= 1000){
     resultado = nomeHeroi + " Está no nível de Ferro"
} else if (experiencia >= 1001 && experiencia <= 2000){
     resultado = nomeHeroi + " Está no nível de Bronze"
} else if (experiencia >= 2001 && experiencia <= 3000){
     resultado = nomeHeroi + " Está no nível de Prata"
}
else if (experiencia >= 3001 && experiencia <= 4000){
     resultado = nomeHeroi + " Está no nível de Ouro"
} else if (experiencia >= 4001 && experiencia <= 5000){
     resultado = nomeHeroi + " Está no nível de Platina"
} else if (experiencia >= 5001 && experiencia <= 6000){
    resultado = nomeHeroi + " Está no nível de Diamante"
} else if (experiencia >= 6001 && experiencia <= 7000){
     resultado = nomeHeroi + " Está no nível de Mítico"
} else if (experiencia >= 7001 && experiencia <= 8000){
     resultado = nomeHeroi + " Está no nível de Lendário"
} else if (experiencia >= 8001 && experiencia <= 9000){
     resultado = nomeHeroi + " Está no nível de Divino"
} else {
    let resultado = nomeHeroi + " Está no nível de Deus"
}

console.log(resultado);
