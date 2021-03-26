const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world, engine;
var bg;
var ground1, ground2;
var tile;


function preload() {

    bg = loadImage("bg.jpg");

}


function setup() {

    createCanvas(10000, 850);

    engine = Engine.create();
    world = engine.world;

    //creating objects from classes

    ground1 = new Tile1(100, 790, 200, 300);
    ground2 = new Tile2(400, 760, 200, 400);

    tile = new Tile3(720, 500, 300, 80);

}


function draw() {

    background(bg);

    Engine.update(engine);

    //displaying objects

    ground1.display();
    ground2.display();

    tile.display();

    drawSprites();
    
}   
