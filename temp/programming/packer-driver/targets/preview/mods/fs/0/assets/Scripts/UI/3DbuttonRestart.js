System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, AudioManager, RememberAndRestore, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, DbuttonRestart;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRememberAndRestore(extras) {
    _reporterNs.report("RememberAndRestore", "../Utilities/RememberAndRestore", _context.meta, extras);
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
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      RememberAndRestore = _unresolved_3.RememberAndRestore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8697eP9WbhNqp3vpgyvYsAn", "3DbuttonRestart", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DbuttonActivateGeneric
       * DateTime = Fri Apr 01 2022 14:07:26 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = 3DbuttonActivateGeneric.ts
       * FileBasenameNoExtension = 3DbuttonActivateGeneric
       * URL = db://assets/Scripts/UI/3DbuttonActivateGeneric.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DbuttonRestart", DbuttonRestart = (_dec = ccclass('DbuttonActivateGeneric'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class DbuttonRestart extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "goldberg", _descriptor, this);
        }

        start() {}

        restartGolderg() {
          var _this$goldberg$getCom;

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().clickSoundPlay();
          (_this$goldberg$getCom = this.goldberg.getComponent(_crd && RememberAndRestore === void 0 ? (_reportPossibleCrUseOfRememberAndRestore({
            error: Error()
          }), RememberAndRestore) : RememberAndRestore)) === null || _this$goldberg$getCom === void 0 ? void 0 : _this$goldberg$getCom.restart();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldberg", [_dec2], {
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
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3DbuttonRestart.js.map