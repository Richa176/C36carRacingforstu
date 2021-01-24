var canvas, backgroundImage;

var gS = 0;
var playerCount1;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  // following instruction - in next class
  //if(playerCount1 === 4){
  //  game.update(1);
 // }
}
