
import { _decorator, Component, Node, Vec3, SystemEvent, systemEvent, log, Event, EventMouse, math, Quat, TERRAIN_HEIGHT_BASE } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CameraControll
 * DateTime = Thu Nov 04 2021 15:54:44 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = CameraControll.ts
 * FileBasenameNoExtension = CameraControll
 * URL = db://assets/Scripts/CameraControll.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */


 
@ccclass('CameraControll')
export class CameraControll extends Component {

    @property({type: Node})
    public followTarget: Node | null = null;

    @property
    public isFollowRotation = true;

    @property
    public offset = new Vec3();
    public moveSpeed = 3;

    private _sensitivity = 0.1;

    isPlayingStart = false;

    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    onKeyDown() {
        console.log("WAKA");
        
    }

    onMouseMove(event: EventMouse) {
        console.log(" Mouse event + " + event.getDeltaX + 1);
        var currentVector = new Vec3; // = math.Quat.toEuler( this.node.getRotation()  );
        
        Quat.toEuler(currentVector, this.node.getRotation(), true);

        if(event.getDeltaY() > 40 || event.getDeltaX() > 40 )
            return;

        //this.node.setWorldRotationFromEuler
        var tempXrotation = currentVector.x + event.getDeltaY() * this._sensitivity;
        var tempYrotation = currentVector.y - event.getDeltaX() * this._sensitivity;

        this.node.setRotationFromEuler( tempXrotation, tempYrotation , currentVector.z);

    }


    onLoad() {
        this.node.on(Node.EventType.MOUSE_DOWN, (event: EventMouse) => {
            console.log('Mouse down');
          }, this);

          this.node.on('mousedown', function (event: EventMouse) {
            console.log('Mouse down');
          }, this);

        systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        //systemEvent.on(Node.EventType.MOUSE_LEAVE, this.onMouseMove, this)
        

        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        /*this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            log('Drag stated ...');
        }, this);
        this.node.on(Node.EventType.MOUSE_MOVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            this.node.opacity = 255;
            var delta = event.getDelta();
            this.node.x += delta.x;
            this.node.y += delta.y;
            if (!this.propagate)
                event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            this.node.opacity = 160;
            cc.log('Drag leave ...');
            this._down = false;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            cc.log('Drag done ...');
            this.node.opacity = 160;
            this._down = false;
        }, this);   */
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * 
 * var TouchDragger = cc.Class({
    extends: cc.Component,

    properties: {
        propagate: {
            default: false
        },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this._down = false;
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            cc.log('Drag stated ...');
            this.node.opacity = 255;
            this._down = true;
            if (!this.propagate)
                event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            this.node.opacity = 255;
            var delta = event.getDelta();
            this.node.x += delta.x;
            this.node.y += delta.y;
            if (!this.propagate)
                event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            this.node.opacity = 160;
            cc.log('Drag leave ...');
            this._down = false;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return
            }
            cc.log('Drag done ...');
            this.node.opacity = 160;
            this._down = false;
        }, this);
    },
});




 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
