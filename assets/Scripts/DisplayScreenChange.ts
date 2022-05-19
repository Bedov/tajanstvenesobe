
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DisplayScreenChange
 * DateTime = Thu May 19 2022 15:10:11 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = DisplayScreenChange.ts
 * FileBasenameNoExtension = DisplayScreenChange
 * URL = db://assets/Scripts/DisplayScreenChange.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DisplayScreenChange')
export class DisplayScreenChange extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    static instance: Node;

    start () {
        //DisplayScreenChange.instance = this.node;
    }

    static setDisplayToSceneName(sceneName:string) {
        DisplayScreenChange.instance.getChildByName(sceneName)!.active = true;
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
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
