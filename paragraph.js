function para() {
    textSprite.visible = true;
    textSprite.y = 50;
    textSprite.addImage(textImage1);
    textSprite.scale = 0.25;

    textSprite2.visible = true;
    textSprite2.y = 100;
    textSprite2.addImage(textImage2);
    textSprite2.scale = 0.25;

    textSprite3.visible = true;
    textSprite3.y = 150;
    textSprite3.addImage(textImage3);
    textSprite3.scale = 0.25;

    textSprite4.visible = true;
    textSprite4.y = 200;
    textSprite4.addImage(textImage4);
    textSprite4.scale = 0.25;

    textSprite5.visible = true;
    textSprite5.y = 250;
    textSprite5.addImage(textImage5);
    textSprite5.scale = 0.25;

    textSprite6.visible = true;
    textSprite6.y = 300;
    textSprite6.addImage(textImage6);
    textSprite6.scale = 0.25;

    howToPlayBackButton1.visible = true;
    howToPlayBackButton1.y = 350;
    howToPlayBackButton1.addImage(backButtonImage1);
    howToPlayBackButton1.scale = 0.25;
}

function paraReset() {
    textSprite.visible = false;
    textSprite.y = -50;

    textSprite2.visible = false;
    textSprite2.y = -100;

    textSprite3.visible = false;
    textSprite3.y = -150;

    textSprite4.visible = false;
    textSprite4.y = -200;

    textSprite5.visible = false;
    textSprite5.y = -250;

    textSprite6.visible = false;
    textSprite6.y = -300;

    howToPlayBackButton1.visible = false;
    howToPlayBackButton1.y = -350;
}