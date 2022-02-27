
import { _decorator, Component, Node, ParticleSystem, SceneAsset, Director } from 'cc';
import { Consequence } from './Consequence';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ConsequenceTurnOff
 * DateTime = Mon Jan 10 2022 16:33:54 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ConsequenceTurnOff.ts
 * FileBasenameNoExtension = ConsequenceTurnOff
 * URL = db://assets/Scripts/Consequences/ConsequenceTurnOff.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ConsequenceGoDarkVeselaUlica')
export class ConsequenceGoDarkVeselaUlica extends Consequence {
    @property(Node)
    Sky?: Node;

    @property(Node)
    DirectLights?: Node;

    start () {
    }

    resolve() {
    
        //this.node.active = false;
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
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
