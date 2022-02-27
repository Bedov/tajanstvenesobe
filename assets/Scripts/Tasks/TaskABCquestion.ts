
import { _decorator, Component, Node, AudioSource, director, Collider, Animation, random, randomRangeInt } from 'cc';
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
    correctAnswer!: Number;

    questionsTempArray : Array<JSONtask1> = new Array<JSONtask1>();

    questionsShown : Array<boolean> = new Array<boolean>();
    questionShownFilled = false;

    private audioSource: AudioSource = null!;
   

    start () {
        this.getQuestions();

        this.audioSource = this.node.getComponent(AudioSource)!;

        
        this.scheduleOnce(this.fillQuestionsShownFalse, 1);
    }

    fillQuestionsShownFalse() {
        this.questionsTempArray.forEach(element => {
            this.questionsShown.push(false);
             
        });
    }

    getQuestions() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.fetchQuestions(this.remoteName, this.questionsTempArray)!;
            //JSONloader.getInstance().returnTask1(this.remoteName, this.taskTemp)!;
            //this.JSONloader.returnTask1(this.remoteName, this.taskTemp)!;
        }
    }

    getRandomTask() {
        var imamoNekoriscene = false;
        var nasaoNekoriscenog = false;
        var randomIndex = randomRangeInt(0, this.questionsShown.length);

        console.log("Radnom index: " + randomIndex);
        

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

                   
                console.log(" this.questionsShown.length: " +  this.questionsShown.length);
                console.log("nasaoNekoriscenog: " + nasaoNekoriscenog);
                console.log("randomIndex: " + randomIndex);
            }
        }

        console.log("imamoNekoriscene: " + imamoNekoriscene);

        this.questionsShown[randomIndex] = true;

        return this.questionsTempArray[randomIndex];
    }

    showTask () {
        
        if(this.isItOkToExecute()) {
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
