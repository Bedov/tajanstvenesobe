
import { _decorator, Component, Node, director, Collider, game, Canvas, macro, Sprite, Enum } from 'cc';
const { ccclass, property } = _decorator;

import { TaskManager } from "./TaskManager";
import { ScriptEffects } from "../Utilities/ScriptEffects";
import { GenericUI } from "../Utilities/GenericUI";
import { DetectTypeOfDevice } from "../DetectTypeOfDevice";
import { Task } from './Task';
import { GameManager } from '../GameManager';
import { JSONimage, JSONquestTekst } from '../RemoteScripts/JSONloader';
import { elevator, GlobalManager, levelObject, levelStatus } from '../GlobalManager';



@ccclass('TaskEnding')
export class TaskEnding extends Task {

    myTimeHasCome = true;


    @property (Boolean)
    debugEnding = false;

    start(){
        this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER);
        
        //this.scheduleOnce(this.fetchTheData, this.orderNumber * 0.05);
        
    }



    update() {

    }

    checkExecution() {
        if(this.isItOkToExecute()) {
            this.showTask();
            this.unschedule(this.checkExecution);
        }
            
    }


    showTask() {
        GlobalManager.getInstance().activeLevelData.setLevelProgress(0);
        var indexOfCurrentScene = GlobalManager.getInstance().levelsArray.indexOf(GlobalManager.getInstance().activeLevelData);


        if(GlobalManager.getInstance().activeLevelData.status == levelStatus.unlocked ) 
            GlobalManager.getInstance().activeLevelData.status = levelStatus.finished;

            // console.log("Task ending active level: " + GlobalManager.getInstance().activeLevelData.sceneName);
            // console.log("indexOfCurrentScene " + indexOfCurrentScene);
            // console.log("GlobalManager.getInstance().levelsArray.length: " + GlobalManager.getInstance().levelsArray.length);

        if(indexOfCurrentScene < GlobalManager.getInstance().levelsArray.length -1) {
            GlobalManager.getInstance().levelsArray[indexOfCurrentScene + 1].status = levelStatus.unlocked;
            GlobalManager.getInstance().activeLevelData =  elevator; //  
            GlobalManager.getInstance().activeLevelData.setLevelProgress(1); 
        } else {
            GlobalManager.getInstance().activeLevelData =  elevator; //  
            GlobalManager.getInstance().activeLevelData.setLevelProgress(3); 
        }
        

        director.loadScene("MainMenuLift"+ GlobalManager.getInstance().projectNumber.toString());

        this.executed = true;
    }

    findSceneDataByName(sceneName: string) {
        var levelsArray = GlobalManager.getInstance().levelsArray;
        
        var returnLevel = new levelObject;
        
        levelsArray.forEach(element => {
            if(element.sceneName == sceneName) 
              returnLevel = element;
        });
  
        return returnLevel;
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
