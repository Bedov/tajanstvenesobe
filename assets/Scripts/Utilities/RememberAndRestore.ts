
import { _decorator, Component, Node, Vec3, Quat, RigidBody, Animation } from 'cc';
import { GlobalManager } from '../GlobalManager';
import { Trigger1 } from '../Goldberg/Trigger1';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RememberAndRestore
 * DateTime = Thu Mar 31 2022 13:41:55 GMT+0200 (Central European Summer Time)
 * Author = stickandrope
 * FileBasename = RememberAndRestore.ts
 * FileBasenameNoExtension = RememberAndRestore
 * URL = db://assets/Scripts/Utilities/RememberAndRestore.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RememberAndRestore')
export class RememberAndRestore extends Component {
    // [1]
    // dummy = '';

    
    @property([Node])
    animatedObjects: Node[] = [];

    @property(Node)
    node1!: Node;

    @property(Node)
    node2!: Node;

    @property(Node)
    node3!: Node;

    @property(Node)
    node4!: Node;

    @property(Node)
    node5!: Node;

    objectsNodePosRot: NodePosRot[] = [];
        
    @property([Trigger1])
    triggersToRestart: Trigger1[] = [];

    start () {
        this.animatedObjects[0].getComponent(RigidBody)!.isStatic = true;

        this.animatedObjects.forEach(element => {
            var nodePosRot = new NodePosRot;
            nodePosRot.node = element;
            nodePosRot.position = new Vec3( element.position);
            nodePosRot.rotation = new Quat(element.rotation) ;

            

            this.objectsNodePosRot.push(nodePosRot);

            this.setActive();
        });
    }

    setActive() {
        for (let index = GlobalManager.getInstance().findGeneralProgress(); index < this.objectsNodePosRot.length; index++) {
            this.objectsNodePosRot[index].node.active = false
        }
    }

    restart() {
        this.animatedObjects[0].getComponent(RigidBody)!.isStatic = false;

        this.objectsNodePosRot.forEach(element => {
            if( element.node.getComponent(Animation))
                element.node.getComponent(Animation)?.stop();

            element.node.setPosition(element.position!);
            element.node.setRotation(element.rotation!);

            if( element.node.getComponent(RigidBody)) {
                element.node.getComponent(RigidBody)?.clearVelocity();
                element.node.getComponent(RigidBody)?.clearForces();
            }
        });

        this.triggersToRestart.forEach(element => {
            element.animationPlayed = false;
        });
    }

    node1func() {
        this.node1.active = !this.node1.active;
    }

    node2func() {
        this.node2.active = !this.node2.active;
    }
    node3func() {
        this.node3.active = !this.node3.active;
    }
    node4func() {
        this.node4.active = !this.node4.active;
    }
    node5func() {
        this.node5.active = !this.node5.active;
    }

}

export class NodePosRot {
    node!: Node;
    position?: Vec3;

    rotation? : Quat;

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
