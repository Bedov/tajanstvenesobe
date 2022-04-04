
import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DbuttonActivate
 * DateTime = Thu Nov 25 2021 16:40:52 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = 3DbuttonActivate.ts
 * FileBasenameNoExtension = 3DbuttonActivate
 * URL = db://assets/Scripts/UI/3DbuttonActivate.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 import { ScriptEffects } from "../Utilities/ScriptEffects";
 import { Task } from "../Tasks/Task";

@ccclass('DbuttonActivate')
export class DbuttonActivate extends Component {

    @property(Node)
    myTask!: Node;

    @property(Boolean)
    taskCompletedAutomaticly: boolean = false;

    execute () {
        
        if(this.myTask.getComponent(Task)) {
            if(this.taskCompletedAutomaticly) 
                this.myTask.getComponent(Task)?.taskCompleted(); 
            else
                this.myTask.getComponent(Task)?.showTask(); 

        } else
            console.log("Dugme nije dobro namesteno");
            
    }

    //Dodali smo animaciju kao prioritet da bismo u nekim slucajevima usporili pokretanje execute()
    startAnimation() { 
        
        if(this.node.getComponent(Animation))
            this.node.getComponent(Animation)?.play();
        else {
            this.execute();
            
            
        }
    }

    start () {
        // [3]
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
