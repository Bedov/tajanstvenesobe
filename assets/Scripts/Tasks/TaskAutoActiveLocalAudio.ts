
import { _decorator, Component, Node, director, Collider, game, Canvas, macro, Sprite, Enum, AudioSource } from 'cc';
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

@ccclass('TaskAutoActiveLocalAudio')
export class TaskAutoActiveLocalAudio extends Task {

    myTimeHasCome = true;

    soundPlayed = false;

    @property(String)
    remoteName!: String;

    @property(Node)
    bellIcon!: Node;

    counterForExecution = 0;
    timerOn = false;

    @property ({type:Enum(TypeOfTask)})
    taskType:TypeOfTask = TypeOfTask.tekstType;

    tekstObject: JSONquestTekst = new JSONquestTekst ;
    imageObject: JSONimage = new JSONimage ;

    start(){
        this.schedule(this.checkExecution, 1, macro.REPEAT_FOREVER);
        this.schedule(this.isItMyTimeForDownloading, 0.1);

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

    fetchTheData() {
        if(this.taskType == TypeOfTask.tekstType)
            this.getTekstRemotely();
        if(this.taskType == TypeOfTask.imageType)
         this.getImageRemotely();
    }

    isItMyTimeForDownloading() {
        if(this.orderNumber <= GameManager.getInstance().downloadedCheckpoint && !this.downloadStarted ) {
            this.fetchTheData();
            this.downloadStarted = true;
            this.unschedule(this.isItMyTimeForDownloading);
        }
            
    }

    update(deltaTime: number) {
        if(this.timerOn) 
            this.counterForExecution += deltaTime;
        else    
            return;
        
        this.bellIcon.active = true;
        if(this.counterForExecution > 6) {
            if(this.executed == false)
                this.taskCompleted();
            this.timerOn = false;
            this.bellIcon.active = false;
        }

    }

    checkExecution() {
        if(this.isItOkToExecute() && !this.soundPlayed) {
            this.showTask();
            this.soundPlayed = true;
        }
    }




    showTask() {

        this.getComponent(AudioSource)?.play();
        //this.taskCompleted();
        if(this.executed == false)
            this.timerOn = true;
        //this.scheduleOnce(this.taskCompleted(), 6);

        
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
