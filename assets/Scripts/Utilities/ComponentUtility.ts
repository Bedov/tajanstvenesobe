
import { _decorator, Component, Node, MeshColliderComponent, MeshCollider, MeshRenderer, BatchingUtility, director, PhysicsSystem, RigidBody, physics } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ComponentUtility
 * DateTime = Mon Dec 20 2021 14:22:17 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = ComponentUtility.ts
 * FileBasenameNoExtension = ComponentUtility
 * URL = db://assets/Scripts/Utilities/ComponentUtility.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('ComponentUtility')
export class ComponentUtility extends Component {
    
    @property(Boolean)
    turnOffMesh?: Boolean = false;

    @property(Boolean)
    turnOnConvex?: Boolean = false;

    @property(Boolean)
    rigidBody?: Boolean = false;

    @property(Node)
    batchedRoot!: Node;

    setProperties(element: Node) {
        if(this.turnOffMesh)
            element.getComponent(MeshRenderer)!.enabled = false;

        var meshic = new MeshCollider;
        //meshic.
        element.addComponent(MeshCollider);
        
        element.getComponent(MeshCollider)!.mesh = element.getComponent(MeshRenderer)!.mesh;
       
        if(this.turnOnConvex)
            element.getComponent(MeshCollider)!.convex = true;

        if(this.rigidBody) {
            element.addComponent(RigidBody);
            element.getComponent(RigidBody)!.isStatic = true;
        }
        //if(element.getComponent(RigidBody))
        //    this.useCCD( element.getComponent(RigidBody)!, true);
    }

    start () {
        //PhysicsSystem.instance.enable = true;
        //var manager = director.getCollisionManager();
        //manager.enabled = true;

        this.node.children.forEach(element => {

            if(element.children.length != 0) {
                element.children.forEach(element => {
                    if(element.getComponent(MeshRenderer) != null) {
                        this.setProperties(element);
                    }

                    if(element.children.length != 0) {
                        element.children.forEach(element => {
                            if(element.getComponent(MeshRenderer) != null) {
                                this.setProperties(element);
                            }

                            if(element.children.length != 0) {
                                element.children.forEach(element => {
                                    
                                    if(element.getComponent(MeshRenderer) != null) {
                                        this.setProperties(element);
                                    }
                                });
                            }

                        });
                    }
                });
            }
            if(element.getComponent(MeshRenderer) != null) {
                this.setProperties(element);
            }
            /*
            var mesh = element.addComponent(MeshCollider);
            
            var mesh2 = element.getComponent(MeshCollider);
            mesh2!.mesh = mesh2!.getComponent(MeshRenderer)!.mesh; */
            
        });
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
