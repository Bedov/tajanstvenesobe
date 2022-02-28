System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, macro, Enum, AudioSource, Task, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TypeOfTask, TaskAutoActiveLocalAudio;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  _export("TypeOfTask", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      macro = _cc.macro;
      Enum = _cc.Enum;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e42fjDMzpLFJ/FxNTEqSUB", "TaskAutoActiveLocalAudio", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (TypeOfTask) {
        TypeOfTask[TypeOfTask["tekstType"] = 0] = "tekstType";
        TypeOfTask[TypeOfTask["imageType"] = 1] = "imageType";
      })(TypeOfTask || _export("TypeOfTask", TypeOfTask = {}));

      _export("TaskAutoActiveLocalAudio", TaskAutoActiveLocalAudio = (_dec = ccclass('TaskAutoActiveLocalAudio'), _dec2 = property(String), _dec3 = property({
        type: Enum(TypeOfTask)
      }), _dec(_class = (_class2 = (_temp = class TaskAutoActiveLocalAudio extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "myTimeHasCome", true);

          _defineProperty(this, "soundPlayed", false);

          _initializerDefineProperty(this, "remoteName", _descriptor, this);

          _defineProperty(this, "counterForExecution", 0);

          _defineProperty(this, "timerOn", false);

          _initializerDefineProperty(this, "taskType", _descriptor2, this);
        }

        start() {
          this.schedule(this.checkExecution, 1, macro.REPEAT_FOREVER);
        }

        update(deltaTime) {
          if (this.timerOn) this.counterForExecution += deltaTime;else return;

          if (this.counterForExecution > 6) {
            if (this.executed == false) this.taskCompleted();
            this.timerOn = false;
          }
        }

        checkExecution() {
          if (this.isItOkToExecute() && !this.soundPlayed) {
            this.showTask();
            this.soundPlayed = true;
          }
        }

        showTask() {
          var _this$getComponent;

          (_this$getComponent = this.getComponent(AudioSource)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.play(); //this.taskCompleted();

          if (this.executed == false) this.timerOn = true; //this.scheduleOnce(this.taskCompleted(), 6);
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
//# sourceMappingURL=TaskAutoActiveLocalAudio.js.map