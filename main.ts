namespace SpriteKind {
    export const deepsea = SpriteKind.create()
    export const Bubble = SpriteKind.create()
    export const Mask = SpriteKind.create()
    export const Anchor = SpriteKind.create()
}
function initStatusBar () {
    status_anchor = sprites.create(img`
        . 
        `, SpriteKind.Anchor)
    status_anchor.setFlag(SpriteFlag.Ghost, true)
    status_anchor.setPosition(34, 36)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(status_anchor)
    statusbar.max = 100
    statusbar.value = 100
    statusbar.setColor(2, 1)
    statusbar.setBarBorder(1, 2)
    statusbar.positionDirection(CollisionDirection.Right)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.setVolume(0)
    game.over(false, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bubble, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    statusbar.value += 10
})
let aBubble: Sprite = null
let statusbar: StatusBarSprite = null
let status_anchor: Sprite = null
tiles.setTilemap(tilemap`level`)
let background_sprite = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff...............................................................................ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Mask)
background_sprite.z = 1
background_sprite.setFlag(SpriteFlag.Ghost, true)
let bubble_list = sprites.allOfKind(SpriteKind.Bubble)
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
controller.moveSprite(mySprite, 50, 50)
initStatusBar()
game.onUpdateInterval(500, function () {
    aBubble = sprites.createProjectileFromSide(img`
        . 3 . 
        2 . 3 
        . 3 . 
        `, 0, -50)
    aBubble.setPosition(randint(32, 112), 80)
    aBubble.setKind(SpriteKind.Bubble)
    bubble_list.push(aBubble)
})
game.onUpdateInterval(100, function () {
    statusbar.value += -1
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(50)) {
        for (let value of bubble_list) {
            value.x += 1
        }
    } else {
        for (let value of bubble_list) {
            value.x += -1
        }
    }
})
