namespace SpriteKind {
    export const deepsea = SpriteKind.create()
    export const Bubble = SpriteKind.create()
    export const Mask = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bubble, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    statusbar.value += 2
})
let aBubble: Sprite = null
let statusbar: StatusBarSprite = null
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 20
statusbar.setColor(2, 1)
statusbar.setBarBorder(1, 2)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.attachToSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
let background_sprite = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................f.......................................................................f................................................
    .......................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Mask)
background_sprite.z = 1
background_sprite.setFlag(SpriteFlag.Ghost, true)
game.onUpdateInterval(500, function () {
    aBubble = sprites.createProjectileFromSide(img`
        . 3 . 
        2 . 3 
        . 3 . 
        `, 0, -50)
    aBubble.setPosition(randint(32, 112), 80)
    aBubble.setKind(SpriteKind.Bubble)
    statusbar.value += -1
})