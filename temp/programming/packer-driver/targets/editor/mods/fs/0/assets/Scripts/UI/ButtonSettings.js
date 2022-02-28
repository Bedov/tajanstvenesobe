System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameManager, SettingsUI, _dec, _class, _crd, ccclass, property, ButtonSettings;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsUI(extras) {
    _reporterNs.report("SettingsUI", "../Utilities/SettingsUI", _context.meta, extras);
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
      SettingsUI = _unresolved_3.SettingsUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "523caEBgsFEWJ4UlrBYMTEF", "ButtonSettings", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonSettings
       * DateTime = Fri Feb 18 2022 14:30:03 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ButtonSettings.ts
       * FileBasenameNoExtension = ButtonSettings
       * URL = db://assets/Scripts/UI/ButtonSettings.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonSettings", ButtonSettings = (_dec = ccclass('ButtonSettings'), _dec(_class = class ButtonSettings extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        buttonClicked() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().settingsUI.getComponent(_crd && SettingsUI === void 0 ? (_reportPossibleCrUseOfSettingsUI({
            error: Error()
          }), SettingsUI) : SettingsUI).turnOnSetting(); // GameManager.getInstance().Player!.getComponent(TopCameraLook)?.playAnimationTop();
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
//# sourceMappingURL=ButtonSettings.js.map