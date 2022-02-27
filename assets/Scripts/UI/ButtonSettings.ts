
import { _decorator, Component, Node } from 'cc';
import { GameManager } from '../GameManager';
import { SettingsUI } from '../Utilities/SettingsUI';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ButtonSettings
 * DateTime = Fri Feb 18 2022 14:30:03 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ButtonSettings.ts
 * FileBasenameNoExtension = ButtonSettings
 * URL = db://assets/Scripts/UI/ButtonSettings.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ButtonSettings')
export class ButtonSettings extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    buttonClicked () {
        GameManager.getInstance().settingsUI!.getComponent(SettingsUI)!.turnOnSetting();
       // GameManager.getInstance().Player!.getComponent(TopCameraLook)?.playAnimationTop();
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
