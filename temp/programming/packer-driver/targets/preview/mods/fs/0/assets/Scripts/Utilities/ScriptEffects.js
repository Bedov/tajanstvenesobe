System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, UIOpacity, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ScriptEffects;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6dcclgG8JJ/Z49xlaBATci", "ScriptEffects", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ScriptEffects
       * DateTime = Tue Nov 16 2021 13:22:00 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ScriptEffects.ts
       * FileBasenameNoExtension = ScriptEffects
       * URL = db://assets/Scripts/Utilities/ScriptEffects.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("ScriptEffects", ScriptEffects = (_dec = ccclass('ScriptEffects'), _dec2 = property(Number), _dec3 = property(Boolean), _dec(_class = (_class2 = (_temp = class ScriptEffects extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_fadeOutBool", false);

          _defineProperty(this, "_fadeOutEffect", true);

          _defineProperty(this, "_fadeOutCounter", 0.4);

          _defineProperty(this, "_fadeInBool", false);

          _defineProperty(this, "_fadeInEffect", true);

          _defineProperty(this, "_fadeInCounter", 0);

          _initializerDefineProperty(this, "_fadeOutCounterMax", _descriptor, this);

          _initializerDefineProperty(this, "defaultOff", _descriptor2, this);
        }

        onLoad() {
          if (this.defaultOff) {
            this.node.active = false;
            this.node.getComponent(UIOpacity).opacity = 0;
          }
        }

        fadeOutActive() {
          //this._fadeOutCounter = this._fadeOutCounterMax; 
          this._fadeOutBool = true;
          this._fadeInBool = false;
        }

        fadeInActive() {
          this.node.active = true;
          this._fadeInBool = true;
          this._fadeOutBool = false;
        }

        fadeOut(time) {
          if (this.node.getComponent(UIOpacity) != null) if (this.node.getComponent(UIOpacity).opacity >= time / this._fadeOutCounterMax * 255 && time / this._fadeOutCounterMax * 255 >= 0) {
            this.node.getComponent(UIOpacity).opacity = time / this._fadeOutCounterMax * 255;
          }
        }

        fadeIn(time) {
          this.node.active = true;
          if (this.node.getComponent(UIOpacity) != null) if (this.node.getComponent(UIOpacity).opacity <= time / this._fadeOutCounterMax * 255 && time / this._fadeOutCounterMax * 255 <= 255) {
            this.node.getComponent(UIOpacity).opacity = time / this._fadeOutCounterMax * 255;
          }
        }

        update(deltaTime) {
          if (this._fadeOutBool) {
            this._fadeOutCounter -= deltaTime;
            this.fadeOut(this._fadeOutCounter);

            if (this._fadeOutCounter < 0) {
              this._fadeOutBool = false;
              this._fadeOutCounter = this._fadeOutCounterMax;
              this.node.active = false;
            }
          }

          if (this._fadeInBool) {
            this._fadeInCounter += deltaTime;
            this.fadeIn(this._fadeInCounter);

            if (this._fadeInCounter > this._fadeOutCounterMax) {
              this._fadeInBool = false;
              this._fadeInCounter = 0;
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_fadeOutCounterMax", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "defaultOff", [_dec3], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ScriptEffects.js.map