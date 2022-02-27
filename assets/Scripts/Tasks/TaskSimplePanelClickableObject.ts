
import { _decorator, Component, Node, director, macro, Collider } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { JSONquestTekst } from '../RemoteScripts/JSONloader';
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { Task } from './Task';
import { GameManager } from '../GameManager';

@ccclass('TaskSimplePanelClickableObject')
export class TaskSimplePanelClickableObject extends Task {

    @property(String)
    remoteName!: String;

    tekstObject: JSONquestTekst = new JSONquestTekst ;

    start () {
        
        this.getTekstRemotely();
    }
    
    getTekstRemotely() {
        if(this.remoteName != "") {
            GameManager.getInstance().jsonLoader?.fetchQuestTekst(this.remoteName.toString(), this.tekstObject)!;
        }
    }

    showTask () {
        if(this.isItOkToExecute()) {
            this.taskManager.genericUI!.active = true;
            this.taskManager.genericUI!.getComponent(ScriptEffects)!.fadeInActive();
            this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTaskJSONwithReturn(this.tekstObject, this); //Čestitam! Stigao si do časovničara.
        }
    }

    execute() {
        this.executed = true;
        this.taskManager.refreshExecutedTasks(this.node.parent!);

        this.executeNextTasksByForce();
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
