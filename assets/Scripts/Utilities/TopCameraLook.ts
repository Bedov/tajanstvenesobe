
import { _decorator, Component, Node, Vec3, Quat, TiledObjectGroup, Prefab, Game, systemEvent, SystemEvent, RigidBody } from 'cc';
import { FirstPersonCameraMovementTest } from '../FirstPersonCameraMovementTest';
import { GameManager, GameStatuType } from '../GameManager';
import { SlideRotateCamera } from '../SlideRotateCamera';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TopCameraLook
 * DateTime = Fri Dec 24 2021 15:57:41 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = TopCameraLook.ts
 * FileBasenameNoExtension = TopCameraLook
 * URL = db://assets/Scripts/Utilities/TopCameraLook.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('TopCameraLook')
export class TopCameraLook extends Component {


    @property
    distanceScale = 1;

    @property(Vec3)
    eulerRotation = new Vec3(-30.962, -59.879, 3.898);
    
    @property(Node)
    pin?: Node ;

    mainCamera = null;
    startedPositionVector = new Vec3();
    targetPositionVector = new Vec3();
    startedRotationVector = new Vec3();
    targetRotationVector = new Vec3();
    page1Vector = new Vec3(0, 0, 0);
    page2Vector = new Vec3(0, 0, 5);
    page3Vector = new Vec3(0, 0, 9);
    page4Vector = new Vec3(0, 0, 15);
    page5Vector = new Vec3(0, 0, 18);
    page6Vector = new Vec3(0, 0, 25);
    startedRotationVectorQuat = new Quat();
    targetRotationVectorQuat = new Quat();

    
    lerpCounter = 1;
    lerpCounterParrent = 1;
    lerpLenghtParrent = 0.1;
    lerpLenght = 1;

    tempPosition = new Vec3(0,0,0);
    tempPinPosition = new Vec3(0,0,0);

    start() {

      systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
      //Vec3.copy(this._euler, this.node.eulerAngles);
      //Vec3.copy(this._position, this.node.position);
  }

  onTouchMove (e: any, even: any) {
    if( !this.pin!.active ) {
        return;
    }

    const delta = e.getDelta();
    const {x, y}= delta;

    if(GameManager.getInstance().WorldRoot!.parent)
      GameManager.getInstance().WorldRoot!.parent!.rotation=Quat.rotateY(new Quat(),GameManager.getInstance().WorldRoot!.parent!.rotation, x*Math.PI/180);
    else  
      GameManager.getInstance().WorldRoot!.rotation=Quat.rotateY(new Quat(),GameManager.getInstance().WorldRoot!.rotation, x*Math.PI/180);

}


    playAnimationTop() {
        

        if(this.getComponent(FirstPersonCameraMovementTest)!.enabled == false) {

          GameManager.getInstance().gameStatus = GameStatuType.gameActive;

          this.getComponent(RigidBody)!.useGravity = true;
            this.getComponent(FirstPersonCameraMovementTest)!.enabled = true; 
            this.getComponent(SlideRotateCamera)!.enabled = true;

            if(this.pin)
              this.pin.active = false;

            this.node.position = this.tempPosition;
            this.lerpCounter = 1;
            this.lerpCounterParrent = 1;

            //Vracamo rotaciju parent sveta na nulu
            var tempZeroQuat:Quat = new Quat;
            Quat.fromEuler(tempZeroQuat, 0,0,0);

            if(GameManager.getInstance().WorldRoot!.parent)
            GameManager.getInstance().WorldRoot!.parent!.rotation= tempZeroQuat;
          else  
            GameManager.getInstance().WorldRoot!.rotation= tempZeroQuat;

        } else {

          if(this.pin){
            this.pin.active = true;
            this.pin.worldPosition = new Vec3(this.node.worldPosition);
          }

          this.tempPosition = new Vec3(this.node.position);
          this.tempPinPosition = new Vec3(this.node.worldPosition);



          this.getComponent(FirstPersonCameraMovementTest)!.enabled = false; 
          this.getComponent(RigidBody)!.useGravity = false;

          this.getComponent(SlideRotateCamera)!.enabled = false;

          
          GameManager.getInstance().gameStatus = GameStatuType.gamePaused;

          this.lerpCounter = 0;
          this.targetPositionVector = new Vec3(-4.953 , 4.293, 2.537);
          this.targetPositionVector.multiplyScalar(this.distanceScale);
          this.startedPositionVector = this.node.position;
          Quat.fromEuler(this.targetRotationVectorQuat, this.eulerRotation.x, this.eulerRotation.y, this.eulerRotation.z);
          this.startedRotationVectorQuat = this.node.rotation;



        }
      }

      update(deltaTime: number) {
        this.lerpCounter += deltaTime;
        this.lerpCounterParrent += deltaTime;

        if (this.lerpCounter < 0.7) {
          Vec3.lerp(this.node.position, this.startedPositionVector, this.targetPositionVector, this.lerpCounter);
          this.node.position= this.node.position;
          Quat.lerp(this.node.rotation , this.startedRotationVectorQuat, this.targetRotationVectorQuat, this.lerpCounter);
          this.node.rotation = this.node.rotation;
        }

        //GameManager.getInstance().WorldRoot?.rotate(Quat.x)
        
      //Quat.rotateY(GameManager.getInstance().WorldRoot!.rotation, GameManager.getInstance().WorldRoot!.rotation, 0.5);
      //Quat.rotateAround(this.node.rotation, GameManager.getInstance().WorldRoot.position ,Vec3.UP,0.5);
       //this.node.lookAt(this.target.position);

        //if(this.pin.active == true) {
        //  this.pin.position = this.tempPosition;
        //}

      }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
