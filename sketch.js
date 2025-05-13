function setup() {
  createCanvas(400, 400);
}
let xjogador = [0, 0, 0, 0];
let yjogador = [75, 150, 225,300];
let jogador = ["🇧🇷", "🇦🇷", "🇵🇹", "🇫🇷" ];
let teclas = ["a", "s", "d", ];
let quantidade = jogador.length;
           

function draw() {
 ativaJogo();
 desenhaJogadores(); 
 desenhaLinhaDeChegada();    
 verificaVencedor();
 }
  function desenhaJogadores() {
  textSize(40);
    for (let i =0; i <4; i++){
  text(jogador[i], xjogador[i], yjogador[i]);
    }
}

  function desenhaLinhaDeChegada ()  {
    fill("white")
   rect(350,0,20,400);
   fill("black")  
   for(let yAtual= 20; yAtual < 400; yAtual += 20) {
     rect(350, yAtual, 10, 10); 
   
     for(let yAtual= 10; yAtual < 400; yAtual += 20) {
     rect(360, yAtual, 10, 10); 
    }  
  }
  }

  function verificaVencedor() {
  for (let i = 0; i < 4; i++) {
    if (xjogador[i] > 350) {
      text(jogador[i] + "Achou EZZ ☠ ", 50, 200);
      noLoop();
    }
  }
}


function ativaJogo() {
  if (focused == true) {
    background("grey");
  } else {  
    background("red") ;
  } 
}
function keyReleased() {
    if (key === "z") {
        xjogador[0] += random(5);
    }
    if(key === "v"){
        xjogador[1] += random(2);
    }
 if(key === "m"){
        xjogador[2] += random(5);
    }
   if(key === "j"){
        xjogador[3] += random(5);
    }
}

 