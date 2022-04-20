
import { _decorator, Component, Node, find } from 'cc';
import { DetectTypeOfDeviceElevator } from './DetectTypeOfDeviceElevator';
import { GlobalManager } from './GlobalManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PlayerEnderingEnd
 * DateTime = Tue Apr 19 2022 13:20:22 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = PlayerEnderingEnd.ts
 * FileBasenameNoExtension = PlayerEnderingEnd
 * URL = db://assets/Scripts/PlayerEnderingEnd.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PlayerEnderingEnd')
export class PlayerEnderingEnd extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    animationEnded() {
        find("Canvas")!.getComponent(DetectTypeOfDeviceElevator)!._preTutorailEnded = true;
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
