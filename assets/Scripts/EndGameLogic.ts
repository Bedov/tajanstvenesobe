
import { _decorator, Component, Node } from 'cc';
import { Task } from './Tasks/Task';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EndGameLogic
 * DateTime = Thu May 19 2022 16:21:02 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = EndGameLogic.ts
 * FileBasenameNoExtension = EndGameLogic
 * URL = db://assets/Scripts/Tasks/EndGameLogic.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('EndGameLogic')
export class EndGameLogic extends Component {
    // [1]
    // dummy = '';

    @property({type: Task})
    public task: Task | null = null;

    static instance: EndGameLogic;

    start () {
        EndGameLogic.instance = this;
    }

    static startEndGame() {
        console.log("EndGame Activate");

        EndGameLogic.instance.task?.showTask();
        
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
