class Contestant {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getPayerinfo(){
      var contestantInfoRef=database.ref("players");
      contestantInfoRef.on("value",(data)=>{
        allContestant=data.val();
  
      })
    }
  }
  