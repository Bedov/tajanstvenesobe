
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
    Layers,
    Scene,
    find} from 'cc';
const { ccclass, property } = _decorator;
//const outRay = new ray(0, -1, 0, 0, 1, 0);

import { DetectTypeOfDevice } from "./DetectTypeOfDevice";
import { GameManager, GameStatuType } from './GameManager';
import { GlobalManager } from './GlobalManager';

const KEYCODE = {
    UP: KeyCode.ARROW_UP,
    DOWN: KeyCode.ARROW_DOWN,
    LEFT: KeyCode.ARROW_LEFT,
    RIGHT: KeyCode.ARROW_RIGHT,
    W: 'W'.charCodeAt(0),
    S: 'S'.charCodeAt(0),
    A: 'A'.charCodeAt(0),
    D: 'D'.charCodeAt(0),
    Q: 'Q'.charCodeAt(0),
    E: 'E'.charCodeAt(0),
    SPACE: KeyCode.SPACE,
    SHIFT: KeyCode.SHIFT_LEFT,
}

var _pointerLockGeneral = false;
var _keyEvent = [false];

@ccclass('FirstPersonCameraMovementTest')
export class FirstPersonCameraMovementTest extends Component {

    @property
    moveSpeed = 1.5;

    @property
    forceStrenght = 1;
 
 
    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    damp = 0.2;

    _gotStartLocation = false;

    @property
    _eventOn = false;

    _finalMoveVector = new Vec3;
 
    _position = new Vec3();
    _keyPresed = false;

    _tutorialEnded = false;

    _myGround! : Node ; 
    
    @property
    heightFromGround = 0.6;

    _jumpTemp : number = 0;
    _jumpHeight : number = .5;
    _jumpSpeed : number = 2;
    _jumpRise : boolean = true;
    _jumpBool : boolean = false;

    scaledSpeedCoeficient = 1;
    phoneCoeficient: number = 1.3;

    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.scaledSpeedCoeficient = 1;//GameManager.getInstance().WorldRoot!.scale.x / 100 ;
        //director.getPhysicsManager().enabled = true;

        if(!GameManager.getInstance().isMobileOrTablet)
            this.phoneCoeficient = 1;

