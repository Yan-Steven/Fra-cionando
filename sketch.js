var tela = 1;
var a= 175, b= 350, c= 150, d= 150; // Coordenadas nave
var x= 130, y= 150, largura = 250, altura = 55; //Coordenadas botões iniciar
var xt= 107, yt=253; // Coordenadas Tiro
var xe= 250, ye= 350 // Coordenadas elipse do tiro
var disparo= false;
var xr = 0, yr = -50 // 1 fração
var xr2 = 0, yr2 = -125 // 2 fração
var xr3 = 0, yr3 = -200 // 3 fração
var f= [];
var xd = 0, yd= 0, zd= 0, wd=0;
var vidas= 3;
var pontos= 0;
var munição = 0 
var mult=0;

function preload() {
  img = loadImage('Background-22.png');
  img2 = loadImage('Background-4.png');
  img3 = loadImage('Background-3.png');
  img4 = loadImage('841f39ac405ff3d8cc2c0be00fcfbb98-1.gif') // nave principal
  imgTiro = loadImage('tiro.png')
  img8 = loadImage('WhatsApp Image 2020-07-20 at 17.55.51.jpeg')
  img9 = loadImage('WhatsApp Image 2020-07-20 at 19.29.41.jpeg')
  img5 = loadImage('estrela-da-morte.gif')
  explo = loadSound('ExplosÃ£o_com_Som_-_Efeito_especial_para.mp3');
  fundo = loadSound('star wars cantina.mp3');
}

function setup() {
  image(img, 0, 0);
  createCanvas(500, 500);
  xr= random(50, 250)
  xr2= random(250, 480)
  xr3= random(50, 480)
  fundo.setVolume(0.05);
  fundo.play();
  explo.setVolume(0);
  explo.play();
}


