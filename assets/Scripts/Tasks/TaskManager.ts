
import { _decorator, Component, Node, Game, Vec3, Quat, quat, Animation, Prefab, director, instantiate} from 'cc';
import { Checkpoint } from '../Checkpoint/Checkpoint';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TaskManager
 * DateTime = Thu Nov 18 2021 00:16:36 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = TaskManager.ts
 * FileBasenameNoExtension = TaskManager
 * URL = db://assets/Scripts/TaskManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 import { DetectTypeOfDevice } from "../DetectTypeOfDevice";
import { FollowGoForward } from '../FollowGoForward';
import { GameManager } from '../GameManager';
import { GlobalManager, levelObject } from '../GlobalManager';
import { TrophiesManagment } from '../TrophiesManagment';
import { ButtonDisabler } from '../Utilities/ButtonDisabler';
import { GenericUI } from '../Utilities/GenericUI';
import { Task } from './Task';
import { TaskABCquestion } from './TaskABCquestion';
 
 
@ccclass('TaskManager')
export class TaskManager extends Component {

    @property({type: Node})
    public genericUI: Node | null = null;

    @property({type: Node})
    public genericUIimage: Node | null = null;

    @property({type: Node})
    public genericUIABC: Node | null = null;

    @property({type: Node})
    public genericUIinput: Node | null = null;

    @property({type: Node})
    public canvas: Node | null = null;

    @property({type: Node})
    public gameManager: Node | null = null;

    @property({type: Node})
    public subtitle: Node | null = null;

    @property({type: Node})
    public helpButton: Node | null = null;

    @property({type: Node})
    public arrow: Node | null = null;

    @property({type: Node})
    public loadingPanel: Node | null = null;

    @property({type: Node})
    public follow: Node | null = null;

    @property({type: Prefab})
    public followPrefab: Node | null = null;

    checkpoints: Node[] = [];

    onLoad () {
        this.checkpoints = this.node.children; 
        this.giveOrderNumberToTasks();
    }

    start() {
        this.checkDoneTasks();
    }

    giveOrderNumberToTasks() {
        var tasks = this.getTasks();
       for (let index = 0; index < tasks.length; index++) {
           tasks[index].getComponent(Task)!.orderNumber = index;
           
       }
    }

    getTasks() {

        var tasks: Node[] = [];

        this.checkpoints.forEach(checkpoint => {
            checkpoint.children.forEach(element => {
                if(element.getComponent(Task) != undefined)
                    tasks.push(element);

                element.children.forEach(element2 => {
                    if(element.getComponent(Task) != undefined)
                        tasks.push(element2);
                });
            });
        });

        return tasks;
    }

    refreshCheckpoint(checkpoint: Node) {
        var newProgress = this.checkpoints.indexOf(checkpoint) + 1;

        console.log("Level Data WAKA " +  GlobalManager.getInstance().activeLevelData.sceneName );
        GlobalManager.getInstance().activeLevelData!.levelProgress = Number( newProgress );

        if(newProgress != undefined)
            if(newProgress > GlobalManager.getInstance().activeLevelData.levelProgress!)
            GlobalManager.getInstance().activeLevelData.levelProgress = newProgress;

        if(GameManager.getInstance().trophies != undefined)
            GameManager.getInstance().trophies?.getComponent(TrophiesManagment)?.calculateLockedWithEffect();

       
    }

    checkReadinesForTasks() {
        var children = this.getTasks();

        children.forEach(element => {
            if(element.getComponent(Task) )
            element.getComponent(Task)?.checkReadienes();
        });
    }

    checkDoneTasks() {
        var children = this.getTasks();

        if(GlobalManager.getInstance().activeLevelData.levelProgress == 0)
            return;

        for (let index = Number(GlobalManager.getInstance().activeLevelData.levelProgress) -1 ; index >= 0; index--) {
            console.log("PETLJA " + index);
            
            const checkpoint = this.checkpoints[index];
            checkpoint.children.forEach(task => {
                task.getComponent(Task)!.executed = true;
 
            });
            
        }

        this.checkReadinesForTasks();

        this.checkActivityOfHelpButton();
        /*
        children.forEach(task => {

            if( GameManager.getInstance().Progress > task.getComponent(Task)!.checkPointBelong)
            task.getComponent(Task)!.executed = true;

        }); */


    }
    getDirection() {
        
        GameManager.getInstance().Canvas!.getChildByName("HelpPanel")!.getChildByName("HelpNavigation")!.getComponent(ButtonDisabler)!.lockedByOutside = true;
        
        if(this.arrow != null)
            this.arrow!.getComponent(Animation)?.play("ScaleIn");
        else
            GameManager.getInstance().Player!.getChildByName("Arrow")!.getComponent(Animation)?.play("ScaleIn");

    }

    getDirectionFollow() {
        var itemPosition: Vec3 = new Vec3( this.checkpoints[ Number(GlobalManager.getInstance().activeLevelData.levelProgress)].getComponent(Checkpoint)!.QuestionItem!.worldPosition ) ;
    

        const node1 = instantiate(this.followPrefab);
        node1!.getComponent(FollowGoForward)!.setTarget( this.checkpoints[ Number(GlobalManager.getInstance().activeLevelData.levelProgress)].getComponent(Checkpoint)!.QuestionItem!);
        //let node1: Node= instantiate(this.followPrefab);  //instantiate(this.follow);

        node1!.parent = this.node;
        node1!.position = new Vec3( GameManager.getInstance().Player!.getChildByName("Arrow")!.worldPosition );
        
        node1!.lookAt( itemPosition);

        var Vec3EulerRot: Vec3 = new Vec3;
        Quat.toEuler(Vec3EulerRot, node1!.rotation );

        console.log("Rotation " + Vec3EulerRot.toString() );
        
    }

    readAgain() {
        this.checkpoints[ Number(GlobalManager.getInstance().activeLevelData.levelProgress)].children.forEach(taskInCheckpoint => {
            if( this.checkpoints[ Number(GlobalManager.getInstance().activeLevelData.levelProgress)].getComponent(Checkpoint)?.Question != taskInCheckpoint ) {
                if(taskInCheckpoint.getComponent(Task)!.uvodniTask == false) {
                    taskInCheckpoint.getComponent(Task)!.executed = false;
                    //taskInCheckpoint.getComponent(Task)?.startScheduling();
                }
                
            }
        });
        this.checkReadinesForTasks();
    }

    checkActivityOfHelpButton() {
        if(this.checkpoints[ Number(GlobalManager.getInstance().activeLevelData.levelProgress)].getComponent(Checkpoint)?.QuestionItem != undefined)
            this.helpButton!.active = false;
        else
            this.helpButton!.active = true;
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