        Vec3.copy(this._position, this.node.position);
    }
 
    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    jump() {
        var rigidBody = this.node.getComponent(RigidBody);

        var hit: Vec3 = new Vec3();
        var distance = 0; 

        var currentVel3 = new Vec3; 
        rigidBody?.getLinearVelocity(currentVel3);

        var raycast: geometry.Ray = new geometry.Ray(this.node.getWorldPosition().x, this.node.getWorldPosition().y, this.node.getWorldPosition().z, 0, -1, 0);

        if (PhysicsSystem.instance.raycast(raycast)) {
            
            const r = PhysicsSystem.instance.raycastResults;
            var item = r[0];
            var shortestDistance = 2;

             r.forEach(element => {
                if(element.collider.node.name != "Player" && (this.node.position.y - element.hitPoint.y) < shortestDistance) {
                    item = element;
                    shortestDistance = this.node.position.y - element.hitPoint.y;
                }
                
            }); 

            if(item) {
                if( (this.node.position.y - item.hitPoint.y ) < 1) {
                    rigidBody?.setLinearVelocity(new Vec3( currentVel3.x, 5, currentVel3.z));
                    console.log("Height " + (this.node.position.y - item.hitPoint.y));
                    console.log("Name " + item.collider.node.name);
                }    

            }
           
        }
        
        

    }
 
    update(dt: number) {
    
        if(GameManager.getInstance().gameStatus == GameStatuType.gamePaused)
            return;

        

        var runningSpeed = 0;
        if(_keyEvent[KEYCODE.SHIFT] == true) 
            runningSpeed = 1;

        //if(this._keyPresed && this.fpsMovement._pointerLockLocal ) 
        if(this._keyPresed ){
            if(this.phoneCoeficient == 1)
                this.creatingFinalVectorKeyboard();
            //this.node.getComponent(RigidBody)?.applyImpulse(this._finalMoveVector.multiplyScalar(this.forceStrenght));
            //this.node.getComponent(RigidBody)?.applyForce(this._finalMoveVector.multiplyScalar(this.forceStrenght));
            var scaledVec3 = this._finalMoveVector.multiplyScalar( GlobalManager.getInstance().moveSpeed * this.moveSpeed * this.scaledSpeedCoeficient * this.phoneCoeficient  + runningSpeed);
            var currentVel3 = new Vec3; 
            this.node.getComponent(RigidBody)?.getLinearVelocity(currentVel3);

            this.node.getComponent(RigidBody)?.setLinearVelocity(new Vec3( scaledVec3.x, currentVel3.y , scaledVec3.z) );
            
            //this.node.position.add(this._finalMoveVector.multiplyScalar(this.moveSpeed) );
        }     
    }

    multiplyQuatVec3(rotation: Quat, point: Vec3)
    {
      var num1: number = rotation.x * 2;
      var num2: number  = rotation.y * 2;
      var num3: number  = rotation.z * 2;
      var num4: number  = rotation.x * num1;
      var num5: number  = rotation.y * num2;
      var num6: number  = rotation.z * num3;
      var num7: number  = rotation.x * num2;
      var num8: number  = rotation.x * num3;
      var num9: number  = rotation.y * num3;
      var num10: number  = rotation.w * num1;
      var num11: number  = rotation.w * num2;
      var num12: number  = rotation.w * num3;
      var vector3: Vec3 = new Vec3;
      vector3.x = ((1.0 - ( num5 +  num6)) *  point.x + ( num7 -  num12) *  point.y + ( num8 +  num11) *  point.z);
      vector3.y = (( num7 +  num12) *  point.x + (1.0 - ( num4 +  num6)) *  point.y + ( num9 -  num10) *  point.z);
      vector3.z = (( num8 -  num11) *  point.x + ( num9 +  num10) *  point.y + (1.0 - ( num4 +  num5)) *  point.z);
      return vector3;
    }


    calculateForward(sila: number) {
        var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
        vectorForward.y = 0;
        
        return vectorForward.multiplyScalar(sila);
    }

    calculateLeft(sila: number) {
        var vectorLeft = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);

        return vectorLeft.negative().multiplyScalar(sila);
    }

    calculateRight(sila: number) {
        var vectorRight = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);

        return vectorRight.multiplyScalar(sila);
    }

    calculateBack(sila: number) {
        var vectorBack = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
        vectorBack.y = 0;

        return vectorBack.negative().multiplyScalar(sila);
    }

    creatingFinalVectorKeyboard() {

        var e = _keyEvent;
        
        if(_keyEvent[KEYCODE.UP] == true || _keyEvent[KEYCODE.W] == true ) {
            this._finalMoveVector.add(this.calculateForward(1));
            this.tutorialEnd();
        }
        if(_keyEvent[KEYCODE.LEFT] == true || _keyEvent[KEYCODE.A] == true ) {
            this._finalMoveVector.add(this.calculateLeft(1));
            this.tutorialEnd();
        }
        if(_keyEvent[KEYCODE.DOWN] == true || _keyEvent[KEYCODE.S] == true ) {
            this._finalMoveVector.add(this.calculateBack(1));
            this.tutorialEnd();
        }
        if(_keyEvent[KEYCODE.RIGHT] == true || _keyEvent[KEYCODE.D] == true ) {
            this._finalMoveVector.add(this.calculateRight(1));
            this.tutorialEnd();
         }

        this._finalMoveVector.normalize().multiplyScalar(GlobalManager.getInstance().moveSpeed );
    }

    tutorialEnd() {
        if(this._tutorialEnded == false) {
            var detectType =  find("Canvas")!.getComponent("DetectTypeOfDevice") as DetectTypeOfDevice;
            detectType.keyboard_Move();

            this._tutorialEnded = true;
        }
    }
    

    creatingFinalVectorTouch(moveVec: Vec3) {

        var temp = new Vec3 (moveVec.x, 0, -moveVec.y);
        this._finalMoveVector = this.multiplyQuatVec3(this.node.rotation,temp);
        

        this._finalMoveVector.multiplyScalar(GlobalManager.getInstance().moveSpeed * this.phoneCoeficient );
        
        if(moveVec.x != 0 || moveVec.y != 0)
            this.tutorialEnd();

    }

    onKeyUp(e: any) {
        _keyEvent[e.keyCode] = false;
        this._finalMoveVector = new Vec3(0,0,0);

        var sviPodignuti = true;
        _keyEvent.forEach(element => {
            if(element==true)
                sviPodignuti = false;
        });

        if(sviPodignuti)
            this._keyPresed = false;
    }

    onKeyDown(e: any) {
        _keyEvent[e.keyCode] = true;
        this._keyPresed = true;

        if(_keyEvent[KEYCODE.SPACE] == true) 
            this.jump();
    }   

    

};