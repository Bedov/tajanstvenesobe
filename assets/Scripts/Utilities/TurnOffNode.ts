
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TurnOffNode
 * DateTime = Fri Apr 08 2022 11:40:57 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = TurnOffNode.ts
 * FileBasenameNoExtension = TurnOffNode
 * URL = db://assets/Scripts/Utilities/TurnOffNode.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TurnOffNode')
export class TurnOffNode extends Component {
    
    @property(Node)
    nodeToTurnOff!: Node;

    start () {
       this.nodeToTurnOff.active = false;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
