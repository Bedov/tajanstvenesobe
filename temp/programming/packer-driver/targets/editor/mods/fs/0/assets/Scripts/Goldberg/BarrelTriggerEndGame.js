System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EndGameLogic, _dec, _class, _crd, ccclass, property, BarrelTriggerEndGame;

  function _reportPossibleCrUseOfEndGameLogic(extras) {
    _reporterNs.report("EndGameLogic", "../EndGameLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EndGameLogic = _unresolved_2.EndGameLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45709czMUVApIFxQEjL8hfE", "BarrelTriggerEndGame", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BarrelTriggerEndGame
       * DateTime = Thu May 19 2022 21:07:04 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = BarrelTriggerEndGame.ts
       * FileBasenameNoExtension = BarrelTriggerEndGame
       * URL = db://assets/Scripts/Goldberg/BarrelTriggerEndGame.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("BarrelTriggerEndGame", BarrelTriggerEndGame = (_dec = ccclass('BarrelTriggerEndGame'), _dec(_class = class BarrelTriggerEndGame extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        BarrelTriggerEndGame() {
          (_crd && EndGameLogic === void 0 ? (_reportPossibleCrUseOfEndGameLogic({
            error: Error()
          }), EndGameLogic) : EndGameLogic).startEndGame();
        } // update (deltaTime: number) {
        //     // [4]
        // }


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
//# sourceMappingURL=BarrelTriggerEndGame.js.map