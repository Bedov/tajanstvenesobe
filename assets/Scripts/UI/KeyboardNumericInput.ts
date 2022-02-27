
import { _decorator, Component, Node } from 'cc';
import { GameManager } from '../GameManager';
const { ccclass, property } = _decorator;


 
@ccclass('KeyboardNumericInput')
export class KeyboardNumericInput extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {

    }

    buttonClicked(event: Event, customData: string) {
        if(customData == "X") 
            GameManager.getInstance().typeInputResult!.string = "";
        else
            GameManager.getInstance().typeInputResult!.string += customData; 

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
