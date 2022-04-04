
import { _decorator, Component, Node } from 'cc';
import { RememberAndRestore } from '../Utilities/RememberAndRestore';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DbuttonActivateGeneric
 * DateTime = Fri Apr 01 2022 14:07:26 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = 3DbuttonActivateGeneric.ts
 * FileBasenameNoExtension = 3DbuttonActivateGeneric
 * URL = db://assets/Scripts/UI/3DbuttonActivateGeneric.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('DbuttonActivateGeneric')
export class DbuttonRestart extends Component {
    
    @property(Node)
    goldberg!: Node;

    start () {
        
    }

    restartGolderg() {
        this.goldberg.getComponent(RememberAndRestore)?.restart();
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
