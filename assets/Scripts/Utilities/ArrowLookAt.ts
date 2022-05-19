
import { _decorator, Component, Node, Vec3, Animation } from 'cc';
import { Checkpoint } from '../Checkpoint/Checkpoint';
import { GameManager } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
import { TaskManager } from '../Tasks/TaskManager';
import { ButtonDisabler } from './ButtonDisabler';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ArrowLookAt
 * DateTime = Fri Jan 14 2022 13:26:16 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ArrowLookAt.ts
 * FileBasenameNoExtension = ArrowLookAt
 * URL = db://assets/Scripts/Utilities/ArrowLookAt.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ArrowLookAt')
export class ArrowLookAt extends Component {
    // [1]
    // dummy = '';

    @property(Node)
    arrowDot?: Node;

    @property(Number)
    arrowHeight: Number = 0.13;

    checkPoints: Node[] = [];

    sceduled = false;

    worldScale = 1;

    helpButon : Node = new Node ;

    start () {
        this.checkPoints = GameManager.getInstance().TaskManager!.getComponent(TaskManager)!.checkpoints;

        this.worldScale = GameManager.getInstance().WorldRoot!.scale.z;

        this.helpButon = GameManager.getInstance().Canvas!.getChildByName("HelpPanel")!.getChildByName("HelpNavigation")!;
    }

    update (deltaTime: number) {

        if(this.node.scale.x < 1)
            this.sceduled = false;

        
        if(this.sceduled == false && Number(this.node.scale.x) == 1) {
            this.scheduleOnce(this.turnOffArrow, 5);
            this.sceduled = true;
        }

        //console.log("COnsole " + GameManager.getInstance().Progress);
        //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)]);
        //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)].getComponent(Checkpoint));
        //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)].getComponent(Checkpoint)!.QuestionItem);


        
        
        if(this.node.scale.x > 0) {
            var itemPosition: Vec3 = new Vec3( this.checkPoints[ Number(GlobalManager.getInstance().activeLevelData.getLevelProgress())].getComponent(Checkpoint)!.QuestionItem!.worldPosition ) ;
  
            if(this.arrowDot != undefined  ) 
                this.node.worldPosition = new Vec3 (this.arrowDot!.worldPosition.x, Number(this.arrowHeight), this.arrowDot!.worldPosition.z);

            this.node.lookAt( itemPosition); //    itemPosition.x * this.worldScale, itemPosition.y * this.worldScale, itemPosition.z * this.worldScale) );
        }
     }

     turnOffArrow() {
        this.helpButon.getComponent(ButtonDisabler)!.lockedByOutside = false;
        this.getComponent(Animation)!.play("ScaleIn-Reverse");

     }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
