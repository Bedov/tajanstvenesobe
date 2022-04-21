System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Consequence, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ConsequenceTurnOn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConsequence(extras) {
    _reporterNs.report("Consequence", "./Consequence", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Consequence = _unresolved_2.Consequence;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc272q5tPBEf5n90qI3h1up", "ConsequenceTurnOn", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ConsequenceTurnOff
       * DateTime = Mon Jan 10 2022 16:33:54 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ConsequenceTurnOff.ts
       * FileBasenameNoExtension = ConsequenceTurnOff
       * URL = db://assets/Scripts/Consequences/ConsequenceTurnOff.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ConsequenceTurnOn", ConsequenceTurnOn = (_dec = ccclass('ConsequenceTurnOn'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class ConsequenceTurnOn extends (_crd && Consequence === void 0 ? (_reportPossibleCrUseOfConsequence({
        error: Error()
      }), Consequence) : Consequence) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "turnOffNode", _descriptor, this);
        }

        start() {}

        resolve() {
          this.node.active = true;
          this.turnOffNode.active = false; //this.node.active = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "turnOffNode", [_dec2], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ConsequenceTurnOn.js.map