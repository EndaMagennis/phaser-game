import Phaser from "phaser";

//creating a Titlescreen scene to call from main.js
export default class TitleScreen extends Phaser.Scene{
     
    preload(){

    }

    create() {
        
        const title = this.add.text(300, 250, 'Hello, World!');
        title.setOrigin(0.5, 0.5);
    }
}