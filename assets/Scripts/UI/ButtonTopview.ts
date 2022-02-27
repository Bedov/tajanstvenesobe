
import { _decorator, Component, Node } from 'cc';
import { GameManager } from '../GameManager';
import { TopCameraLook } from '../Utilities/TopCameraLook';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonTopview
 * DateTime = Fri Feb 18 2022 14:27:57 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ButtonTopview.ts
 * FileBasenameNoExtension = ButtonTopview
 * URL = db://assets/Scripts/UI/ButtonTopview.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonTopview')
export class ButtonTopview extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    buttonClicked () {
        GameManager.getInstance().Player!.getComponent(TopCameraLook)?.playAnimationTop();
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
