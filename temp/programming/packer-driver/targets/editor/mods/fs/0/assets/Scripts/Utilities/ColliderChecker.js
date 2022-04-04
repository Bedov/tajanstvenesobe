System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, MeshCollider, _dec, _class, _crd, ccclass, property, ColliderChecker;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshCollider = _cc.MeshCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b38bPMxwFLNpxt5KjvApcy", "ColliderChecker", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ColliderChecker
       * DateTime = Fri Apr 01 2022 11:27:39 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = ColliderChecker.ts
       * FileBasenameNoExtension = ColliderChecker
       * URL = db://assets/Scripts/Utilities/ColliderChecker.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ColliderChecker", ColliderChecker = (_dec = ccclass('ColliderChecker'), _dec(_class = class ColliderChecker extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        update(deltaTime) {
          var _this$node$getCompone, _this$node$getCompone2;

          console.log("Scene Mesh Collider: " + ((_this$node$getCompone = this.node.getComponent(MeshCollider)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone._id));
          console.log("Scene Mesh Collider: " + ((_this$node$getCompone2 = this.node.getComponent(MeshCollider)) === null || _this$node$getCompone2 === void 0 ? void 0 : _this$node$getCompone2.mesh));
          console.log("Scene Mesh Collider: " + this.node.getComponent(MeshCollider));
        }

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ColliderChecker.js.map