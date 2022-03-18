System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, macro, Task, ScriptEffects, GameManager, DetectTypeOfDevice, _dec, _class, _temp, _crd, ccclass, property, TaskLoading;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "../Utilities/ScriptEffects", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDetectTypeOfDevice(extras) {
    _reporterNs.report("DetectTypeOfDevice", "../DetectTypeOfDevice", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      DetectTypeOfDevice = _unresolved_5.DetectTypeOfDevice;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65585+cT3RJeKo4f/BYfKaU", "TaskLoading", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TaskLoading
       * DateTime = Thu Mar 17 2022 23:31:16 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = TaskLoading.ts
       * FileBasenameNoExtension = TaskLoading
       * URL = db://assets/Scripts/Tasks/TaskLoading.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TaskLoading", TaskLoading = (_dec = ccclass('TaskLoading'), _dec(_class = (_temp = class TaskLoading extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "loadingCompleted", false);
        }

        start() {
          console.log("USAO SAM");
          this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER);
          this.schedule(this.checkIfDownloadIsCompleted, 0.1, macro.REPEAT_FOREVER);
        }

        showTask() {
          super.showTask();
          this.taskManager.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects).fadeInActive();
        }

        checkExecution() {
          var _this$taskManager$can, _this$taskManager$can2, _this$taskManager$can3, _this$taskManager$can4;

          if (this.isItOkToExecute() && ((_this$taskManager$can = this.taskManager.canvas) === null || _this$taskManager$can === void 0 ? void 0 : (_this$taskManager$can2 = _this$taskManager$can.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can2 === void 0 ? void 0 : _this$taskManager$can2._moveTutorialEndBool) && ((_this$taskManager$can3 = this.taskManager.canvas) === null || _this$taskManager$can3 === void 0 ? void 0 : (_this$taskManager$can4 = _this$taskManager$can3.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can4 === void 0 ? void 0 : _this$taskManager$can4._lookTutorialEndBool) && !this.executed) this.showTask();
        }

        checkIfDownloadIsCompleted() {
          var _this$taskManager$can5, _this$taskManager$can6, _this$taskManager$can7, _this$taskManager$can8;

          console.log("GameManager.instance.taskInProgressManager " + (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.taskInProgressManager);

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.taskInProgressManager == 0) {
            this.taskManager.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
              error: Error()
            }), ScriptEffects) : ScriptEffects).fadeOutActive();
            this.loadingCompleted = true;
          }

          if (((_this$taskManager$can5 = this.taskManager.canvas) === null || _this$taskManager$can5 === void 0 ? void 0 : (_this$taskManager$can6 = _this$taskManager$can5.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can6 === void 0 ? void 0 : _this$taskManager$can6._moveTutorialEndBool) && ((_this$taskManager$can7 = this.taskManager.canvas) === null || _this$taskManager$can7 === void 0 ? void 0 : (_this$taskManager$can8 = _this$taskManager$can7.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can8 === void 0 ? void 0 : _this$taskManager$can8._lookTutorialEndBool) && !this.executed && this.loadingCompleted) this.taskCompleted();
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
//# sourceMappingURL=TaskLoading.js.map