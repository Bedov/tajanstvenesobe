
import { _decorator, Component, Node, Vec3, Quat } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = FollowGoForward
 * DateTime = Fri Jan 21 2022 15:42:52 GMT+0100 (Central European Standard Time)
 * Author = stickandrope
 * FileBasename = FollowGoForward.ts
 * FileBasenameNoExtension = FollowGoForward
 * URL = db://assets/Scripts/FollowGoForward.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('FollowGoForward')
export class FollowGoForward extends Component {
    
    targetObject? : Node; 

    start () {
    } 

    setTarget(targetObject : Node) {

        this.targetObject = targetObject;
    }

    update (deltaTime: number) {

        var distanca : number = new Vec3 ( this.targetObject!.worldPosition.subtract(this.node.worldPosition) ).length() ;
        console.log("Distanca " + distanca);
        

        if( distanca < 0.01 )
            this.destroyObject();

        var vecTemp: Vec3 = new Vec3(Vec3.FORWARD);
        this.node.position = this.node.position.add(this.calculateForward(0.1) );
     }

     destroyObject() {
         this.node.destroy();
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
