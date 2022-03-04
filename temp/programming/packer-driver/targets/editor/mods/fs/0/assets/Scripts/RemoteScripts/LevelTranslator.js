System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, GameManager, GlobalManager, _dec, _class, _temp, _crd, ccclass, property, LevelTranslator;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21653mbklNNF7bWgJTCnY6J", "LevelTranslator", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelTranslator
       * DateTime = Thu Mar 03 2022 16:46:49 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = LevelTranslator.ts
       * FileBasenameNoExtension = LevelTranslator
       * URL = db://assets/Scripts/RemoteScripts/LevelTranslator.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelTranslator", LevelTranslator = (_dec = ccclass('LevelTranslator'), _dec(_class = (_temp = class LevelTranslator extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "subtitle", void 0);
        }

        start() {
          this.subtitle = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().TaskManager.getChildByName("Subtitle").getComponent(Label);
          this.subtitle.string = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getGlobal().tutorialInstroction;
        }

      }, _temp)) || _class)); //"inverseSettingsText":"Inverse the look controls", "choseSpeedSettingsText":"Choose the speed of the player" }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LevelTranslator.js.map