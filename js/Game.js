class Game {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        plane1 = createSprite(100,200);
        plane1 = addImage("plane1". plane1Img);

        plane2 = createSprite(300,200);
        plane2 = addImage("plane2". plane2Img);

        plane3 = createSprite(500,200);
        plane3 = addImage("plane3". plane3Img);

        plane4 = createSprite(700,200);
        plane4 = addImage("plane4". plane4Img);

        planes = [plane1, plane2, plane3, plane4];
    }
    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allplayers !== undefined){
             
            background("#C68767");
            //image()

            var index = 0;

            var x = 175;
            var y;

            for(var plr in allplayers){
                index = index + 1;

                x = x + 200;

                y=displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index - 1].y = y;

                if(index === player.index){
                    cars[index - 1].shapeColor = "green";
                    camera.position.x = displayWidth/2;
                    camera.position,y = cars[index-1].y
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
        }

        if(player.distance>3860){
            gameState = 2;
        }

        drawSprites();
    }

    end(){
        console.log("end");
    }
}