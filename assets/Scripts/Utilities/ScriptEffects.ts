
import { _decorator, Component, Node, Sprite, UIOpacity, UI} from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ScriptEffects
 * DateTime = Tue Nov 16 2021 13:22:00 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ScriptEffects.ts
 * FileBasenameNoExtension = ScriptEffects
 * URL = db://assets/Scripts/Utilities/ScriptEffects.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('ScriptEffects')
export class ScriptEffects extends Component {
    // [1]
    // dummy = '';

    _fadeOutBool = false;
    _fadeOutEffect = true;
    _fadeOutCounter = 0.4;

    _fadeInBool = false;
    _fadeInEffect = true;
    _fadeInCounter = 0;


    @property(Number)
    _fadeOutCounterMax = 0.4;

    //_fadeOutCounterMax = 1;

    @property(Boolean) 
    defaultOff?: Boolean = true;


    onLoad (){ 
        if(this.defaultOff) {
            this.node.active = false;
            this.node.getComponent(UIOpacity)!.opacity = 0;
        }
    }

    fadeOutActive() {
        //this._fadeOutCounter = this._fadeOutCounterMax; 
            

        this._fadeOutBool = true;
        this._fadeInBool = false;
    }
    fadeInActive() {
        

        this.node.active = true;
        this._fadeInBool = true;
        this._fadeOutBool = false;

        
    }

    fadeOut(time: number) {
            
            if(this.node.getComponent(UIOpacity) != null) 
                if( this.node.getComponent(UIOpacity)!.opacity >= time / this._fadeOutCounterMax * 255 && time / this._fadeOutCounterMax * 255 >= 0 ) {
                    this.node.getComponent(UIOpacity)!.opacity =  time / this._fadeOutCounterMax * 255;
                }
    }

    fadeIn(time: number) { 
       
        this.node.active = true;
        if(this.node.getComponent(UIOpacity) != null) 
            if( this.node.getComponent(UIOpacity)!.opacity <= time / this._fadeOutCounterMax * 255 && time / this._fadeOutCounterMax * 255 <= 255 ) {
                this.node.getComponent(UIOpacity)!.opacity =  time / this._fadeOutCounterMax * 255;
            } 
            
    }


    update (deltaTime: number) {
        if(this._fadeOutBool) {
            this._fadeOutCounter -= deltaTime;
            this.fadeOut(this._fadeOutCounter);
            if( this._fadeOutCounter < 0) {
                this._fadeOutBool = false;
                this._fadeOutCounter = this._fadeOutCounterMax;
                this.node.active = false;
            }
        }
        if(this._fadeInBool) {
            this._fadeInCounter += deltaTime;
            this.fadeIn(this._fadeInCounter);

            if( this._fadeInCounter > this._fadeOutCounterMax) {
                this._fadeInBool = false;
                this._fadeInCounter = 0;
            }
        }
            
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
