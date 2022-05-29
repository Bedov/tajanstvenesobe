
import { _decorator, Component, Node } from 'cc';
import { EndGameLogic } from '../EndGameLogic';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BarrelTriggerEndGame
 * DateTime = Thu May 19 2022 21:07:04 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = BarrelTriggerEndGame.ts
 * FileBasenameNoExtension = BarrelTriggerEndGame
 * URL = db://assets/Scripts/Goldberg/BarrelTriggerEndGame.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BarrelTriggerEndGame')
export class BarrelTriggerEndGame extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    BarrelTriggerEndGame() {
        EndGameLogic.startEndGame();
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
