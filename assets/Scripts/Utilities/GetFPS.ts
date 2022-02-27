
import { _decorator, Component, Node, profiler, Label, Director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GetFPS
 * DateTime = Wed Dec 15 2021 14:36:04 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = GetFPS.ts
 * FileBasenameNoExtension = GetFPS
 * URL = db://assets/Scripts/Utilities/GetFPS.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('GetFPS')
export class GetFPS extends Component {


    tempFrames = 0;

    start () {
        this.schedule(this.getFrames,1);
    }

    getFrames() {
        this.getComponent(Label)!.string = (Director.instance.getTotalFrames() - this.tempFrames).toString();
        this.tempFrames = Director.instance.getTotalFrames();
    }

    update (deltaTime: number) {
        //this.fpsLabel.getComponent(Label)!.string  = profiler._stats!.fps.counter.value.toString() ;
        //this.fpsLabel.getComponent(Label)!.string  = Director.instance.getTotalFrames().toString();
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
