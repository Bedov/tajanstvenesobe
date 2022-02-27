
import { _decorator, Component, Node, Button, macro } from 'cc';
import { GameManager, GameStatuType } from '../GameManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonDisabler
 * DateTime = Fri Jan 14 2022 11:12:35 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ButtonDisabler.ts
 * FileBasenameNoExtension = ButtonDisabler
 * URL = db://assets/Scripts/Utilities/ButtonDisabler.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonDisabler')
export class ButtonDisabler extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Boolean)
    justTutorialLock?: Boolean = false;

    lockedByOutside = false;

    start () {
        //this.schedule(this.checkStatusAndDisable(), 0.1, macro.REPEAT_FOREVER);
    }

    update() {
        if(this.justTutorialLock) {
            if(GameManager.getInstance().gameStatus == GameStatuType.gameTutorial || this.lockedByOutside)
                this.getComponent(Button)!.interactable = false;
            else    
                this.getComponent(Button)!.interactable = true; 
            return;
        }

        if(GameManager.getInstance().gameStatus == GameStatuType.gamePaused || GameManager.getInstance().gameStatus == GameStatuType.gameTutorial || this.lockedByOutside)
            this.getComponent(Button)!.interactable = false;
        else    
            this.getComponent(Button)!.interactable = true; 
    }

    checkStatusAndDisable() {
 
        
        if(GameManager.getInstance().gameStatus == GameStatuType.gamePaused || GameManager.getInstance().gameStatus == GameStatuType.gameTutorial )
            this.getComponent(Button)!.interactable = false;
        else    
            this.getComponent(Button)!.interactable = true;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
