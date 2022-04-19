System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Animation, Task, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, DbuttonActivate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../Tasks/Task", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39cafqCRjhLgY4Ri2Nc42rg", "3DbuttonActivate", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DbuttonActivate
       * DateTime = Thu Nov 25 2021 16:40:52 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = 3DbuttonActivate.ts
       * FileBasenameNoExtension = 3DbuttonActivate
       * URL = db://assets/Scripts/UI/3DbuttonActivate.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("DbuttonActivate", DbuttonActivate = (_dec = ccclass('DbuttonActivate'), _dec2 = property(Node), _dec3 = property(Boolean), _dec(_class = (_class2 = (_temp = class DbuttonActivate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "myTask", _descriptor, this);

          _initializerDefineProperty(this, "taskCompletedAutomaticly", _descriptor2, this);
        }

        execute() {
          if (this.myTask.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)) {
            var _this$myTask$getCompo;

            if (this.taskCompletedAutomaticly) (_this$myTask$getCompo = this.myTask.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)) === null || _this$myTask$getCompo === void 0 ? void 0 : _this$myTask$getCompo.taskCompleted();else {
              var _this$myTask$getCompo2;

              console.log("Sta se desava ");
              (_this$myTask$getCompo2 = this.myTask.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)) === null || _this$myTask$getCompo2 === void 0 ? void 0 : _this$myTask$getCompo2.showTask();
            }
          } else console.log("Dugme nije dobro namesteno");
        } //Dodali smo animaciju kao prioritet da bismo u nekim slucajevima usporili pokretanje execute()


        startAnimation() {
          var _this$node$getCompone;

          if (this.node.getComponent(Animation)) (_this$node$getCompone = this.node.getComponent(Animation)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone.play();else {
            this.execute();
          }
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "myTask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "taskCompletedAutomaticly", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
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
//# sourceMappingURL=3DbuttonActivate.js.map