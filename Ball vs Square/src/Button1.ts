import * as PIXI from 'pixi.js';

import {Button} from './Button'

export class Button1 extends Button {

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
            super.onPointerDown();
        this.background.tint = 0xff0000;
        this.dispatcher.emit('changebtnup');
     
    }
    protected onPointerDown() {
      super.onPointerDown();
      this.dispatcher.emit('changebtndown')
    }
}