
import { _decorator, Component, Node, macro } from 'cc';
import { Task } from './Task';
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { JSONloader } from '../RemoteScripts/JSONloader';
import { GameManager } from '../GameManager';
import { DetectTypeOfDevice } from '../DetectTypeOfDevice';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TaskLoading
 * DateTime = Thu Mar 17 2022 23:31:16 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = TaskLoading.ts
 * FileBasenameNoExtension = TaskLoading
 * URL = db://assets/Scripts/Tasks/TaskLoading.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TaskLoading')
export class TaskLoading extends Task {

    loadingCompleted = false;

    start () {
        console.log("USAO SAM");
        this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER);
        this.schedule(this.checkIfDownloadIsCompleted, 0.1, macro.REPEAT_FOREVER);
    }

    showTask() {
        super.showTask();

        this.taskManager.loadingPanel!.getComponent(ScriptEffects)!.fadeInActive();
    }

    checkExecution() {
        if(this.isItOkToExecute() && this.taskManager.canvas?.getComponent(DetectTypeOfDevice)?._moveTutorialEndBool && this.taskManager.canvas?.getComponent(DetectTypeOfDevice)?._lookTutorialEndBool && !this.executed)
            this.showTask();
    }

    checkIfDownloadIsCompleted(){
        console.log("GameManager.instance.taskInProgressManager " + GameManager.instance.taskInProgressManager );
        
        if(  GameManager.instance.taskInProgressManager  == 0) {
            this.taskManager.loadingPanel!.getComponent(ScriptEffects)!.fadeOutActive();
            this.loadingCompleted = true;
            
        }
        
        if(this.taskManager.canvas?.getComponent(DetectTypeOfDevice)?._moveTutorialEndBool && this.taskManager.canvas?.getComponent(DetectTypeOfDevice)?._lookTutorialEndBool && !this.executed && this.loadingCompleted)
        this.taskCompleted();
        
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
