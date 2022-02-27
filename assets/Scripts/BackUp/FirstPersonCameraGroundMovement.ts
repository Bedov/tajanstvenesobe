
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
    setDisplayStats,
    sys,
    EventKeyboard,
    KeyCode} from 'cc';
const { ccclass, property } = _decorator;

import { FirstPersonCameraRotate} from "./FirstPersonCameraRotate";

const KEYCODE = {
    W: 'W'.charCodeAt(0),
    S: 'S'.charCodeAt(0),
    A: 'A'.charCodeAt(0),
    D: 'D'.charCodeAt(0),
    Q: 'Q'.charCodeAt(0),
    E: 'E'.charCodeAt(0),
    SHIFT: macro.KEY.shift,
}

var _pointerLockGeneral = false;
var _keyEvent = [false];

@ccclass('FirstPersonCameraGroundMovement')
export class FirstPersonCameraGroundMovement extends Component {

    @property(Node)
    tackaOkretanja!: Node;
 
    @property
    moveSpeed = 1;
 
 
    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    damp = 0.2;

    _gotStartLocation = false;

    _finalMoveVector = new Vec3;
 
    _position = new Vec3();
    _keyPresed = false;


    fpsMovement!: FirstPersonCameraRotate;


    onLoad() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        Vec3.copy(this._position, this.node.position);

        this.fpsMovement = this.getComponent('FirstPersonCamera') as FirstPersonCameraRotate;

    }
 
    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
 
    update(dt: number) {
        /* var vX = Math.cos(this.node.rotation * Math.PI / 180) * this.speed;
        var vY = Math.sin(this.node.rotation * Math.PI / 180) * this.speed;
        this.node.x += vX * dt;
        this.node.y += vY * dt; */

        //Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
        //Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
        
        //this.node.setRotation(qt_1);

        //if(this._keyPresed && this.fpsMovement._pointerLockLocal ) 
        if(this._keyPresed ){
            this.creatingFinalVector();
            this.node.position.add(this._finalMoveVector);
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


    calculateForward() {
        var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
        

        return vectorForward;
    }

    calculateLeft() {
        var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);

        return vectorForward.negative();
    }

    calculateRight() {
        var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);

        return vectorForward;
    }

    calculateBack() {
        var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);

        return vectorForward.negative();
    }

    creatingFinalVector() {

        var e = _keyEvent;
        
        if(_keyEvent[KEYCODE.W] == true) {
            console.log('Press W key');
            this._finalMoveVector.add(this.calculateForward());
        }
        if(_keyEvent[KEYCODE.A] == true ) {
            console.log('Press a key');
            this._finalMoveVector.add(this.calculateLeft());
        }
        if(_keyEvent[KEYCODE.S] == true) {
            console.log('Press S key');
            this._finalMoveVector.add(this.calculateBack());
        }
        if(_keyEvent[KEYCODE.D] == true) {
            console.log('Press D key');
            this._finalMoveVector.add(this.calculateRight());
         }

        this._finalMoveVector.normalize().multiplyScalar(this.moveSpeed);
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

        //_keyEvent = e;
    }

    

};