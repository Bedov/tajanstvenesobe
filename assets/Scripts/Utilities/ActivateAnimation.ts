
import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ActivateAnimation
 * DateTime = Fri May 27 2022 15:04:48 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = ActivateAnimation.ts
 * FileBasenameNoExtension = ActivateAnimation
 * URL = db://assets/Scripts/Utilities/ActivateAnimation.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ActivateAnimation')
export class ActivateAnimation extends Component {
    // [1]
    // dummy = '';

    
    @property([Node])
    objectsToAnimate: Node[] = [];


    activateAnimation() {
        
        
        this.objectsToAnimate.forEach(element => {
            if(element.active == true) {
            var parentAnimation = element.getComponent(Animation)!;

                parentAnimation.play();
            }
        
        });
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
