
import { _decorator, Component, Node } from 'cc';
import { GameManager } from '../GameManager';
import { TaskManager } from '../Tasks/TaskManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonDelegator
 * DateTime = Wed Jan 19 2022 11:41:11 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ButtonDelegator.ts
 * FileBasenameNoExtension = ButtonDelegator
 * URL = db://assets/Scripts/Utilities/ButtonDelegator.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonDelegator')
export class ButtonDelegator extends Component {

    start () {
        
    }

    clicked(event: Event, customData: string) {
        switch (customData) {
            case "getDirection":
                GameManager.getInstance().TaskManager?.getComponent(TaskManager)?.getDirection();
                break;
            case "getDirection2":
                GameManager.getInstance().TaskManager?.getComponent(TaskManager)?.getDirectionFollow();
                break;
            case "readAgain":
                GameManager.getInstance().TaskManager?.getComponent(TaskManager)?.readAgain();
            default:
                break;
        }
    }

    backClicked(){
        GameManager.getInstance().backToMenu();
    }

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
