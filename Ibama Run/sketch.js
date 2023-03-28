var macaco 
var poste
var arvre
var ibama
var carroV
var macacoImg
var posteImg
var arvreImg
var ibamaImg
var carroVImg

function preload(){
    posteImg = loadImage('assets/poste.png')
    arvreImg = loadImage('assets/arvre.png')
    ibamaImg = loadImage('assets/ibama.png')
    carroVImg = loadImage('assets/inimigo.png')
    macacoImg = loadImage('assets/macaco1.png')
}

function setup(){
 createCanvas(2000,2000)
 
 
 

macaco = createSprite(displayWidth-1150,displayHeight-300,50,50)
macaco.addImage("macaco", macacoImg)
macaco.scale = 0.3
macaco.debug = true
macaco.setCollider("rectangle",0,0,200,200)

poste = createSprite(displayWidth-600,displayHeight-400,50,50)
poste.addImage("poste",posteImg)
poste.scale = 0.3
poste.debug = true
poste.setCollider("rectangle",0,0,50,600)

arvre = createSprite(displayWidth-200,displayHeight-500,50,50)
arvre.addImage("arvre",arvreImg)
arvre.scale = 0.3
arvre.debug = true
arvre.setCollider("rectangle",0,0,200,600)


}

function drawn(){
    background(0)


    drawnSprites()
}