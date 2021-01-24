class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gS = data.val();})
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gS === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
