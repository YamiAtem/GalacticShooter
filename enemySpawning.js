function spawnEnemies1() {
    if (frameCount % 120 === 0) {
        obstacle = createSprite(random(30, 390), -10, 10, 10);
        obstacle.velocityY = 3 + score%10;

        console.log(score%10)

        imgRand = Math.round(random(1, 2));

        if (imgRand === 1) {
            obstacle.addImage(obsImage);
        }else if (imgRand === 2) {
            obstacle.addImage(obsImage2);
        }

        obstacle.scale = 0.35;

        obstacle.lifetime = 200;
        
        obsGroup.add(obstacle);
    }
}

function spawnEnemies2() {
    if (frameCount % 240 === 0 && score % 20) {
        
    }
}