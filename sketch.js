// GameStates
var START, PLAY, END, gameState;
START = 1;
PLAY = 2;
END = 0;
gameState = START;

// Start screen
var startScreenTitle;

// start screen images
var BackgroundImage, startScreenTitleImage;

// Start screen buttons
var playButton, howToPlayButton, creditsButton, scoreButton, howToPlayBackButton1;

// button images
var howToPlayButtonImage, playButtonImage, creditsButtonImage, scoreButtonImage, backButtonImage1;

//how to play screen
var howToPlayScreen;

// text sprite
var textSprite, textSprite2, textSprite3, textSprite4, textSprite5, textSprite6;

// text images
var textImage1, textImage2, textImage3, textImage4, textImage5, textImage6;

// player and player image
var player, playerImage, shot, shotImage, wait, shotGroup;
wait = false;

// obstacle and obstacle images
var obstacle, obsImage, obsImage2, imgRand,obsGroup;

// score
var score;
score = 0;
localStorage["Highscore"] = 0;

function preload() {
    // start screen images
    BackgroundImage = loadImage("./startScreenAssets/startScreenBackground.jpg");
    startScreenTitleImage = loadImage("./startScreenAssets/TitleShooterGame.png");

    // loading  button images
    howToPlayButtonImage = loadImage("./buttonAssets/howToPlayButtonImage.png");
    playButtonImage = loadImage("./buttonAssets/playButtonImage.png");
    scoreButtonImage = loadImage("./buttonAssets/scoreButtonImage.png");
    backButtonImage1 = loadImage("./buttonAssets/backButtonImage1.png");

    // load text images
    textImage1 = loadImage("./textImages/textSpriteImage1.png");
    textImage2 = loadImage("./textImages/textImage2.png");
    textImage3 = loadImage("./textImages/textImage3.png");
    textImage4 = loadImage("./textImages/textImage4.png");
    textImage5 = loadImage("./textImages/textImage5.png");
    textImage6 = loadImage("./textImages/textImage6.png");

    // load player image
    playerImage = loadImage("./PlayerandObstacleImages/playerImage.png");

    // shot images
    shotImage = loadImage("./PlayerandObstacleImages/blast.png");

    // load obstacle 1 images
    obsImage = loadImage("./PlayerandObstacleImages/obsImage.png");
    obsImage2 = loadImage("./PlayerandObstacleImages/obsImage2.png");
}

function setup() {
    createCanvas(400, 400);

    // start screen title
    startScreenTitle = createSprite(200, 50, 10, 10);
    startScreenTitle.addImage(startScreenTitleImage);
    startScreenTitle.scale = 0.25;
    startScreenTitle.visible = true;

    // how to play button
    howToPlayButton = createSprite(200, 150, 10, 10);
    howToPlayButton.addImage(howToPlayButtonImage);
    howToPlayButton.scale = 0.25;
    howToPlayButtonImage.visible = true;


    //play button
    playButton = createSprite(200, 195, 10, 10);
    playButton.addImage(playButtonImage);
    playButton.scale = 0.25;
    playButton.visible = true;

    // score button
    scoreButton = createSprite(200, 235, 10, 10);
    scoreButton.addImage(scoreButtonImage);
    scoreButton.scale = 0.25;
    scoreButton.visible = true;

    // how to play screen
    howToPlayScreen = createSprite(200, -200, 400, 400);
    howToPlayScreen.shapeColor = 'blue';
    howToPlayScreen.visible = false;

    // text sprite
    textSprite = createSprite(200, -200, 10, 10);
    textSprite.visible = false;

    textSprite2 = createSprite(200, -200, 10, 10);
    textSprite2.visible = false;


    textSprite3 = createSprite(200, -200, 10, 10);
    textSprite3.visible = false;

    textSprite4 = createSprite(200, -200, 10, 10);
    textSprite4.visible = false;

    textSprite5 = createSprite(200, -200, 10, 10);
    textSprite5.visible = false;

    textSprite6 = createSprite(200, -200, 10, 10);
    textSprite6.visible = false;

    // back button for how to play screen
    howToPlayBackButton1 = createSprite(200, -200, 10, 10);
    howToPlayBackButton1.visible = false;

    // player
    player = createSprite(200, -390, 10, 10);
    player.visible = false;

    // adds player image to player
    player.addImage(playerImage)
    player.scale = 0.25;

    // obs group
    obsGroup = new Group;

    // shot group
    shotGroup = new Group;
}

function draw() {
    background(BackgroundImage);

    // game loops
    if (gameState === START) {
        // how to play button functionality
        if (mousePressedOver(howToPlayButton)) {
            howToPlayScreen.visible = true;
            howToPlayScreen.y = 200;

            para();
        }

        // back button functionality for how to play
        if (mousePressedOver(howToPlayBackButton1)) {
            howToPlayScreen.visible = false;
            howToPlayScreen.y = -200;

            paraReset();
        }

        // Play button functionality
        if (mousePressedOver(playButton)) {
            gameState = PLAY;
        }
    } else if (gameState === PLAY) {
        // makes all the start screen thinsg invisible
        startScreenTitle.visible = false;
        howToPlayButton.visible = false;
        playButton.visible = false;
        scoreButton.visible = false;

        // score display
        textSize(20);
        fill("white");
        text("Score: " + score, 300, 25);
        text("Highscore: " + localStorage["Highscore"], 25, 25);

        // player display
        player.y = 380;
        player.visible = true;

        // player movement
        player.x = mouseX;

        // spawn obstacle
        spawnEnemies1();

        // player shoots
        if (keyDown("space") && wait === false) {
            shoot();
            wait = true;
            setTimeout(waitTime, 1000);
        }

        // kill enemy with shot
        if (shotGroup.isTouching(obsGroup)) {
            obsGroup.destroyEach();
            shotGroup.destroyEach();
            score += 1;
        }
    } else if (gameState === END) {

    }

    // draw the sprites
    drawSprites();
}

function shoot() {
    shot = createSprite(player.x, player.y + -50, 10, 30);
    shot.velocityY = -3;
    shot.addImage(shotImage);
    shot.scale = 0.5;

    shotGroup.add(shot);
}

function waitTime() {
    wait = false;
}