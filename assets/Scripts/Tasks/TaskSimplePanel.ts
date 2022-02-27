
import { _decorator, Component, Node, director, Collider } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { JSONquestTekst } from '../RemoteScripts/JSONloader';
import { GenericUI } from "../Utilities/GenericUI";
import { Task } from './Task';
import { GameManager } from '../GameManager';

@ccclass('TaskSimplePanel')
export class TaskSimplePanel extends Task {

    @property(String)
    remoteName!: String;

    tekstObject: JSONquestTekst = new JSONquestTekst ;

    start () {
        let trigger = this.getComponent(Collider);
        if (trigger) { 
            trigger.on( "onTriggerEnter", this.taskReached, this);
        }
        this.getTekstRemotely();
    }

    getTekstRemotely() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.fetchQuestTekst(this.remoteName.toString(), this.tekstObject)!;
        }
    }

    taskReached (event: any) {
        if(event.otherCollider.node.name == "Player" )  {
            if(this.requirementForTaskCompleted && !this.executed) 
                this.execute();
                
        }
            
            
    }

    execute () {
        
        if(this.isItOkToExecute()) {
            this.taskManager.genericUI!.active = true;
            this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTaskJSON(this.tekstObject); //Čestitam! Stigao si do časovničara.
            
            this.executed = true;
            this.taskManager.refreshExecutedTasks(this.node.parent!);
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
