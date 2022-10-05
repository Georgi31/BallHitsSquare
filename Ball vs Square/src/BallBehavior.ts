import { GameObjectBehavior } from "./GameObjectBehavior";
import {GameObject} from "./GameObject"
import * as PIXI from "pixi.js";
import {GameApplication} from "./GameApplication"
import { SquareBehavior } from "./SquareBehavior";



export class BallBehavior extends GameObjectBehavior{


    private ball: PIXI.Sprite;
    private velocity:number = 10
    public keyPressed:boolean = false
    

    constructor(gameObjRef:GameObject){
        super(gameObjRef);
    }

    public destroy(){

        this.ball.destroy({texture:true, baseTexture:true})
        this.gameObjRef.removeChild(this.ball);
    }

    protected init() {
        this.createBall();
        this.setKeyCallbackEvent();
    }

    private setKeyCallbackEvent(){
        this.onKeyUp.bind(this)
         window.addEventListener('keyup',this.onKeyUp )
    }


    private createBall(){
        const gfx:PIXI.Graphics =new PIXI.Graphics();
        gfx.beginFill(0xffffff);
        gfx.drawCircle(0,0,20)
        gfx.endFill();

        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx)
        this.ball = new PIXI.Sprite(texture);

        this.gameObjRef.addChild(this.ball);
    }
    public update(delta: number){
         
        if(!this.onKeyUp ){
            return
        };

         if(this.gameObjRef.x +this.gameObjRef.width*delta<695){
        this.gameObjRef.x+=this.velocity*delta;
        if(this.ball.x +this.ball.width>=this.gameObjRef.x){
            this.ball.x=GameApplication.getApp().view.width-500
        }
            

    }
    }

    public onKeyUp(e:KeyboardEvent){
     if(e.code === 'Space'){
        this.keyPressed = true
        console.log('iii');
        
        
     }
    }
}