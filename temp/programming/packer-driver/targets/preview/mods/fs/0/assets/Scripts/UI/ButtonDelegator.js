System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameManager, TaskManager, _dec, _class, _crd, ccclass, property, ButtonDelegator;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskManager(extras) {
    _reporterNs.report("TaskManager", "../Tasks/TaskManager", _context.meta, extras);
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
      TaskManager = _unresolved_3.TaskManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13d41xH5NZFS4DiJLV/2hQt", "ButtonDelegator", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ButtonDelegator
       * DateTime = Wed Jan 19 2022 11:41:11 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ButtonDelegator.ts
       * FileBasenameNoExtension = ButtonDelegator
       * URL = db://assets/Scripts/Utilities/ButtonDelegator.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ButtonDelegator", ButtonDelegator = (_dec = ccclass('ButtonDelegator'), _dec(_class = class ButtonDelegator extends Component {
        start() {}

        clicked(event, customData) {
          var _getInstance$TaskMana, _getInstance$TaskMana2, _getInstance$TaskMana3, _getInstance$TaskMana4, _getInstance$TaskMana5, _getInstance$TaskMana6;

          switch (customData) {
            case "getDirection":
              (_getInstance$TaskMana = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().TaskManager) === null || _getInstance$TaskMana === void 0 ? void 0 : (_getInstance$TaskMana2 = _getInstance$TaskMana.getComponent(_crd && TaskManager === void 0 ? (_reportPossibleCrUseOfTaskManager({
                error: Error()
              }), TaskManager) : TaskManager)) === null || _getInstance$TaskMana2 === void 0 ? void 0 : _getInstance$TaskMana2.getDirection();
              break;

            case "getDirection2":
              (_getInstance$TaskMana3 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().TaskManager) === null || _getInstance$TaskMana3 === void 0 ? void 0 : (_getInstance$TaskMana4 = _getInstance$TaskMana3.getComponent(_crd && TaskManager === void 0 ? (_reportPossibleCrUseOfTaskManager({
                error: Error()
              }), TaskManager) : TaskManager)) === null || _getInstance$TaskMana4 === void 0 ? void 0 : _getInstance$TaskMana4.getDirectionFollow();
              break;

            case "readAgain":
              (_getInstance$TaskMana5 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().TaskManager) === null || _getInstance$TaskMana5 === void 0 ? void 0 : (_getInstance$TaskMana6 = _getInstance$TaskMana5.getComponent(_crd && TaskManager === void 0 ? (_reportPossibleCrUseOfTaskManager({
                error: Error()
              }), TaskManager) : TaskManager)) === null || _getInstance$TaskMana6 === void 0 ? void 0 : _getInstance$TaskMana6.readAgain();

            default:
              break;
          }
        }

        backClicked() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().backToMenu();
        }

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
//# sourceMappingURL=ButtonDelegator.js.map