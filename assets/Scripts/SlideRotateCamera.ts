
import { _decorator,
    Component,
    math, 
    macro,
    Label,
    systemEvent,
    SystemEvent,
    game,
    view,
    setDisplayStats,
    Node,
    Game} from 'cc';
const { ccclass, property } = _decorator;
const { Vec2, Vec3, Quat } = math;

const v2_1 = new Vec2();
const v2_2 = new Vec2();
const v3_1 = new Vec3();
const qt_1 = new Quat();
const KEYCODE = {
    W: 'W'.charCodeAt(0),
    S: 'S'.charCodeAt(0),
    A: 'A'.charCodeAt(0),
    D: 'D'.charCodeAt(0),
    Q: 'Q'.charCodeAt(0),
    E: 'E'.charCodeAt(0),
    SHIFT: macro.KEY.shift,
}

import { DetectTypeOfDevice } from "./DetectTypeOfDevice";
import { GameManager, GameStatuType } from './GameManager';

@ccclass('SlideRotateCamera')
export class SlideRotateCamera extends Component {
 
    @property
    moveSpeed = 1.5;
 
    @property
    moveSpeedShiftScale = 5;
 
    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    damp = 0.2;

    @property
    _eventOn = false;
 
    @property
    rotateSpeed = 1;
    
    @property
    maxAngleUp = 70;
    @property
    maxAngleDown = 10;
 
    _euler = new Vec3();
    _velocity = new Vec3();
    _position = new Vec3();
    _speedScale = 1;

    onLoad() {

    }

    start() {
        systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        Vec3.copy(this._euler, this.node.eulerAngles);
        Vec3.copy(this._position, this.node.position);

        setDisplayStats(false); // 关闭左下角显示FPS
    }
 
    onDestroy() {
        systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
    }
 
    update(dt: number) {
        Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
        Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
   
        this.node.setRotation(qt_1);
    }

    onMouseWheel(e: any) {
        const delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down
        Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
        Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
    }
 
    onTouchStart(_e: any) {
        
        //if ((game.canvas as HTMLCanvasElement).requestPointerLock)
        //    (game.canvas as HTMLCanvasElement).requestPointerLock();
 
        let location = _e.getLocation();// 获取节点坐标
    }

    onTouchMove (e: any, even: any) {
        if(GameManager.getInstance().gameStatus == GameStatuType.gamePaused ) {
            return;
        }
        

        var detectType = GameManager.instance.Canvas!.getComponent("DetectTypeOfDevice") as DetectTypeOfDevice;
        detectType.joystick_Mouse_Move();
 
        let touches = even.getTouches();
 
            e.getStartLocation(v2_1);
            
            //if (v2_1.x > view.getFrameSize().width * 0.4) { // rotation
                e.getDelta(v2_2);
                this._euler.y -= v2_2.x * this.rotateSpeed * 0.1 * this.inverseCalculus();
                this._euler.x += v2_2.y * this.rotateSpeed * 0.1 * this.inverseCalculus();
                

                if (this._euler.x <= -this.maxAngleDown) {
                    this._euler.x = -this.maxAngleDown;
                }
                if (this._euler.x >= this.maxAngleUp) {
                    this._euler.x = this.maxAngleUp;
                }

 
    }

    inverseCalculus(){
        if(GameManager.getInstance().invertedRotation) 
            return -1
        else
            return 1
    }

    onTouchEnd(e: any) {
        //document.exitPointerLock();
    }
};