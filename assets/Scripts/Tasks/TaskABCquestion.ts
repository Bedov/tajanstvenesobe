
import { _decorator, Component, Node, AudioSource, director, Collider, Animation, random, randomRangeInt, Game } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { GenericUIABC } from "../Utilities/GenericUI-ABC";
import { Task } from './Task';

import { JSONloader } from "../RemoteScripts/JSONloader";
import { JSONtask1 } from "../RemoteScripts/JSONloader";
import { GameManager } from '../GameManager';
@ccclass('TaskABCquestion')
export class TaskABCquestion extends Task {

    @property(String)
    remoteName!: String;

    @property(Number)
    expectedQuestions!: Number;

    

    questionsTempArray : Array<JSONtask1> = new Array<JSONtask1>();

    questionsShown : Array<boolean> = new Array<boolean>();
    questionShownFilled = false;

    private audioSource: AudioSource = null!;
   

    start () {
       // this.scheduleOnce(this.getQuestions, this.orderNumber * 0.05);

       this.schedule(this.isItMyTimeForDownloading, 0.1);
       

        this.audioSource = this.node.getComponent(AudioSource)!;


        
        this.scheduleOnce(this.fillQuestionsShownFalse, this.orderNumber * 0.05 + 2);
    }

    isItMyTimeForDownloading() {

        if(this.orderNumber <= GameManager.getInstance().downloadedCheckpoint && !this.downloadStarted) {
            this.getQuestions();
            this.downloadStarted = true;

            this.unschedule(this.isItMyTimeForDownloading);
        }
    }

    fillQuestionsShownFalse() {
        this.questionsTempArray.forEach(element => {
            this.questionsShown.push(false);
             
        });
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
        console.log("ShowTask!!!");
        if(this.isItOkToExecute()) {
            if(GameManager.getInstance().downloadedCheckpoint <= this.orderNumber) {
                GameManager.getInstance().loadingHandler?.turnOnLoading();
                this.scheduleOnce(this.showTask, 0.2);
                console.log("DownloadedCheckpoint : " + GameManager.getInstance().downloadedCheckpoint);
    
                console.log("this.orderNumber : " + this.orderNumber);
                return;
            }
            
            GameManager.getInstance().loadingHandler?.turnOffLoading();
            this.taskManager.genericUIABC!.active = true;
            this.taskManager.genericUIABC!.getComponent(GenericUIABC)!.turnOnGenericTask(this.node); //Čestitam! Stigao si do časovničara.
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
