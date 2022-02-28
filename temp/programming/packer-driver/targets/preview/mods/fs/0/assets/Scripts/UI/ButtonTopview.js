System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameManager, TopCameraLook, _dec, _class, _crd, ccclass, property, ButtonTopview;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopCameraLook(extras) {
    _reporterNs.report("TopCameraLook", "../Utilities/TopCameraLook", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      TopCameraLook = _unresolved_3.TopCameraLook;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b85daTgyldHXqbXZwAESfzl", "ButtonTopview", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonTopview
       * DateTime = Fri Feb 18 2022 14:27:57 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ButtonTopview.ts
       * FileBasenameNoExtension = ButtonTopview
       * URL = db://assets/Scripts/UI/ButtonTopview.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonTopview", ButtonTopview = (_dec = ccclass('ButtonTopview'), _dec(_class = class ButtonTopview extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        buttonClicked() {
          var _getComponent;

          (_getComponent = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Player.getComponent(_crd && TopCameraLook === void 0 ? (_reportPossibleCrUseOfTopCameraLook({
            error: Error()
          }), TopCameraLook) : TopCameraLook)) === null || _getComponent === void 0 ? void 0 : _getComponent.playAnimationTop();
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
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ButtonTopview.js.map