System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f030bDzGrBCKK8+syQwvBgi", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = AudioManager
       * DateTime = Thu Apr 28 2022 16:20:08 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = AudioManager.ts
       * FileBasenameNoExtension = AudioManager
       * URL = db://assets/Scripts/AudioManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec(_class = (_class2 = (_temp = _class3 = class AudioManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "winSound", _descriptor, this);

          _initializerDefineProperty(this, "positiveSound", _descriptor2, this);

          _initializerDefineProperty(this, "negativeSound", _descriptor3, this);

          _initializerDefineProperty(this, "clickSound", _descriptor4, this);

          _defineProperty(this, "audioSource", null);
        }

        static getInstance() {
          if (!this.instance) {
            AudioManager.instance = new AudioManager();
          }

          return AudioManager.instance;
        }

        onLoad() {
          AudioManager.instance = this;
          this.audioSource = this.node.getComponent(AudioSource);
        }

        start() {// [3]
        }

        positiveSoundPlay() {
          this.audioSource.playOneShot(this.positiveSound);
        }

        winSoundPlay() {
          this.audioSource.playOneShot(this.winSound);
        }

        negativeSoundPlay() {
          this.audioSource.playOneShot(this.negativeSound);
        }

        clickSoundPlay() {
          this.audioSource.playOneShot(this.clickSound);
        }

      }, _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "winSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "positiveSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "negativeSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickSound", [_dec5], {
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
//# sourceMappingURL=AudioManager.js.map