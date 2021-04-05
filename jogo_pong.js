
// variaveis da bolinha
let Xbolinha = 300;
let Ybolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaves da raquete
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

// placar do jogo
let meusPonto = 0;
let pontosDoOponente = 0;

// variaves do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}
  
function setup() {
    createCanvas(600, 400);
    trilha.loop();
  
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verifivaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete)
    mostraRaquete(xRaqueteOponente,yRaqueteOponente ); 
    //movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
    
}   






function mostraBolinha() {
  circle(Xbolinha, Ybolinha, diametro)
}

function movimentaBolinha(){
  Xbolinha += velocidadeXbolinha;
  Ybolinha += velocidadeYbolinha;
}

function verifivaColisaoBorda(){
  if(Xbolinha + raio > width || Xbolinha -raio < 0){
      velocidadeXbolinha *= -1;
    }
    if(Ybolinha + raio > height || Ybolinha -raio < 0) {
      velocidadeYbolinha *= -1;
    }
}

function mostraRaquete(x, y){
  rect(x, y , raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function verificaColisaoRaquete() {
    if (Xbolinha - raio < xRaquete + raqueteComprimento
        && Ybolinha - raio < yRaquete + raqueteAltura
        && Ybolinha + raio > yRaquete) {
        velocidadeXbolinha *= -1;
        raquetada.play();
    }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = Ybolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente

}
function verificaColisaoRaquete(x,y) {
  colidiu =  collideRectCircle(x , y,raqueteComprimento , raqueteAltura,Xbolinha , Ybolinha,raio );
  if(colidiu) {
    velocidadeXbolinha *= -1;
    raquetada.play();
    
  }
   
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(150, 10,40,20)
  fill(255)
  text(meusPonto, 170, 26);
  fill(color(255, 140, 0))
  rect(450,10, 40, 20);
  fill(255)
  text(pontosDoOponente, 470, 26)
}

function marcaPonto(){
  if(Xbolinha > 590){
    meusPonto += 1;
    ponto.play();
    
  }
  if(Xbolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}