
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
    sys,
    Camera,
    CameraComponent,
    Node} from 'cc';
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

var _pointerLockGeneral = false;

@ccclass('FirstPersonCameraRotate')
export class FirstPersonCameraRotate extends Component {

    @property(Boolean)
    degreesLocked: Boolean = false;

    //@property({type: Node})
    //touchDisplay!: Node;
 


    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    damp = 0.2;
 
    @property
    rotateSpeed = 1;

    _gotStartLocation = false;

    _pointerLockLocal = false;
    _pointerLockPosition = new Vec3;
 
    _euler = new Vec3();
    _velocity = new Vec3();
    _position = new Vec3();
    _speedScale = 1;

    onLoad() {
        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.pointerLock, this);
 
        Vec3.copy(this._euler, this.node.eulerAngles);
        Vec3.copy(this._position, this.node.position);

        setDisplayStats(false); // 关闭左下角显示FPS
    }
 
    onDestroy() {
        systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.pointerLock, this);
    }
 
    update(dt: number) {
        Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
        Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
        
        this.node.setRotation(qt_1);
        
        this._pointerLockLocal = _pointerLockGeneral;
       // if(_pointerLockGeneral)
       //      this.touchDisplay.active = false;
       // else
       //     this.touchDisplay.active = true;
        
    }
 
    pointerLock() {

        if ((game.canvas as HTMLCanvasElement).requestPointerLock)
            (game.canvas as HTMLCanvasElement).requestPointerLock();

        document.addEventListener('pointerlockchange', this.lockChangeAlert, false);
        //document.addEventListener('mozpointerlockchange', this.lockChangeAlert, false);

    }


    lockChangeAlert() {
        if (document.pointerLockElement === game.canvas ) {
          console.log('The pointer lock status is now locked');
          _pointerLockGeneral = true;
          
        } else {
          console.log('The pointer lock status is now unlocked');
          _pointerLockGeneral = false;
        }
    }

    
    onMouseMove(e: any) {
            
        if(!this._gotStartLocation) {
            e.getLocation(v2_1);
            this._gotStartLocation = true;
        }
        if(_pointerLockGeneral) {
            //v2_1 = this._pointerLockPosition;
            if (v2_1.x > view.getFrameSize().width * 0.4) { // rotation
                e.getDelta(v2_2);
                this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
                this._euler.x += v2_2.y * this.rotateSpeed * 0.1;

                if(this.degreesLocked) {
                    if (this._euler.x <= -70) {
                        this._euler.x = -70;
                    }
                    if (this._euler.x >= 45) {
                        this._euler.x = 45;
                    }
                }

                //console.log(this._euler);
            }
        }
    }

};