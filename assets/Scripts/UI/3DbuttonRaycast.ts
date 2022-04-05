
import { _decorator,
    Component,
    math, 
    macro,
    Label,
    systemEvent,
    SystemEvent,
    game,
    view,
    Node,
    Vec3,
    Camera,
    Quat,
    director,
    geometry,
    setDisplayStats,
    sys,
    EventKeyboard,
    KeyCode,
    PhysicsRayResult,
    PhysicsSystem,
    RigidBody,
    Layers} from 'cc';
import { GameManager, GameStatuType } from '../GameManager';
import { GlobalManager } from '../GlobalManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = DbuttonRaycast
 * DateTime = Thu Nov 25 2021 15:49:34 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = 3DbuttonRaycast.ts
 * FileBasenameNoExtension = 3DbuttonRaycast
 * URL = db://assets/Scripts/3DbuttonRaycast.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
 import { DbuttonActivate } from "../UI/3DbuttonActivate";

@ccclass('DbuttonRaycast')
export class DbuttonRaycast extends Component {
    // [1]
    // dummy = '';

    cameraObject! : Node ; 
    // [2]
    // @property
    // serializableDummy = 0;
    maxDepth = 15;

    tempItemArray: Node[] = [];

    start () {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);

        this.node.children.forEach(element => {
            if(element.name == "Camera")
                this.cameraObject = element;
        });
    }

    sortList(r: PhysicsRayResult[]) {

        var sortedArray = r.sort(   function(a, b) {
            return a.distance - b.distance;
        } );

       /*var sortedArray: { hitPoint: math.Vec3; }[] = r.sort((n1,n2) => {
            if (n1.distance > n2.distance) {
                return 1;
            }

            if (n1.distance < n2.distance) {
                return -1;
            }

            return 0;
        }); */


        return sortedArray;
    }
    

    onTouchEnd(e: any) {

        var _rayPrazan: geometry.ray = new geometry.ray();

        this.cameraObject.getComponent(Camera)?.screenPointToRay(e._point.x, e._point.y, _rayPrazan);

        //var raycast: geometry.Ray = new geometry.Ray(this.node.position.x, this.node.position.y, this.node.position.z, 0, -1, 0);
        var hit: Vec3 = new Vec3();
        var distance = 0; 

        if (PhysicsSystem.instance.raycast(_rayPrazan)) {
            const r = PhysicsSystem.instance.raycastResults;

            
            

            r.forEach(rayCastItem => {
                this.tempItemArray.forEach(touchStartItem => {
                    
                    if(rayCastItem.collider.node == touchStartItem && GlobalManager.getInstance().gameStatus == GameStatuType.gameActive) {
                        touchStartItem.getComponent(DbuttonActivate)?.startAnimation();
                    }
                });
            });
        }

        while(this.tempItemArray.length)
            this.tempItemArray.pop();


        
    }

    onTouchStart(e: any){

        var _rayPrazan: geometry.ray = new geometry.ray();

        this.cameraObject.getComponent(Camera)?.screenPointToRay(e._point.x, e._point.y, _rayPrazan);

        //var raycast: geometry.Ray = new geometry.Ray(this.node.position.x, this.node.position.y, this.node.position.z, 0, -1, 0);
        var hit: Vec3 = new Vec3();
        var distance = 15; 

        if (PhysicsSystem.instance.raycast(_rayPrazan)) {
            const r = PhysicsSystem.instance.raycastResults;

            //if( r[0].collider.node.getComponent(DbuttonActivate) )
            //    r[0].collider.node.getComponent(DbuttonActivate)?.startAnimation();

            if(this.maxDepth > r.length)
                var depth = r.length;
            else
                var depth = this.maxDepth;

            var rSorted = this.sortList(r);
            
            for (let i = 0; i < r.length; i++) {
                
                const item = rSorted[i];
                var shortestDistance = rSorted[0].distance;

                if( item.collider.node.getComponent(DbuttonActivate) ) {   
                    if( Math.abs(shortestDistance - item.distance) < distance)  {
                        //item.collider.node.getComponent(DbuttonActivate)?.startAnimation();
                        this.tempItemArray.push(item.collider.node);
                    }
                }
            
            } 
        }
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
