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
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (splash) {
        startSplash.destroy()
        splash = false
        initStatusBar()
    } else if (gameover) {
        game.reset()
    }
})
function setStartSplash () {
    splash = true
    startSplash = sprites.create(img`
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111222222222221111111111111111111111111112221111111111111111111111111
        11111111111222222222222221111111111111111111111111112221111111111111111111111111
        11111111112222222222222221111111111111111111111111112221111111111111111111111111
        11111111112222221111111111111111111111111111111111112222111111111111111111111111
        11111111112221111111111111111111111111111111111111112222111111111111111111111111
        11111111122221111111111111111111111111111111111111112222111111111111111111111111
        11111111122221111111111122211111111111111111111111112222111111111111111111111111
        11111111122211111111111122211111111111111111111111112222111111111111111111111111
        11111111122211111111111122211111111111111111111111112222211111111111111111111111
        11111111122221111111111122211111111111111111111111112222222221111111111111111111
        11111111122222111111111122222221111111111111111111112222222221111111111111111111
        11111111112222111111111122222221111111111111111111112222222221111111111111111111
        11111111111222211111111122222221111111111111111111112222221111111111111111111111
        11111111111222211111111122222111111111222221111111112222211111111111111111111111
        11111111111122221111111122211111111112222222221111112222211111111111111111111111
        11111111111122222111111122211111111112222222222211112222211111111111111111111111
        11111111111112222221111122211111111112222222222211112222211111111111111111111111
        11111111111111222222111122211111111112222112222211112222211111111111111111111111
        11111111111111122222211222222222221112222111122211111222211111111111111111111111
        11111111111111111222221222222222222111222111122211112222211111111111111111111111
        11111111111111111122221222222222222211222211122211112222211111111111111111111111
        11111111111111111112222122221122222211222211122211112222211111111111111111111111
        11111111111111111112222122221122222221222211122211122222211111111111111111111111
        11111111111111111112222122221222222221222211122211122222211111111111111111111111
        11111111122211111111222122221222222222222111122212222222211111111111111111111111
        11111111222221111112222122221222222222222111122222222222211111111111111111111111
        11111111222222222222222122221222222222222111122222222122211111111111111111111111
        11111111222222222222222122221222222222222111122222211122211111111111111111111111
        11111111111222222222211122221111111111111111112222211122211111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Anchor)
    startSplash.z = 1
    startSplash.setFlag(SpriteFlag.Ghost, true)
    startSplash.setPosition(73, 57)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    setLose()
})
function isSplash () {
    if (splash || gameover) {
        return true
    } else {
        return false
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bubble, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    statusbar.value += 10
})
function setLose () {
    gameover = true
    LostScreen = sprites.create(img`
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111122222211111111111111111111111111111111111111111111111111111111111
        11111111111112211111111111111111111111111111111111111111111111111111111111111111
        11111111111112111111111111111111111111111111111111111111111111111111111111111111
        11111111111112111111111111111111111111111111111111111111111111111111111111111111
        11111111111112111111111111111111111111111111111111111111111111111111111111111111
        11111111111112111111111111111111111111111111111111111111111111111111111111111111
        11111111111111211111111111111111111111111111111111111111111111111111111111111111
        11111111111111221111111111111111111111111111111111111111111111111111111111111111
        11111111111111121111111111111111111111111111111111111111111111111111111111111111
        11111111111111112211111111111111111111111111111111111111111111111111111111111111
        11111111111111111121111111111111111111111111111111111111111111111111111111111111
        11111111111111111112111111111111111111111111111111111111111111111111111111111111
        11111111111111111111222211111111111111111111111111111111111111111111111111111111
        11111111111111111111111121111111111111111111111111111111111111111111111111111111
        11111111111111111111111112211111111111111111111111111111111111111111111111111111
        11111111111111111111111111211111111111111111111111111111111111111111111111111111
        11111111111111111111111111221111111121112111211111111111111111111111111111111111
        11111111111111111111111111121221122222112222211112111221111111111111111111111111
        11111111111111111111111111122212212212111212111112111221111111111111111111111111
        11111111111111111111111111122211211212111212111112111221111111111111111111111111
        11111111111111111111111111122221211212111212111112111211111121112111211111111111
        11111111111121111111111122212112222212211212211122222222111111111111111111111111
        11111111111121111111112211112111211111222111122221111221111111111111111111111111
        11111111111121111112221111111222211111111111111111122211111111111111111111111111
        11111111111112222221111111111111111111111111111122211211111111111111111111111111
        11111111111111111111111111111111111111111111111121111211111111111111111111111111
        11111111111111111111111111111111111111111111111211111121111111111111111111111111
        11111111111111111111111111111111111111111111111211111121111111111111111111111111
        11111111111111111111111111111111111111111111111211111211111111111111111111111111
        11111111111111111111111111111111111111111111111221122111111111111111111111111111
        11111111111111111111111111111111111111111111111122221111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Anchor)
    LostScreen.z = 1
    LostScreen.setFlag(SpriteFlag.Ghost, true)
    LostScreen.setPosition(73, 57)
    statusbar.destroy()
}
let aBubble: Sprite = null
let LostScreen: Sprite = null
let startSplash: Sprite = null
let splash = false
let statusbar: StatusBarSprite = null
let status_anchor: Sprite = null
let gameover = false
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
setStartSplash()
let bubble_list = sprites.allOfKind(SpriteKind.Bubble)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c 1 1 1 1 c . . . 
    . . . . . c 1 1 1 1 1 1 3 . . . 
    . . . . c 1 1 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 1 4 4 4 4 1 c 4 c 
    3 4 4 1 4 4 1 1 4 4 4 4 1 4 2 2 
    3 4 4 4 2 4 1 c c 4 4 4 1 1 2 2 
    3 4 4 4 4 4 1 4 4 1 4 4 d 1 2 2 
    . 3 4 4 4 4 1 c 4 1 4 d 1 2 2 2 
    . . 3 3 4 d 4 4 1 1 4 c 1 c . . 
    . . . . 3 3 4 4 4 4 c d b c . . 
    . . . . . . 3 3 3 3 d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
gameover = false
game.onUpdateInterval(500, function () {
    if (!(isSplash())) {
        aBubble = sprites.createProjectileFromSide(img`
            . 3 . 
            2 . 3 
            . 3 . 
            `, 0, -50)
        aBubble.setPosition(randint(32, 112), 80)
        aBubble.setKind(SpriteKind.Bubble)
        bubble_list.push(aBubble)
    }
})
game.onUpdateInterval(100, function () {
    if (!(splash)) {
        statusbar.value += -1
    }
})
game.onUpdateInterval(200, function () {
    if (!(isSplash())) {
        if (Math.percentChance(50)) {
            for (let value of bubble_list) {
                value.x += 1
            }
        } else {
            for (let value of bubble_list) {
                value.x += -1
            }
        }
    }
})
