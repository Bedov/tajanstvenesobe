System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, FollowGoForward;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c4f9UnaT5B5by8yfcofuns", "FollowGoForward", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("FollowGoForward", FollowGoForward = (_dec = ccclass('FollowGoForward'), _dec(_class = (_temp = class FollowGoForward extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "targetObject", void 0);
        }

        start() {}

        setTarget(targetObject) {
          this.targetObject = targetObject;
        }

        update(deltaTime) {
          var distanca = new Vec3(this.targetObject.worldPosition.subtract(this.node.worldPosition)).length();
          console.log("Distanca " + distanca);
          if (distanca < 0.01) this.destroyObject();
          var vecTemp = new Vec3(Vec3.FORWARD);
          this.node.position = this.node.position.add(this.calculateForward(0.1));
        }

        destroyObject() {
          this.node.destroy();
        }

        multiplyQuatVec3(rotation, point) {
          var num1 = rotation.x * 2;
          var num2 = rotation.y * 2;
          var num3 = rotation.z * 2;
          var num4 = rotation.x * num1;
          var num5 = rotation.y * num2;
          var num6 = rotation.z * num3;
          var num7 = rotation.x * num2;
          var num8 = rotation.x * num3;
          var num9 = rotation.y * num3;
          var num10 = rotation.w * num1;
          var num11 = rotation.w * num2;
          var num12 = rotation.w * num3;
          var vector3 = new Vec3();
          vector3.x = (1.0 - (num5 + num6)) * point.x + (num7 - num12) * point.y + (num8 + num11) * point.z;
          vector3.y = (num7 + num12) * point.x + (1.0 - (num4 + num6)) * point.y + (num9 - num10) * point.z;
          vector3.z = (num8 - num11) * point.x + (num9 + num10) * point.y + (1.0 - (num4 + num5)) * point.z;
          return vector3;
        }

        calculateForward(sila) {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
          vectorForward.y = 0;
          return vectorForward.multiplyScalar(sila);
        }

      }, _temp)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FollowGoForward.js.map