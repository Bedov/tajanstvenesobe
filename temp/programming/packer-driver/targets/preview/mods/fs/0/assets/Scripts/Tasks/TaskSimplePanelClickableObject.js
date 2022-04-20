System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, JSONquestTekst, ScriptEffects, GenericUI, Task, GameManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TaskSimplePanelClickableObject;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJSONquestTekst(extras) {
    _reporterNs.report("JSONquestTekst", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "../Utilities/ScriptEffects", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUI(extras) {
    _reporterNs.report("GenericUI", "../Utilities/GenericUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      JSONquestTekst = _unresolved_2.JSONquestTekst;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }, function (_unresolved_4) {
      GenericUI = _unresolved_4.GenericUI;
    }, function (_unresolved_5) {
      Task = _unresolved_5.Task;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a475arXmRLkavstJUxxDE3", "TaskSimplePanelClickableObject", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskSimplePanelClickableObject", TaskSimplePanelClickableObject = (_dec = ccclass('TaskSimplePanelClickableObject'), _dec2 = property(String), _dec(_class = (_class2 = (_temp = class TaskSimplePanelClickableObject extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "remoteName", _descriptor, this);

          _defineProperty(this, "tekstObject", new (_crd && JSONquestTekst === void 0 ? (_reportPossibleCrUseOfJSONquestTekst({
            error: Error()
          }), JSONquestTekst) : JSONquestTekst)());
        }

        start() {
          //this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER);
          this.schedule(this.isItMyTimeForDownloading, 0.1);
        }

        getTekstRemotely() {
          if (this.remoteName != "") {
            var _getInstance$jsonLoad;

            (_getInstance$jsonLoad = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().jsonLoader) === null || _getInstance$jsonLoad === void 0 ? void 0 : _getInstance$jsonLoad.fetchQuestTekst(this.remoteName.toString(), this.tekstObject);
          }
        }

        checkExecution() {
          var _getInstance$detectTy, _getInstance$detectTy2;

          if (this.isItOkToExecute() && ((_getInstance$detectTy = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().detectType) === null || _getInstance$detectTy === void 0 ? void 0 : _getInstance$detectTy._moveTutorialEndBool) && ((_getInstance$detectTy2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().detectType) === null || _getInstance$detectTy2 === void 0 ? void 0 : _getInstance$detectTy2._lookTutorialEndBool)) this.showTask();
        }

        isItMyTimeForDownloading() {
          if (this.orderNumber <= (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().downloadedCheckpoint && !this.downloadStarted) {
            this.fetchTheData();
            this.downloadStarted = true;
          }
        }

        fetchTheData() {
          this.getTekstRemotely();
        }

        showTask() {
          if (this.isItOkToExecute()) {
            this.taskManager.genericUI.active = true;
            this.taskManager.genericUI.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
              error: Error()
            }), ScriptEffects) : ScriptEffects).fadeInActive();
            this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
              error: Error()
            }), GenericUI) : GenericUI).turnOnGenericTaskJSONwithReturn(this.tekstObject, this); //Čestitam! Stigao si do časovničara.
          }
        }

        execute() {
          console.log("ShowTask!!!");

          if (this.isItOkToExecute()) {
            var _getInstance$loadingH2;

            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().downloadedCheckpoint <= this.orderNumber) {
              var _getInstance$loadingH;

              (_getInstance$loadingH = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().loadingHandler) === null || _getInstance$loadingH === void 0 ? void 0 : _getInstance$loadingH.turnOnLoading();
              this.scheduleOnce(this.showTask, 0.2);
              console.log("DownloadedCheckpoint : " + (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().downloadedCheckpoint);
              console.log("this.orderNumber : " + this.orderNumber);
              return;
            }

            (_getInstance$loadingH2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().loadingHandler) === null || _getInstance$loadingH2 === void 0 ? void 0 : _getInstance$loadingH2.turnOffLoading();
            this.taskManager.genericUI.active = true;
            this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
              error: Error()
            }), GenericUI) : GenericUI).turnOnGenericTaskJSONwithReturn(this.tekstObject, this);
            this.executed = true; //this.taskManager.refreshExecutedTasks(this.node.parent!);

            this.executeNextTasksByForce();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "remoteName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
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
//# sourceMappingURL=TaskSimplePanelClickableObject.js.map