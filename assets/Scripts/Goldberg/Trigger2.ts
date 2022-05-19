
import { _decorator, Component, Node, MeshCollider, ITriggerEvent, Animation } from 'cc';
import { EndGameLogic } from '../EndGameLogic';
import { GameManager } from '../GameManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Trigger1
 * DateTime = Wed Mar 30 2022 23:16:47 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = Trigger1.ts
 * FileBasenameNoExtension = Trigger1
 * URL = db://assets/Scripts/Goldberg/Trigger1.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Trigger2')
export class Trigger2 extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    endGameLogic?: EndGameLogic;

    animationPlayed = false;

    start () {
        this.endGameLogic = GameManager.getInstance().node.getComponent(EndGameLogic)!;

        let collider = this.getComponent(MeshCollider)!;
        collider.on("onTriggerEnter", this.onTrigger, this);
        
    }

    onTrigger (event: ITriggerEvent) {
        this.endGameLogic?.startEndGame();
        


 

        //console.log(event.type, event);
        //console.log("DODIRUJEM ");
        
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
