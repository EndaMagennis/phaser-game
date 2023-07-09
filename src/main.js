import Phaser from "phaser";
import TitleScreen from "./scripts/titleScreen";

const config = {
    width: 600,
    height: 500,
    type: Phaser.AUTO,
}

const game = new Phaser.Game(config);
game.scene.add('titlescreen', TitleScreen);

game.scene.start('titlescreen');