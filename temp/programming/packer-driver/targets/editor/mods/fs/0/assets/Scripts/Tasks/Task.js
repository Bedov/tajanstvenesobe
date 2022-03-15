System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, GenericUI, Consequence, GameManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, Task;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTaskManager(extras) {
    _reporterNs.report("TaskManager", "./TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUI(extras) {
    _reporterNs.report("GenericUI", "../Utilities/GenericUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsequence(extras) {
    _reporterNs.report("Consequence", "../Consequences/Consequence", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GenericUI = _unresolved_2.GenericUI;
    }, function (_unresolved_3) {
      Consequence = _unresolved_3.Consequence;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "113020qzTxBZJuyvdoOL9hm", "Task", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Task", Task = (_dec = ccclass('Task'), _dec2 = property([Node]), _dec3 = property(Boolean), _dec4 = property(Boolean), _dec5 = property(Boolean), _dec6 = property([Node]), _dec7 = property([_crd && Consequence === void 0 ? (_reportPossibleCrUseOfConsequence({
        error: Error()
      }), Consequence) : Consequence]), _dec8 = property(Number), _dec(_class = (_class2 = (_temp = class Task extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "requirementForTaskCompleted", false);

          _defineProperty(this, "executed", false);

          _initializerDefineProperty(this, "dependencies", _descriptor, this);

          _initializerDefineProperty(this, "uvodniTask", _descriptor2, this);

          _initializerDefineProperty(this, "repeatToogle", _descriptor3, this);

          _initializerDefineProperty(this, "reportToUser", _descriptor4, this);

          _initializerDefineProperty(this, "taskToExecuteByForce", _descriptor5, this);

          _initializerDefineProperty(this, "consequencesToResolve", _descriptor6, this);

          _initializerDefineProperty(this, "checkPointBelong", _descriptor7, this);
        }

        onLoad() {
          var _this$node$parent, _this$node$parent$par;

          this.taskManager = (_this$node$parent = this.node.parent) === null || _this$node$parent === void 0 ? void 0 : (_this$node$parent$par = _this$node$parent.parent) === null || _this$node$parent$par === void 0 ? void 0 : _this$node$parent$par.getComponent("TaskManager");
          ; //  GameManager.getInstance().TaskManager?.getComponent("TaskManager") as TaskManager;
          //console.log("TaskManager !!!!! + " + GameManager.getInstance().TaskManager!.name);
          //this.schedule(this.getNeeded(), 0.1 );
          //console.log("Canvas !!!!! + " + GameManager.getInstance().jsonLoader?.name);

          this.checkReadienes();
        }

        getNeeded() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().jsonLoader == undefined) this.schedule(this.getNeeded(), 1);
        }

        isItOkToExecute() {
          if (this.requirementForTaskCompleted) {
            if (!this.executed) return true;else {
              if (this.repeatToogle) return true;else {
                if (this.reportToUser) this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
                  error: Error()
                }), GenericUI) : GenericUI).turnOnGenericTask("Već si obavio ovaj zadatak.");
                return false;
              }
            }
          } else {
            if (this.reportToUser) this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
              error: Error()
            }), GenericUI) : GenericUI).turnOnGenericTask("Ovo nije objekat koji trazis."); //  genericUIgeneABC!.getComponent(

            return false;
          }
        }

        showTask() {
          this.taskManager.refreshExecutedTasks(this.node.parent);
        }

        taskCompleted() {
          //this.taskManager.refreshExecutedTasks(this.node.parent!);
          this.executed = true;
          this.taskManager.checkReadinesForTasks();
          this.resolveConsequnces();
          this.executeNextTasksByForce();
        }

        resolveConsequnces() {
          if (this.consequencesToResolve.length == 0) {
            return;
          }

          this.consequencesToResolve.forEach(element => {
            element.resolve();
          });
        }

        executeNextTasksByForce() {
          if (this.taskToExecuteByForce.length == 0) {
            return;
          }

          this.taskToExecuteByForce.forEach(element => {
            element.getComponent(Task).showTask();
          });
        }

        checkReadienes() {
          if (this.dependencies.length == 0) {
            this.requirementForTaskCompleted = true;
            return;
          }

          var weHaveUnresolvedDependency = false;
          this.dependencies.forEach(element => {
            if (element.getComponent(Task).executed == false) {
              this.requirementForTaskCompleted = false;
              weHaveUnresolvedDependency = true;
            }
          });
          if (!weHaveUnresolvedDependency) this.requirementForTaskCompleted = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dependencies", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uvodniTask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "repeatToogle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reportToUser", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "taskToExecuteByForce", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "consequencesToResolve", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "checkPointBelong", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
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
//# sourceMappingURL=Task.js.map