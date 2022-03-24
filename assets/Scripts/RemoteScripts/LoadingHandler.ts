
import { _decorator, Component, Node, Game } from 'cc';
import { GameManager } from '../GameManager';
import { Task } from '../Tasks/Task';
import { TaskManager } from '../Tasks/TaskManager';
import { ScriptEffects } from '../Utilities/ScriptEffects';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LoadingHandler
 * DateTime = Wed Mar 23 2022 21:49:35 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = LoadingHandler.ts
 * FileBasenameNoExtension = LoadingHandler
 * URL = db://assets/Scripts/RemoteScripts/LoadingHandler.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LoadingHandler')
export class LoadingHandler extends Component {
    @property({type: Node})
    public loadingPanel: Node | null = null;

    turnOnLoading(){
        this.loadingPanel!.getComponent(ScriptEffects)?.fadeInActive();
    }

    turnOffLoading(){
        this.loadingPanel!.getComponent(ScriptEffects)?.fadeOutActive();
    }

    start () {
        // [3]
    }

    update () {
        //if(GameManager.getInstance().downloadedCheckpoint < GameManager.getInstance().TaskManager!.getComponent(TaskManager)?.checkpoints[Number(GameManager.getInstance().Progress)].children[0].getComponent(Task)!.orderNumber! );
        //    console.log();
            
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
