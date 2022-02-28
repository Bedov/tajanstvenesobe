System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Enum, ScriptEffects, GenericUI, DetectTypeOfDevice, Task, GameManager, GameStatuType, JSONimage, JSONquestTekst, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TypeOfTask, TaskTutorialTask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "../Utilities/ScriptEffects", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUI(extras) {
    _reporterNs.report("GenericUI", "../Utilities/GenericUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDetectTypeOfDevice(extras) {
    _reporterNs.report("DetectTypeOfDevice", "../DetectTypeOfDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONimage(extras) {
    _reporterNs.report("JSONimage", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONquestTekst(extras) {
    _reporterNs.report("JSONquestTekst", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  _export("TypeOfTask", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      ScriptEffects = _unresolved_2.ScriptEffects;
    }, function (_unresolved_3) {
      GenericUI = _unresolved_3.GenericUI;
    }, function (_unresolved_4) {
      DetectTypeOfDevice = _unresolved_4.DetectTypeOfDevice;
    }, function (_unresolved_5) {
      Task = _unresolved_5.Task;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
      GameStatuType = _unresolved_6.GameStatuType;
    }, function (_unresolved_7) {
      JSONimage = _unresolved_7.JSONimage;
      JSONquestTekst = _unresolved_7.JSONquestTekst;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "256a2DLHJFMX4OCVjWvg9kx", "TaskTutorialTask", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (TypeOfTask) {
        TypeOfTask[TypeOfTask["tekstType"] = 0] = "tekstType";
        TypeOfTask[TypeOfTask["imageType"] = 1] = "imageType";
      })(TypeOfTask || _export("TypeOfTask", TypeOfTask = {}));

      _export("TaskTutorialTask", TaskTutorialTask = (_dec = ccclass('TaskTutorialTask'), _dec2 = property(String), _dec3 = property({
        type: Enum(TypeOfTask)
      }), _dec(_class = (_class2 = (_temp = class TaskTutorialTask extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "myTimeHasCome", true);

          _initializerDefineProperty(this, "remoteName", _descriptor, this);

          _initializerDefineProperty(this, "taskType", _descriptor2, this);

          _defineProperty(this, "tekstObject", new (_crd && JSONquestTekst === void 0 ? (_reportPossibleCrUseOfJSONquestTekst({
            error: Error()
          }), JSONquestTekst) : JSONquestTekst)());

          _defineProperty(this, "imageObject", new (_crd && JSONimage === void 0 ? (_reportPossibleCrUseOfJSONimage({
            error: Error()
          }), JSONimage) : JSONimage)());
        }

        start() {
          if (this.taskType == TypeOfTask.tekstType) this.getTekstRemotely();
          if (this.taskType == TypeOfTask.imageType) this.getImageRemotely();
        }

        getTekstRemotely() {
          if (this.remoteName != "") {
            var _getInstance$jsonLoad;

            (_getInstance$jsonLoad = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().jsonLoader) === null || _getInstance$jsonLoad === void 0 ? void 0 : _getInstance$jsonLoad.fetchQuestTekst(this.remoteName.toString(), this.tekstObject);
          }
        }

        getImageRemotely() {
          if (this.remoteName != "") {
            var _getInstance$jsonLoad2;

            (_getInstance$jsonLoad2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().jsonLoader) === null || _getInstance$jsonLoad2 === void 0 ? void 0 : _getInstance$jsonLoad2.fetchImageQuestTekst(this.remoteName.toString(), this.imageObject);
          }
        }

        update() {
          var _this$taskManager$can, _this$taskManager$can2, _this$taskManager$can3, _this$taskManager$can4;

          if (((_this$taskManager$can = this.taskManager.canvas) === null || _this$taskManager$can === void 0 ? void 0 : (_this$taskManager$can2 = _this$taskManager$can.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can2 === void 0 ? void 0 : _this$taskManager$can2._moveTutorialEndBool) && ((_this$taskManager$can3 = this.taskManager.canvas) === null || _this$taskManager$can3 === void 0 ? void 0 : (_this$taskManager$can4 = _this$taskManager$can3.getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
            error: Error()
          }), DetectTypeOfDevice) : DetectTypeOfDevice)) === null || _this$taskManager$can4 === void 0 ? void 0 : _this$taskManager$can4._lookTutorialEndBool) && !this.executed) {
            this.showUI();
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
              error: Error()
            }), GameStatuType) : GameStatuType).gamePaused;
          }
        }

        showUI() {
          var _getComponent;

          super.showTask();

          if (this.taskType == TypeOfTask.tekstType) {
            this.taskManager.genericUI.active = true;
            this.taskManager.genericUI.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
              error: Error()
            }), ScriptEffects) : ScriptEffects).fadeInActive();
            this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
              error: Error()
            }), GenericUI) : GenericUI).turnOnGenericTaskJSONwithReturn(this.tekstObject, this);
          }

          if (this.taskType == TypeOfTask.imageType) {
            this.taskManager.genericUIimage.active = true;
            this.taskManager.genericUIimage.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
              error: Error()
            }), ScriptEffects) : ScriptEffects).fadeInActive();
            this.taskManager.genericUIimage.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
              error: Error()
            }), GenericUI) : GenericUI).turnOnGenericTaskJSONimagewithReturn(this.imageObject, this);
          }

          (_getComponent = this.taskManager.subtitle.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _getComponent === void 0 ? void 0 : _getComponent.fadeOutActive();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "remoteName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "taskType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return TypeOfTask.tekstType;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TaskTutorialTask.js.map