import {Button} from './Button'
import * as PIXI from "pixi.js";

export class Button2 extends Button {

    constructor(label: string){
        super(label);
    }
        protected init() {
            super.init()
        }

        public getDispatcher(): PIXI.utils.EventEmitter{
            return this.dispatcher;
       }
     
        protected onPointerUp(){
            super.onPointerUp();

            this.dispatcher.emit('initbtnup')
        }
        protected onPointerDown() {
            super.onPointerDown()
            this.dispatcher.emit('initbtndown')
        }
}
