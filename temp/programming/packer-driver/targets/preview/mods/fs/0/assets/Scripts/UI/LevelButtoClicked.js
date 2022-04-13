System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GlobalManager, ButtonColorsLogic, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LevelButtonClicked;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonColorsLogic(extras) {
    _reporterNs.report("ButtonColorsLogic", "../Goldberg/ButtonColorsLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GlobalManager = _unresolved_2.GlobalManager;
    }, function (_unresolved_3) {
      ButtonColorsLogic = _unresolved_3.ButtonColorsLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19759LlDspPQJncZEoq4rsO", "LevelButtoClicked", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LevelButtoClicked
       * DateTime = Fri Apr 08 2022 15:01:05 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = LevelButtoClicked.ts
       * FileBasenameNoExtension = LevelButtoClicked
       * URL = db://assets/Scripts/UI/LevelButtoClicked.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LevelButtonClicked", LevelButtonClicked = (_dec = ccclass('LevelButtonClicked'), _dec2 = property(String), _dec3 = property(Boolean), _dec(_class = (_class2 = (_temp = class LevelButtonClicked extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelName", _descriptor, this);

          _initializerDefineProperty(this, "lockedButton", _descriptor2, this);

          _defineProperty(this, "buttonColorsLogic", void 0);
        }

        start() {
          this.buttonColorsLogic = this.node.parent.getComponent(_crd && ButtonColorsLogic === void 0 ? (_reportPossibleCrUseOfButtonColorsLogic({
            error: Error()
          }), ButtonColorsLogic) : ButtonColorsLogic);
        }

        levelButtonClicked() {
          if (!this.lockedButton) {
            var _getInstance$openLeve;

            (_getInstance$openLeve = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().openLevelByName) === null || _getInstance$openLeve === void 0 ? void 0 : _getInstance$openLeve.loadAndPlaySceneByNameD(this.levelName.toString());
            this.buttonColorsLogic.lockAllButtons();
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lockedButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
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
//# sourceMappingURL=LevelButtoClicked.js.map