
import { _decorator, Component, Node } from 'cc';
import { GlobalManager } from '../GlobalManager';
const { ccclass, property } = _decorator;


 
@ccclass('PowerBar')
export class PowerBar extends Component {

    buttonsArray : Array<Node> = [];


    start () {


        this.buttonsArray!.push(this.node.getChildByName("Kanister_energija1")!);
        this.buttonsArray!.push(this.node.getChildByName("Kanister_energija2")!);
        this.buttonsArray!.push(this.node.getChildByName("Kanister_energija3")!);
        this.buttonsArray!.push(this.node.getChildByName("Kanister_energija4")!);
        this.buttonsArray!.push(this.node.getChildByName("Kanister_energija5")!);

        this.setBars();
    }


    setBars() {
        var generalProgress = GlobalManager.getInstance().findGeneralProgress();

        for (let index = 0; index < generalProgress; index++) {
            
            this.buttonsArray[index].active = true;
        }

        
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
