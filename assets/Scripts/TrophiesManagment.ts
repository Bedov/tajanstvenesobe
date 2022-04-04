
import { _decorator, Component, Node, instantiate, Vec3, Animation, ParticleSystem2D } from 'cc';
import { GameManager } from './GameManager';
import { TaskManager } from './Tasks/TaskManager';
const { ccclass, property } = _decorator;


@ccclass('TrophiesManagment')
export class TrophiesManagment extends Component {
    
    @property({type: Node})
    public particleEffect: Node | null = null;

    start () {
        var trophyNode = this.node.children[0];

        for (let index = 0; index < GameManager.getInstance().TaskManager!.getComponent(TaskManager)!.checkpoints.length - 1; index++) {
            var newTrophy = instantiate(trophyNode);
            newTrophy.parent = this.node;
        }

        this.calculateLocked();

        //GameManager.getInstance().TaskManager?.getComponent(TaskManager)?.checkpoints.length
    }

    calculateLocked() {
        for (let index = 0; index < GameManager.getInstance().Progress; index++) {
            this.node.children[index].children[0].active = true;
        }

        for (let index = Number(GameManager.getInstance().Progress); index < this.node.children.length; index++) {
            this.node.children[index].children[0].active = false;
        }

        /*
        if(GameManager.getInstance().Progress != 0)  {
            var trophiePosition = this.node.children[Number(GameManager.getInstance().Progress)].worldPosition;
            this.particleEffect?.setWorldPosition(new Vec3( trophiePosition)) ;
            this.particleEffect!.getComponent(Animation)!.play();
            this.particleEffect!.children[0].active = false;

            this.particleEffect!.children[0].active = true;
            this.particleEffect!.children[0].getComponent(ParticleSystem2D)!.enabled = true;
        }
        */
    }

    calculateLockedWithEffect() {
        var checkpointForEffect =  Number(GameManager.getInstance().Progress) - 1;
        
        //this.calculateLocked();

        //console.log("Sta sam to ulovio:  " +  this.node.children[ Number(GameManager.getInstance().Progress)].getComponent(Animation));
        
        this.node.children[checkpointForEffect].getComponent(Animation)!.play();
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
