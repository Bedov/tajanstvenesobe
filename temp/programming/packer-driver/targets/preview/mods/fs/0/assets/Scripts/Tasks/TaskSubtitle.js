System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Collider, GenericUI, Task, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TaskSubtitle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGenericUI(extras) {
    _reporterNs.report("GenericUI", "../Utilities/GenericUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      GenericUI = _unresolved_2.GenericUI;
    }, function (_unresolved_3) {
      Task = _unresolved_3.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a07e5LQyf9C05bUQnEixJC6", "TaskSubtitle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskSubtitle", TaskSubtitle = (_dec = ccclass('TaskSubtitle'), _dec2 = property(String), _dec(_class = (_class2 = (_temp = class TaskSubtitle extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tekst", _descriptor, this);
        }

        start() {
          var trigger = this.getComponent(Collider);

          if (trigger) {
            trigger.on("onTriggerEnter", this.taskReached, this);
          }
        }

        taskReached(event) {
          if (event.otherCollider.node.name == "Player") {
            if (this.requirementForTaskCompleted) this.execute();
          }
        }

        execute() {
          this.taskManager.genericUI.active = true;
          this.taskManager.genericUI.getComponent(_crd && GenericUI === void 0 ? (_reportPossibleCrUseOfGenericUI({
            error: Error()
          }), GenericUI) : GenericUI).turnOnGenericTask(String(this.tekst)); //Čestitam! Stigao si do časovničara.

          this.taskManager.refreshExecutedTasks(this.node.parent);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tekst", [_dec2], {
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
//# sourceMappingURL=TaskSubtitle.js.map