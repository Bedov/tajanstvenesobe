System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, DetectTypeOfDeviceElevator, _dec, _class, _crd, ccclass, property, PlayerEnderingEnd;

  function _reportPossibleCrUseOfDetectTypeOfDeviceElevator(extras) {
    _reporterNs.report("DetectTypeOfDeviceElevator", "./DetectTypeOfDeviceElevator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      DetectTypeOfDeviceElevator = _unresolved_2.DetectTypeOfDeviceElevator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "607d3l7/nxF4rx1ouG/jHi3", "PlayerEnderingEnd", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PlayerEnderingEnd
       * DateTime = Tue Apr 19 2022 13:20:22 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = PlayerEnderingEnd.ts
       * FileBasenameNoExtension = PlayerEnderingEnd
       * URL = db://assets/Scripts/PlayerEnderingEnd.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PlayerEnderingEnd", PlayerEnderingEnd = (_dec = ccclass('PlayerEnderingEnd'), _dec(_class = class PlayerEnderingEnd extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        animationEnded() {
          find("Canvas").getComponent(_crd && DetectTypeOfDeviceElevator === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDeviceElevator({
            error: Error()
          }), DetectTypeOfDeviceElevator) : DetectTypeOfDeviceElevator)._preTutorailEnded = true;
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
//# sourceMappingURL=PlayerEnderingEnd.js.map