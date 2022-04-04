
import { _decorator, Component, Node, MeshCollider } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ColliderChecker
 * DateTime = Fri Apr 01 2022 11:27:39 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = ColliderChecker.ts
 * FileBasenameNoExtension = ColliderChecker
 * URL = db://assets/Scripts/Utilities/ColliderChecker.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('ColliderChecker')
export class ColliderChecker extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    update (deltaTime: number) {
        console.log("Scene Mesh Collider: " + this.node.getComponent(MeshCollider)?._id);
        console.log("Scene Mesh Collider: " + this.node.getComponent(MeshCollider)?.mesh);
        console.log("Scene Mesh Collider: " + this.node.getComponent(MeshCollider));
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
