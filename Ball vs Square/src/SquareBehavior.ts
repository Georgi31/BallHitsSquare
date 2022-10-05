import * as PIXI from "pixi.js";
import { GameObjectBehavior } from "./GameObjectBehavior"
import { GameObject } from "./GameObject"
import { GameApplication } from "./GameApplication"

export class SquareBehavior extends GameObjectBehavior {


    private square: PIXI.Sprite;
    private velocity: number = 10;
    public ballObjRef: GameObject


    constructor(gameObjRef: GameObject) {
        super(gameObjRef);
    }
    public destroy() {

        this.square.destroy({ texture: true, baseTexture: true })
        this.gameObjRef.removeChild(this.square);
    }

    public setBallObjRef(gameObj: GameObject) {
        this.ballObjRef = gameObj
    }

    protected init() {
        this.createBall();
    }

    private createBall() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0xff0000);
        gfx.drawRect(0, 0, 100, 100)
        gfx.endFill();

        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx)
        this.square = new PIXI.Sprite(texture);

        this.gameObjRef.addChild(this.square);
    }
    public update(delta: number) {

        if (this.ballObjRef.x + this.ballObjRef.width >= this.gameObjRef.x && this.ballObjRef.x < this.gameObjRef.x + this.gameObjRef.width &&
            this.ballObjRef.y + this.ballObjRef.height >= this.gameObjRef.y && this.ballObjRef.y < this.gameObjRef.y + this.gameObjRef.height) {
            

            if (this.gameObjRef.x + this.gameObjRef.width * delta < GameApplication.getApp().view.width) {
                this.gameObjRef.x += this.velocity * delta;
            } else {
                this.gameObjRef.x = GameApplication.getApp().view.width - this.gameObjRef.width;
            }

        }



    }
}
