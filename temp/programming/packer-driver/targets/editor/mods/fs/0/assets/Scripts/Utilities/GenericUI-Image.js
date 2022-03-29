System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, AudioSource, Sprite, GameManager, GameStatuType, GlobalManager, ScriptEffects, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GenericUIimage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONimage(extras) {
    _reporterNs.report("JSONimage", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "./ScriptEffects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      AudioSource = _cc.AudioSource;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }, function (_unresolved_4) {
      ScriptEffects = _unresolved_4.ScriptEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d304aEwkahKz42x4R3nMu1y", "GenericUI-Image", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = GenericUI
       * DateTime = Wed Nov 17 2021 22:41:36 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = GenericUI.ts
       * FileBasenameNoExtension = GenericUI
       * URL = db://assets/Scripts/Utilities/GenericUI.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("GenericUIimage", GenericUIimage = (_dec = ccclass('GenericUIimage'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class GenericUIimage extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericImage", _descriptor, this);

          _initializerDefineProperty(this, "genericTekst", _descriptor2, this);

          _initializerDefineProperty(this, "turnOffSoundButton", _descriptor3, this);

          _defineProperty(this, "audioSource", null);

          _defineProperty(this, "soundParent", undefined);

          _defineProperty(this, "turningOff", false);
        }

        start() {
          this.audioSource = this.node.getComponent(AudioSource);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().pushMeToAudioArray(this.audioSource);
        }

        turnOnGenericTaskJSONimage(JSONimage) {
          var _this$getComponent;

          this.JSONtask = JSONimage;
          (_this$getComponent = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.fadeInActive();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
          this.genericImage.getComponent(Sprite).spriteFrame = this.JSONtask.questImage;
          this.solveIntroTaskButton();
          this.solveSoundActivness();
        }

        solveSoundActivness() {
          this.soundParent = this.node.getChildByName("SoundButtons");

          if (this.JSONtask.questAudio == undefined || this.JSONtask.questAudio == null) {
            this.soundParent.active = false;
            console.log("USAO");
          } else this.soundParent.active = true;

          this.turningOff = false;
        }

        solveIntroTaskButton() {
          this.node.getChildByName("GenericButton").getChildByName("Label").getComponent(Label).string = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getGlobal().goButton;
        }

        turnOnGenericTask(tekst) {
          var _this$getComponent2;

          (_this$getComponent2 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent2 === void 0 ? void 0 : _this$getComponent2.fadeInActive();
          this.genericImage.getComponent(Label).string = tekst;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        turnOffGenericTask() {
          var _this$getComponent3;

          if (this.audioSource.playing) this.audioSource.stop();
          (_this$getComponent3 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent3 === void 0 ? void 0 : _this$getComponent3.fadeOutActive();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameActive;
        }

        soundButtonClicked(event, customData) {
          if (!this.audioSource.playing) {
            this.audioSource.clip = this.JSONtask.questAudio;
            if (this.JSONtask.questAudio != undefined) this.audioSource.play();
          } else this.audioSource.stop();
        }

        update() {
          if (this.audioSource.playing) this.turnOffSoundButton.active = true;else this.turnOffSoundButton.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericImage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "genericTekst", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "turnOffSoundButton", [_dec4], {
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
//# sourceMappingURL=GenericUI-Image.js.map