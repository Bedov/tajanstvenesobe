import { _decorator, Component, Node, sys, systemEvent, SystemEvent, EventMouse, Vec3, v3, Quat, quat, CameraComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FollowCamera')
export class FollowCamera extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    private static _inst: FollowCamera = null;
    public static get inst(): FollowCamera {
        return this._inst;
    }

    @property({ type: Node })
    target: Node = null;

    @property({ type: CameraComponent })
    camera:CameraComponent = null;

    @property({ type: Vec3 })
    lookAtOffset: Vec3 = v3(0, 10, 0);

    private _isMouseDown = false;
    private _targetPos = v3(0, 0, 0);
    private _cameraPos = v3(0, 0, 0);
    private _lookDir = v3(0, 0, -1);
    private _lookRight = v3(1, 0, 0);
    private _lookUp = v3(0, 1, 0);
    private _rotate = quat();
    private _zoom = 4;
    private _minZoom = 2;
    private _maxZoom = 6;
    private _zoomSensitivty = 0.02;

    setFollowTarget(target: Node) {
        this.target = target;
    }

    start() {
        FollowCamera._inst = this;
        // Your initialization goes here.
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);

        //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);
        //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);
        //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);

        this.adjustCamera();
    }

    public get lookDir(): Vec3 {
        return this.lookDir;
    }

    public get rotationEulers(): Vec3 {
        let euler = this.node.eulerAngles.clone();
        euler.x *= -1;
        euler.y *= -1;
        euler.z *= -1;
        return euler;
    }

    adjustCamera() {
        if (!this.target) {
            return;
        }

        Vec3.normalize(this._lookDir, this._lookDir);

        this._lookUp.set(0, 1, 0);

        //????????????
        Vec3.cross(this._lookRight, this._lookDir, this._lookUp);
        Vec3.normalize(this._lookRight, this._lookRight);

        //???????????????UP??????
        Vec3.cross(this._lookUp, this._lookRight, this._lookDir);
        Vec3.normalize(this._lookUp, this._lookUp);

        Quat.fromAxes(this._rotate, this._lookRight, this._lookUp, this._lookDir);
        this.node.setRotation(this._rotate);


        //??????????????????????????????????????????zoom??????
        Vec3.multiplyScalar(this._lookDir, this._lookDir, this._zoom);
        Vec3.subtract(this._cameraPos, v3(0, 0, 0), this._lookDir);
        this.camera.node.setPosition(this._cameraPos);
    }

    onMouseDown(event: EventMouse) {
        if(event.getButton() == EventMouse.BUTTON_RIGHT){
            this._isMouseDown = true;
        }
    }

    onMouseUp() {
        this._isMouseDown = false;
    }

    onMouseMove(event: EventMouse) {
        if (!this._isMouseDown) {
            return;
        }
        let deltaX = event.getUIDeltaX() * 0.1;
        let deltaY = event.getUIDeltaY() * 0.1;
        this.rotate(deltaY,-deltaX);
    }

    rotate(rx:number,ry:number){
        let angles = this.node.eulerAngles;
        this.node.setRotationFromEuler(angles.x + rx, angles.y + ry, angles.z);
    }

    zoom(delta:number){
        this._zoom += delta * this._zoomSensitivty;
        if (this._zoom < this._minZoom) {
            this._zoom = this._minZoom;
        }
        if (this._zoom > this._maxZoom) {
            this._zoom = this._maxZoom;
        }

        //??????????????????????????????????????????zoom??????
        Vec3.normalize(this._lookDir, this._lookDir);
        Vec3.multiplyScalar(this._lookDir, this._lookDir, this._zoom);
        Vec3.subtract(this._cameraPos, v3(0, 0, 0), this._lookDir);
        this.camera.node.setPosition(this._cameraPos);
    }


    onMouseWheel(event: EventMouse) {
        let delta = event.getScrollY() * this._zoomSensitivty;
        this.zoom(delta);
    }

    update(deltaTime: number) {
        // Your update function goes here.
        if (this.target) {
            this.target.getPosition(this._targetPos);
            Vec3.add(this._targetPos, this._targetPos, this.lookAtOffset);
            this.node.setPosition(this._targetPos);
        }
    }
}
