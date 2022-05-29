System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Task, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, EndGameLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Tasks/Task", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b39e4qV2apC2o3l+1LsJrju", "EndGameLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = EndGameLogic
       * DateTime = Thu May 19 2022 16:21:02 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = EndGameLogic.ts
       * FileBasenameNoExtension = EndGameLogic
       * URL = db://assets/Scripts/Tasks/EndGameLogic.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("EndGameLogic", EndGameLogic = (_dec = ccclass('EndGameLogic'), _dec2 = property({
        type: _crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
          error: Error()
        }), Task) : Task
      }), _dec(_class = (_class2 = (_temp = _class3 = class EndGameLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "task", _descriptor, this);
        }

        start() {
          EndGameLogic.instance = this;
        }

        static startEndGame() {
          var _EndGameLogic$instanc;

          console.log("EndGame Activate");
          (_EndGameLogic$instanc = EndGameLogic.instance.task) === null || _EndGameLogic$instanc === void 0 ? void 0 : _EndGameLogic$instanc.showTask();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "task", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EndGameLogic.js.map