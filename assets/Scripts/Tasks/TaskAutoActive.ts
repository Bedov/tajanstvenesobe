
import { _decorator, Component, Node, director, Collider, game, Canvas, macro, Sprite, Enum } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { DetectTypeOfDevice } from "../DetectTypeOfDevice";
import { Task } from './Task';
import { GameManager } from '../GameManager';
import { JSONimage, JSONquestTekst } from '../RemoteScripts/JSONloader';


export enum TypeOfTask {
    tekstType=    0,
    imageType=   1,
    }

@ccclass('TaskAutoActive')
export class TaskAutoActive extends Task {

    myTimeHasCome = true;

    @property(String)
    remoteName!: String;



    @property ({type:Enum(TypeOfTask)})
    taskType:TypeOfTask = TypeOfTask.tekstType;



    tekstObject: JSONquestTekst = new JSONquestTekst ;
    imageObject: JSONimage = new JSONimage ;

    start(){
        this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER);

        if(this.taskType == TypeOfTask.tekstType)
            this.getTekstRemotely();
        if(this.taskType == TypeOfTask.imageType)
            this.getImageRemotely();
    }

    getTekstRemotely() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.fetchQuestTekst(this.remoteName.toString(), this.tekstObject)!;
        }
    }

    getImageRemotely() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.fetchImageQuestTekst(this.remoteName.toString(), this.imageObject)!;
        }
    }

    update() {

    }

    checkExecution() {
        if(this.isItOkToExecute())
            this.showTask();
    }


    showTask() {
        super.showTask();

        if(this.taskType == TypeOfTask.tekstType) {
            this.taskManager.genericUI!.active = true;
            this.taskManager.genericUI!.getComponent(ScriptEffects)!.fadeInActive();
            this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTaskJSONwithReturn(this.tekstObject,this); 
        }
        if(this.taskType == TypeOfTask.imageType) {
            this.taskManager.genericUIimage!.active = true;
            this.taskManager.genericUIimage!.getComponent(ScriptEffects)!.fadeInActive();
            this.taskManager.genericUIimage!.getComponent(GenericUI)!.turnOnGenericTaskJSONimagewithReturn(this.imageObject,this); 
        }
        

        
    }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */