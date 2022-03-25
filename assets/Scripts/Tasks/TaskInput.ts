
import { _decorator, Component, Node, AudioSource, director, Collider, Animation, random, randomRangeInt } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { GenericUIABC } from "../Utilities/GenericUI-ABC";
import { Task } from './Task';

import { JSONloader, JSONtask2 } from "../RemoteScripts/JSONloader";
import { JSONtask1 } from "../RemoteScripts/JSONloader";
import { GameManager } from '../GameManager';
import { GenericUIinput } from '../Utilities/GenericUI-Input';
@ccclass('TaskInput')
export class TaskInput extends Task {

    @property(String)
    remoteName!: String;

    @property(Number)
    expectedQuestions!: Number;


    questionsTempArray : Array<JSONtask1> = new Array<JSONtask1>();

    questionsShown : Array<boolean> = new Array<boolean>();
    questionShownFilled = false;

    private audioSource: AudioSource = null!;
   

    start () {
        this.schedule(this.isItMyTimeForDownloading, 0.1);

        this.audioSource = this.node.getComponent(AudioSource)!;
        
        this.scheduleOnce(this.fillQuestionsShownFalse, this.orderNumber * 0.05 + 2);
    }

    fillQuestionsShownFalse() {
        this.questionsTempArray.forEach(element => {
            this.questionsShown.push(false);
             
        });
    }

    isItMyTimeForDownloading() {
        if(this.orderNumber <= GameManager.getInstance().downloadedCheckpoint && !this.downloadStarted ) {
            this.getQuestions();
            this.downloadStarted = true;
        }
    }

    getQuestions() {
        if(this.remoteName != "") {
             GameManager.getInstance().jsonLoader?.fetchQuestions(this.remoteName, this.questionsTempArray, this.expectedQuestions)!;
 
        }
    }

    
    getRandomTask() {
        var imamoNekoriscene = false;
        var nasaoNekoriscenog = false;
        var randomIndex = randomRangeInt(0, this.questionsShown.length);
        

        this.questionsShown.forEach(element => {
            if(element == false)
                imamoNekoriscene = true;
        });

        console.log("imamoNekoriscene: " + imamoNekoriscene);
        
        if(imamoNekoriscene) {
            while(!nasaoNekoriscenog) {
                randomIndex = randomRangeInt(0, this.questionsShown.length);
                if( !this.questionsShown[randomIndex])
                    nasaoNekoriscenog = true;
            }
            
        }
        console.log("QUESTION ARRAY LENGHT" +  this.questionsShown.length);
        console.log("randomIndex: " + randomIndex);

        this.questionsShown[randomIndex] = true;

        return this.questionsTempArray[randomIndex];
    }

    showTask () {
        
        if(this.isItOkToExecute()) {
            if(GameManager.getInstance().downloadedCheckpoint <= this.orderNumber) {
                GameManager.getInstance().loadingHandler?.turnOnLoading();
                this.scheduleOnce(this.showTask, 0.2);
                console.log("DownloadedCheckpoint : " + GameManager.getInstance().downloadedCheckpoint);
    
                console.log("this.orderNumber : " + this.orderNumber);
                return;
            }

            GameManager.getInstance().loadingHandler?.turnOffLoading();

            this.taskManager.genericUIinput!.active = true;

            this.taskManager.genericUIinput!.getComponent(GenericUIinput)!.turnOnGenericTask(this.node); //Čestitam! Stigao si do časovničara.
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
