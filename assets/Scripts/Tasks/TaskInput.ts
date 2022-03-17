
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
    correctAnswer!: Number;

    questionTemp: JSONtask2 = new JSONtask2;

    private audioSource: AudioSource = null!;
   

    start () {
        this.getQuestions();

        this.audioSource = this.node.getComponent(AudioSource)!;
        

    }


    getQuestions() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.returnQuestionInput(this.remoteName.toString(), this.questionTemp)!;
 
        }
    }

    update() {
        
        
    }


    showTask () {
        
        if(this.isItOkToExecute()) {
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
