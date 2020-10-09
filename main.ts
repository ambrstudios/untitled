let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f 3 3 3 3 3 3 3 3 3 3 3 3 f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, 0)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_0`)
scene.cameraFollowSprite(mySprite)
