
import { _decorator, Component, Node, director, Collider, game, Canvas, Enum, find, Game } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { DetectTypeOfDevice } from "../DetectTypeOfDevice";
import { Task } from './Task';
import { GameManager, GameStatuType } from '../GameManager';
import { JSONimage, JSONquestTekst } from '../RemoteScripts/JSONloader';
import { GlobalManager } from '../GlobalManager';
import { DetectTypeOfDeviceElevator } from '../DetectTypeOfDeviceElevator';

export enum TypeOfTask {
    tekstType=    0,
    imageType=   1,
    }

@ccclass('TaskTutorialTask')
export class TaskTutorialTask extends Task {

    myTimeHasCome = true;

    @property(String)
    remoteName!: String;

    @property(Boolean)
    elevatorScript = false;
    
    @property ({type:Enum(TypeOfTask)})
    taskType:TypeOfTask = TypeOfTask.tekstType;

    tekstObject: JSONquestTekst = new JSONquestTekst ;
    imageObject: JSONimage = new JSONimage ;


    start(){
        
        this.schedule(this.isItMyTimeForDownloading, 0.1);




     
    }

    isItMyTimeForDownloading() {
        if(this.orderNumber <= GameManager.getInstance().downloadedCheckpoint && !this.downloadStarted ) {
            if(this.taskType == TypeOfTask.tekstType)
                this.getTekstRemotely();
            if(this.taskType == TypeOfTask.imageType)
                this.getImageRemotely();

                this.downloadStarted = true;
        }
            
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
        if(this.checkpointLock)
            if( this.taskManager.node.children.indexOf(this.node.parent!) != GameManager.getInstance().progressStarted )
                return;
        
        if(GameManager.getInstance().detectType?._moveTutorialEndBool && GameManager.getInstance().detectType?._lookTutorialEndBool && !this.executed ) {
            this.showUI();
            GameManager.getInstance().gameStatus = GameStatuType.gamePaused;
        }
    }

    showUI (){
        if(GameManager.getInstance().downloadedCheckpoint <= this.orderNumber) {
            GameManager.getInstance().loadingHandler?.turnOnLoading();
            this.scheduleOnce(this.showTask, 0.2);
            console.log("DownloadedCheckpoint : " + GameManager.getInstance().downloadedCheckpoint);

            console.log("this.orderNumber : " + this.orderNumber);
            return;
        }

        super.showTask();



        GameManager.getInstance().loadingHandler?.turnOffLoading();

        
        
        if(this.taskType == TypeOfTask.tekstType) {
            this.taskManager.genericUI!.active = true;
            this.taskManager.genericUI!.getComponent(ScriptEffects)!.fadeInActive();
            this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTaskJSONwithReturn(this.tekstObject, this); 
        }
        if(this.taskType == TypeOfTask.imageType) {
            this.taskManager.genericUIimage!.active = true;
            this.taskManager.genericUIimage!.getComponent(ScriptEffects)!.fadeInActive();
            this.taskManager.genericUIimage!.getComponent(GenericUI)!.turnOnGenericTaskJSONimagewithReturn(this.imageObject, this, false); 
        }

        if(this.taskManager.subtitle != undefined)
            this.taskManager.subtitle!.getComponent(ScriptEffects)?.fadeOutActive();


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
