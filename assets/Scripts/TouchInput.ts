
import { _decorator, Component, Node, Vec2, SystemEvent, Vec3, UITransform, Touch, Canvas, game, Game, find } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TouchInput
 * DateTime = Mon Nov 15 2021 18:58:12 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = TouchInput.ts
 * FileBasenameNoExtension = TouchInput
 * URL = db://assets/Scripts/TouchInput.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 import { FirstPersonCameraMovementTest } from "./FirstPersonCameraMovementTest"; 
 import { DetectTypeOfDevice } from "./DetectTypeOfDevice"; 
import { DetectTypeOfDeviceElevator } from './DetectTypeOfDeviceElevator';
import { FirstPersonCameraMovementElevator } from './FirstPersonCameraMovementElevator';


@ccclass('TouchInput')
export class TouchInput extends Component {

    Player?: Node;

    @property(Node)
    Joystick_Ball!: Node;

    @property(Vec3)
    Joystick_Vector!: Vec3;

    @property
    Joystick_Max = 1;

    @property(Boolean)
    elevatorScript = false;

    _JoystickSize = 0;
    _firstPersonCameraMovement!: FirstPersonCameraMovementTest;

    update() {

        let vec3ForMovement = new Vec3(this.Joystick_Ball.position);//new Vec3( this.Joystick_Ball.position.);
        vec3ForMovement.multiplyScalar(1 / this.Joystick_Max);
        this._firstPersonCameraMovement.creatingFinalVectorTouch( vec3ForMovement );
        
        
        //this.Joystick_Ball.position.x
    }

    start () {
        this.Player = find("Player")!;

        this.node.on(SystemEvent.EventType.TOUCH_START, this.Joystick_Touch_Start, this);
        this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.Joystick_Touch_Move, this);
        this.node.on(SystemEvent.EventType.TOUCH_END, this.Joystick_Touch_End, this);
        this.node.on(SystemEvent.EventType.TOUCH_CANCEL, this.Joystick_Touch_End, this);

        if(this.elevatorScript)
            this._firstPersonCameraMovement = this.Player!.getComponent(FirstPersonCameraMovementElevator)!;
        else
            this._firstPersonCameraMovement = this.Player!.getComponent(FirstPersonCameraMovementTest)!;


        if(this.getComponent(UITransform) != null)
            this._JoystickSize = this.getComponent(UITransform)!.width;
    }


    onDestroy() {
        this.node.off(SystemEvent.EventType.TOUCH_START, this.Joystick_Touch_Start, this);
        this.node.off(SystemEvent.EventType.TOUCH_MOVE, this.Joystick_Touch_Move, this);
        this.node.off(SystemEvent.EventType.TOUCH_END, this.Joystick_Touch_End, this);
        this.node.off(SystemEvent.EventType.TOUCH_CANCEL, this.Joystick_Touch_End, this);
    }

    Joystick_Touch_Start(event: Touch){
        this._firstPersonCameraMovement._keyPresed = true;

        let touch_pos = new Vec3 (event.getUIStartLocation().x, event.getUIStartLocation().y, 0) ; 
        
        let local_touch_pos = this.node.getComponent(UITransform)!.convertToNodeSpaceAR(touch_pos) ;   

        this.Limit_joystick_Vector(local_touch_pos);
        this.Set_Joystick_Ball_Position(local_touch_pos);
        this.Joystick_Vector = local_touch_pos;

    }

    Joystick_Touch_Move(event: Touch){
        var detectType;
        if(this.elevatorScript)
             detectType = find("Canvas")!.getComponent(DetectTypeOfDeviceElevator) ;
        else
             detectType = find("Canvas")!.getComponent(DetectTypeOfDevice);

        detectType!.joystick_Mouse_Move();

        
        //Treba mozda pokriti dva prsta
        let touch_pos = new Vec3 (event.getUILocation().x, event.getUILocation().y, 0) ; 

        let local_touch_pos = this.node.getComponent(UITransform)!.convertToNodeSpaceAR(touch_pos) ;   
        this.Limit_joystick_Vector(local_touch_pos);
        this.Set_Joystick_Ball_Position(local_touch_pos);
        this.Joystick_Vector = local_touch_pos;



    }

    Joystick_Touch_End(){
        this._firstPersonCameraMovement._keyPresed = false;

        this.Joystick_Vector = new Vec3(Vec2.ZERO.x, Vec2.ZERO.y, 0);
        this.Set_Joystick_Ball_Position( new Vec3(Vec2.ZERO.x, Vec2.ZERO.y, 0) );
    }

    Set_Joystick_Ball_Position(pos: Vec3){
        
        //console.log("SetJoystick " + pos);
        
        this.Joystick_Ball.setPosition(pos);
    }

    Limit_joystick_Vector(joystick_vector: Vec3){

        let input_mag = joystick_vector.length();
        if(input_mag > this.Joystick_Max){
            joystick_vector.multiplyScalar(this.Joystick_Max/input_mag);//  mulSelf();
        }

    }
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
