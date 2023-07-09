import Phaser from "phaser";
import Game from "./src/scripts/game";
const config = {
    width: 600,
    height: 500,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true
        }
    }   
}

const game = new Phaser.Game(config);
game.scene.add('ball', Game);

game.scene.start('ball');