function draw() {
  //Tela de menu
  if(tela==1){
  image(img, -100, 0)
  strokeWeight(1)
  stroke(20)
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLDITALIC);    
  fill(190, 190, 190)
  text("Fra", 167, 55)
  text("/", 205, 65);
  text("cionando", 300, 65); 
    
    
  fill(178, 34, 34, 100);
  if(mouseX> x && mouseX<x+largura && mouseY>y && mouseY<y+altura){  
    rect(x, y, largura, altura, 15);
    fill(178, 34, 34)
    if (mouseIsPressed) {
      tela = 2
    }
} //Iniciar 
    
  if(mouseX>x && mouseX<x+largura && mouseY>y+100 && mouseY<y+100 +altura){
  rect(x, y+100, largura, altura, 15);
  fill(178, 34, 34)
    if (mouseIsPressed) {
      tela = 3
    }
  } // Instruções
    
    if(mouseX>x && mouseX<x+largura && mouseY>y+200 && mouseY<y+200 +altura){
  rect(x, y+200, largura, altura, 15);
  fill(178, 34, 34)
  if (mouseIsPressed) {
      tela = 4;
    }
  } //Créditos
  
  fill(0, 0, 0)
  text("Iniciar", 250, 192)  
  text("Instruções", 260, 290)
  text("Créditos", 260, 390)    

  }
  //Tela pós iniciar
  if(tela==2){
  image(img, -700, -500)
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLDITALIC);
  strokeWeight(1)
  stroke(20)
  fill(255, 255, 255)
  text("Dificuldade", 250, 65);
    
  fill(178, 34, 34, 100); // para os retangulos

  textSize(20)
  textAlign(RIGHT, BASELINE); // para as instruções dos niveis
    
  //Fácil 
  if(mouseX>13 && mouseX<135 && mouseY>150 && mouseY<205){
  rect(15, 153, 120, 50, 15);
  fill(255, 255, 255)  // cor das letras
  let f = 'Identificar frações equivalentes';
  text(f,420, 130, 70, 80);
  if (mouseIsPressed) {
    tela = 5
  }
  }
  //Médio
  if(mouseX>13 && mouseX<155 && mouseY>245 && mouseY<300){
  rect(13, 250, 135, 50, 15);
  fill(255, 255, 255)  
  let f = 'Identificar frações equivalentes';
  text(f,420, 130, 70, 80);
    
  let m = '+Resultado de uma divisão';
  text(m,420, 230, 70, 100);
  if (mouseIsPressed) {
    tela = 6
  }
  }
  //Difícil
  if(mouseX>13 && mouseX<155 && mouseY>347 && mouseY<400){
  rect(15, 350, 135, 50, 15);
  fill(255, 255, 255);
  let f = 'Identificar frações equivalentes';
  text(f,420, 130, 70, 80);
    
  let m = '+Resultado de uma divisão';
  text(m,420, 230, 70, 100);
    
  let d = '+Porcentagem';
  text(d,420, 365, 70, 100);
  if (mouseIsPressed) {
    tela = 7
  }
  
  }
  fill(255, 255, 255)
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  text("Fácil", 70, 192)  
  text("Médio", 80, 290)
  text("Difícil", 80, 390)
    
  if(mouseX>347 && mouseX<483 && mouseY>427 && mouseY<470){
  fill(178, 34, 34, 100)
  rect(350, 430, 130, 40, 15)
  if (mouseIsPressed) {
  tela = 1
  }
  }
  fill(255, 255, 255)
  text("Voltar", 410, 465)
  }
  //Tela instruções
  if(tela==3){
  image(img3, -1000, 0)
  strokeWeight(1)
  stroke(20)
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLDITALIC);    
  fill(255, 255, 50)
  text("Instruções", 250, 50) 
    
  textSize(20)
  text("Ano: 5º ano fundamental", 129, 100);
  text("Matéria:", 50, 130);
  text("Habilidade (EF05MA04);", 210, 130);
  text("Habilidade (EF05MA03);", 210, 160);
  text("Habilidade (EF05MA06);", 210, 190);

  line(0, 62, width, 62);
  textAlign(LEFT, BASELINE);
  text('Ao iniciar o jogo, o jogador irá se deparar com uma espaçonave que possui uma munição representando uma fração que deverá ser atirada até o seu resultado equivalente, caso contrário irá perder.\nA cada 30 pontos realizados ao acertar sua conta, o jogo aumenta sua velocidade. Você possui apenas 3 vidas, boa sorte.', 10, 210, width);  
    
    if(mouseX> 375 && mouseX<477 && mouseY>445 && mouseY<485){  
    fill(178, 34, 34, 100)
    rect(375, 450, 100, 35, 15);
    if (mouseIsPressed) {
      tela = 1
    }
} 
    
    fill(255, 255, 50)
    text("Voltar", 395, 475)
  }
  //Tela créditos
  if(tela==4){
  image(img2, -300, -250);
  
  strokeWeight(1)
  stroke(20)
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLDITALIC);    
  fill(255, 255, 255)
  text("Créditos", 250, 50)  
    
    
  textSize(20)
  textAlign(RIGHT, BASELINE);
  text("Yan Steven", 120, 120)
  text("Desenvolvedor", 160, 150)
  
    
  textAlign(LEFT, BASELINE);
  text("Edinaldo Junior", 250, 100)
  text("Estudante de licenciatura", 250, 125)
  text("Em física.", 250, 150)

    if(mouseX> 375 && mouseX<477 && mouseY>445 && mouseY<485){  
    fill(0, 155, 155, 100)
    rect(375, 450, 100, 35, 15);
    if (mouseIsPressed) {
      tela = 1
    }
} 
    textSize(28)
    fill(255,255, 255)
    text("Voltar", 385, 478)
    
    image(img8, 300, 170, 150, 250)
    image(img9, 15, 170, 150, 250)
}
  //Jogo fácil
  if(tela==5){
    
  // Frações que irão cair
  ellipse(xr, yr, 60, 60);
  yr= yr + 1.5
  if(yr>700){
    yr= -100
    xr= random(50, 250)
  }
  ellipse(xr2, yr2, 60, 60);
  yr2= yr2 + 1.5
  if(yr2>700){
    yr2= -100
    xr2= random(250, 500)
  }
  ellipse(xr3, yr3, 60, 60);
  yr3= yr3 + 1.5
  if(yr3>700){
    yr3= -100
    xr3= random(50, 250)
  }
  ellipse(xe, ye, 15, 25); // elipse do tiro
  image(img2, -600, -250); // background
  image(img4, a, b, c, d); // giff da nave
    
  //movimentação nave   
  if(keyIsDown(LEFT_ARROW)){
     a= a-5
  }
  if(keyIsDown(RIGHT_ARROW)){
     a= a+5
  }
  if(keyIsDown(UP_ARROW)){
     b= b-5
  }
  if(keyIsDown(DOWN_ARROW)){
     b= b+5
  }

  // Condições tiro
  if(keyIsDown(32) &&  disparo == false){
    xt= a- 68, yt=b-97; // imagem do tiro // a= acompanhar nave
    xe= a+75, ye= b // centro do tiro
    disparo= true
  }
  if(disparo == true){
  image(imgTiro, xt, yt, 200, 200)
  yt= yt -12
  ye= ye -12
  if(yt<-90 && ye<-90){
    disparo= false
  }
  }

  // frações caindo
  textAlign(LEFT)
  textFont('fontBold')
  strokeWeight(5)
  stroke(40)
  textSize(30)
  fill (255, 255, 255)
  text("11", xr -30, yr)
  text("/12", xr-5, yr+12)

  text("2", xr2 -20, yr2)
  text("/8", xr2 -2, yr2+12)
    
  text("3", xr3 -20, yr3)
  text("/4", xr3 -2, yr3+12)
    
  //vidas e pontuação
  text("Vidas: "+vidas ,375,30)
    
  text("Pontuação: "+pontos ,10,30)

  
  //Munições disponíveis
    
  text("Munição:", 10, 410)
  let f0 = '22' +'\n'+'  /24'; // primeira elipse
  let f1 = '1' +'\n'+' /4';    // segunda elipse
  let f2 = '121' +'\n'+' /132';// primeira elipse
  let f3 = '9' +'\n'+' /12';    // terceira elipse
  let f4 = '4' +'\n'+' /16';    // segunda elipse
  let f5 = '27' +'\n'+' /36';    // terceira elipse 
  let f6 = '45' +'\n'+' /60';    // terceira elipse 
  let f7 = '25' +'\n'+' /100';    // segunda elipse 
  let f8 = '22' +'\n'+'  /24'; // primeira elipse  
    
  
  // Colisão nave com fração 1
  if(dist(xr, yr, a+70, b+50) < 80){
    xr = random (50, 480)
    yr= 0
    vidas= vidas - 1
}
  // Colisão nave com fração 2
  if(dist(xr2, yr2, a+70, b+50) < 80){
    xr2 = random (50, 480)
    yr2= 0
    vidas= vidas - 1
}
  // Colisão nave com fração 3
  if(dist(xr3, yr3, a+70, b+50) < 80){
    xr3 = random (50, 480)
    yr3= 0
    vidas= vidas - 1
}
  if(vidas<0){
  tela = 8
  }

  text(f0, 40, 425, 70, 80)
    
  // Colisão disparo com fração 1
  if(dist(xe, ye, xr, yr ) < 30){
    xr = random (50, 480)
    yr= -100
    disparo= false
    pontos= pontos+10
    text(f1, 40, 425, 70, 80)
} 
  // Colisão disparo com fração 2
  if(dist(xe, ye, xr2, yr2 ) < 30){
    xr2 = random (50, 480)
    yr2= -100
    disparo= false
    pontos= pontos+10
}
  // Colisão disparo com fração 3
  if(dist(xe, ye, xr3, yr3 ) < 30){
    xr3 = random (50, 480)
    yr3= -100
    disparo= false
    pontos= pontos+10
}
    


}
  //Jogo Médio
  if(tela==6){
  image(img3, -600, -250);
  image(img4, a, b, c, d);
  image(imgTiro, a -68, b -90, 200, 200);
    
  //movimentação nave   
  if(keyIsDown(LEFT_ARROW)){
     a= a-2
  }
  if(keyIsDown(RIGHT_ARROW)){
     a= a+2
  }
  if(keyIsDown(UP_ARROW)){
     b= b-2
  }
  if(keyIsDown(DOWN_ARROW)){
     b= b+2
  }
  }
  //Jogo difícil
  if(tela==7){
  image(img, -100, -250);
  image(img4, a, b, c, d);
  image(imgTiro, a -68, b -90, 200, 200);
    
  //movimentação nave   
  if(keyIsDown(LEFT_ARROW)){
     a= a-2
  }
  if(keyIsDown(RIGHT_ARROW)){
     a= a+2
  }
  if(keyIsDown(UP_ARROW)){
     b= b-2
  }
  if(keyIsDown(DOWN_ARROW)){
     b= b+2
  }
  }
  //Game over
  if(tela==8){
  image(img5, -150,0,800, 500); 
  fundo.setVolume(0);
  explo.setVolume(0.1);  
  textFont('fontBold')
  strokeWeight(5)
  stroke(40)
  textSize(30)
  fill (255, 255, 255)
  text("GAME OVER", 180, 200)
  textSize(28)
  text("APERTE ENTER PARA RECOMEÇAR", 15, 280)
    
  if(keyIsDown(ENTER)){
  tela = 1
  }
}
}