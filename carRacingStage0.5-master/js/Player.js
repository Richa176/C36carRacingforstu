class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){playerCount1 = data.val();})
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(n1){
    var playerIndex = "player" + playerCount1;
    console.log("playerIndex: "+playerIndex);
    database.ref(playerIndex).set({
      name:n1
    });
  }
}
