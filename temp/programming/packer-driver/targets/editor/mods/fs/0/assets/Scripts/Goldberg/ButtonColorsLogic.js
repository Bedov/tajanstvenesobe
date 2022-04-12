System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Material, MeshRenderer, LevelButtonClicked, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ButtonColorsLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLevelButtonClicked(extras) {
    _reporterNs.report("LevelButtonClicked", "../UI/LevelButtoClicked", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_2) {
      LevelButtonClicked = _unresolved_2.LevelButtonClicked;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "914bcR7h0NPXr7ghsWVqehB", "ButtonColorsLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonColorsLogic", ButtonColorsLogic = (_dec = ccclass('ButtonColorsLogic'), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(Material), _dec(_class = (_class2 = (_temp = class ButtonColorsLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lockedMaterial", _descriptor, this);

          _initializerDefineProperty(this, "unlockedMaterial", _descriptor2, this);

          _initializerDefineProperty(this, "finishedMaterial", _descriptor3, this);

          _defineProperty(this, "button1", void 0);

          _defineProperty(this, "button2", void 0);

          _defineProperty(this, "button3", void 0);

          _defineProperty(this, "button4", void 0);

          _defineProperty(this, "button5", void 0);

          _defineProperty(this, "buttonsArray", []);
        }

        start() {
          this.buttonsArray.push(this.node.getChildByName("1"));
          this.buttonsArray.push(this.node.getChildByName("2"));
          this.buttonsArray.push(this.node.getChildByName("3"));
          this.buttonsArray.push(this.node.getChildByName("4"));
          this.buttonsArray.push(this.node.getChildByName("5"));
          this.refreshColors(3);
        }

        refreshColors(progress) {
          for (let index = 0; index < this.buttonsArray.length; index++) {
            const element = this.buttonsArray[index].getComponent(MeshRenderer).setMaterial(this.lockedMaterial, 0);
          }

          for (let index = 0; index < progress; index++) {
            this.buttonsArray[index].getComponent(_crd && LevelButtonClicked === void 0 ? (_reportPossibleCrUseOfLevelButtonClicked({
              error: Error()
            }), LevelButtonClicked) : LevelButtonClicked).lockedButton = false;
            const element = this.buttonsArray[index].getComponent(MeshRenderer).setMaterial(this.finishedMaterial, 0);
          }

          this.buttonsArray[Number(progress)].getComponent(_crd && LevelButtonClicked === void 0 ? (_reportPossibleCrUseOfLevelButtonClicked({
            error: Error()
          }), LevelButtonClicked) : LevelButtonClicked).lockedButton = false;
          this.buttonsArray[Number(progress)].getComponent(MeshRenderer).setMaterial(this.unlockedMaterial, 0);
        }

        lockAllButtons() {
          this.buttonsArray.forEach(element => {
            element.getComponent(_crd && LevelButtonClicked === void 0 ? (_reportPossibleCrUseOfLevelButtonClicked({
              error: Error()
            }), LevelButtonClicked) : LevelButtonClicked).lockedButton = true;
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lockedMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "unlockedMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "finishedMaterial", [_dec4], {
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
//# sourceMappingURL=ButtonColorsLogic.js.map