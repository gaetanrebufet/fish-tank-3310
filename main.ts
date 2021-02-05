namespace SpriteKind {
    export const deepsea = SpriteKind.create()
    export const Bubble = SpriteKind.create()
    export const Mask = SpriteKind.create()
    export const Anchor = SpriteKind.create()
}
function setBrightPalette () {
    color.setColor(1, nokia_bright)
    color.setColor(2, nokia_dark)
    color.setColor(3, nokia_dark)
    color.setColor(4, nokia_dark)
    color.setColor(5, nokia_bright)
    color.setColor(6, nokia_dark)
    color.setColor(7, nokia_bright)
    color.setColor(8, nokia_dark)
    color.setColor(9, nokia_dark)
    color.setColor(10, nokia_bright)
    color.setColor(11, nokia_dark)
    color.setColor(12, nokia_dark)
    color.setColor(13, nokia_dark)
    color.setColor(14, nokia_dark)
    color.setColor(15, color.rgb(0, 0, 0))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -20
    if (mySprite.vy == 0) {
        mySprite.vy = -10
    }
})
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    switchColors()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -30
    if (mySprite.vx >= 0) {
        mySprite.vx = -10
    }
    animateLeft()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    stopAnimation()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    stopAnimation()
})
function animateRight () {
    animation.runImageAnimation(
    mySprite,
    animation_right,
    200,
    true
    )
}
function stopAnimation () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
}
function setDarkPalette () {
    color.setColor(1, nokia_dark)
    color.setColor(2, nokia_bright)
    color.setColor(3, nokia_bright)
    color.setColor(4, nokia_bright)
    color.setColor(5, nokia_dark)
    color.setColor(6, nokia_bright)
    color.setColor(7, nokia_dark)
    color.setColor(8, nokia_bright)
    color.setColor(9, nokia_bright)
    color.setColor(10, nokia_dark)
    color.setColor(11, nokia_bright)
    color.setColor(12, nokia_bright)
    color.setColor(13, nokia_bright)
    color.setColor(14, nokia_bright)
    color.setColor(15, color.rgb(0, 0, 0))
}
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 30
    if (mySprite.vx <= 0) {
        mySprite.vx = 10
    }
    animateRight()
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = 0
})
function isSplash () {
    if (splash || gameover) {
        return true
    } else {
        return false
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = 20
    if (mySprite.vy == 0) {
        mySprite.vy = -10
    }
})
function switchColors () {
    if (light2) {
        setDarkPalette()
        light2 = false
    } else {
        setBrightPalette()
        light2 = true
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bubble, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    if (light2) {
        statusbar.value += 10
    } else {
        statusbar.value += -10
    }
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
function animateLeft () {
    animation.runImageAnimation(
    mySprite,
    animation_left,
    200,
    true
    )
}
let aBubble: Sprite = null
let LostScreen: Sprite = null
let startSplash: Sprite = null
let splash = false
let statusbar: StatusBarSprite = null
let status_anchor: Sprite = null
let light2 = false
let nokia_dark = 0
let nokia_bright = 0
let animation_right: Image[] = []
let animation_left: Image[] = []
let gameover = false
let mySprite: Sprite = null
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
mySprite = sprites.create(assets.image`fish`, SpriteKind.Player)
mySprite.fx = 20
mySprite.fy = 20
gameover = false
animation_left = assets.animation`animate_left`
animation_right = assets.animation`animate_right`
nokia_bright = color.__rgb(199, 240, 216)
nokia_dark = color.__rgb(67, 82, 61)
setBrightPalette()
light2 = true
game.onUpdateInterval(5000, function () {
    if (!(isSplash())) {
        switchColors()
    }
})
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
        if (light2) {
            statusbar.value += -1
        } else {
            statusbar.value += 1
        }
    }
})
game.onUpdateInterval(200, function () {
    if (!(isSplash())) {
        if (Math.percentChance(50)) {
            for (let value of bubble_list) {
                value.x += 1
            }
        } else {
            for (let value2 of bubble_list) {
                value2.x += -1
            }
        }
    }
})
