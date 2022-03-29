
import { _decorator, Component, Node, director, Collider, macro, Game } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { Consequence } from '../Consequences/Consequence';
import { GameManager } from '../GameManager';

@ccclass('Task')
export class Task extends Component {

    requirementForTaskCompleted = false;
    executed = false;

    downloadStarted = false;

    orderNumber = 0;

    @property([Node])
    dependencies: Node[] = [];

    @property(Boolean)
    uvodniTask: Boolean = false;


    @property(Boolean)
    repeatToogle: Boolean = false;

    @property(Boolean)
    reportToUser: Boolean = false;

    @property([Node])
    taskToExecuteByForce: Node[] = [];

    @property([Consequence])
    consequencesToResolve: Consequence[] = [];

    @property(Number)
    checkPointBelong: Number = 0;

    taskManager!: TaskManager;

    onLoad() {

        this.taskManager = this.node.parent?.parent?.getComponent("TaskManager") as TaskManager;; //  GameManager.getInstance().TaskManager?.getComponent("TaskManager") as TaskManager;

        console.log("My name: + " + this.name + "  My Checkpoint " + this.orderNumber);
        //this.schedule(this.getNeeded(), 0.1 );
        //console.log("Canvas !!!!! + " + GameManager.getInstance().jsonLoader?.name);

        this.checkReadienes();
    }

    getNeeded(){
  
        if(GameManager.getInstance().jsonLoader == undefined)
            this.schedule(this.getNeeded(), 1 );
        
    }

    isItOkToExecute(){
        if(this.requirementForTaskCompleted) {
            if(!this.executed)
                return true;
            else {
                if(this.repeatToogle)
                    return true;
                else {
                    if(this.reportToUser)
                        this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTask("Već si obavio ovaj zadatak.");
                    return false;
                    }
                }
        }
        else {
            if(this.reportToUser)
                this.taskManager.genericUI!.getComponent(GenericUI)!.turnOnGenericTask("Ovo nije objekat koji trazis."); //  genericUIgeneABC!.getComponent(
            return false;
        }
    }

    loadingBlocker() {
        GameManager.getInstance().loadingHandler?.turnOnLoading();        
    }

    showTask() {
 

        //this.taskManager.refreshExecutedTasks(this.node.parent!);
    }

    

    taskCompleted () {
        

        this.executed = true;
        
        this.taskManager.checkReadinesForTasks();
        
        this.resolveConsequnces();
        this.executeNextTasksByForce();

        this.taskManager.refreshExecutedTasks(this.node.parent!);
    }

    resolveConsequnces() {
        if(this.consequencesToResolve.length == 0) {
            return;
        }
    
        this.consequencesToResolve.forEach(element => {
            element.resolve();
        });
    }

    executeNextTasksByForce() {
        if(this.taskToExecuteByForce.length == 0) {
            return;
        }
    
        this.taskToExecuteByForce.forEach(element => {
            element.getComponent(Task)!.showTask();
        });
    }

    checkReadienes() {
        if(this.dependencies.length == 0) {
            this.requirementForTaskCompleted = true;
            return;
        }

        var weHaveUnresolvedDependency = false;
        
        this.dependencies.forEach(element => {
            if( element.getComponent(Task)!.executed == false) {
                this.requirementForTaskCompleted = false;
                weHaveUnresolvedDependency = true;
            }
        });

        
        if( !weHaveUnresolvedDependency )
            this.requirementForTaskCompleted = true;

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
