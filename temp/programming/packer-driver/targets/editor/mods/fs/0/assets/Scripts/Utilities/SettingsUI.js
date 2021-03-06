System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Slider, Toggle, GameManager, GameStatuType, ScriptEffects, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, SettingsUI;

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
      Slider = _cc.Slider;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "861c4VLRgZKYJDhIb2CRjAR", "SettingsUI", undefined);

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

      _export("SettingsUI", SettingsUI = (_dec = ccclass('SettingsUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Slider), _dec8 = property(Toggle), _dec9 = property(Toggle), _dec(_class = (_class2 = (_temp = class SettingsUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericTekst", _descriptor, this);

          _initializerDefineProperty(this, "normalRotationIcon", _descriptor2, this);

          _initializerDefineProperty(this, "inverseRotationIcon", _descriptor3, this);

          _initializerDefineProperty(this, "normalSoundIcon", _descriptor4, this);

          _initializerDefineProperty(this, "muteSoundIcon", _descriptor5, this);

          _initializerDefineProperty(this, "speedSlider", _descriptor6, this);

          _initializerDefineProperty(this, "inversionToggle", _descriptor7, this);

          _initializerDefineProperty(this, "zvukCheckpoint", _descriptor8, this);

          _defineProperty(this, "defaultMoveSpeed", 1.5);
        }

        /* onLoad(){
             const sliderEventHandler = new EventHandler();
             // This Node is the node to which your event processing code component belongs
             sliderEventHandler.target = this.node;
             // This is the script class name
             sliderEventHandler.component = 'example';
             sliderEventHandler.handler = 'callback';
             sliderEventHandler.customEventData = 'foobar';
               const slider = this.node.getComponent(SliderComponent);
             slider!.slideEvents.push(sliderEventHandler);
         } */
        start() {
          this.defaultMoveSpeed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().moveSpeed;
        }

        sliderChanged(event, customEventData) {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().moveSpeed = this.speedSlider.progress + this.defaultMoveSpeed;
        }

        toggleCheckedMute(event, customEventData) {
          this.normalSoundIcon.active = this.zvukCheckpoint.isChecked;
          this.muteSoundIcon.active = !this.zvukCheckpoint.isChecked;
          var volume;
          if (this.zvukCheckpoint.isChecked) volume = 1;else volume = 0;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().setVolume(volume);
        }

        toggleChecked(event, customEventData) {
          this.inverseRotationIcon.active = this.inversionToggle.isChecked;
          this.normalRotationIcon.active = !this.inversionToggle.isChecked;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().invertedRotation = this.inversionToggle.isChecked;
          console.log(" TOGGLE " + (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().invertedRotation);
        }

        solveIntroTaskButton() {//Translate -> Trebace nam kasnije
          //this.node.getChildByName("GenericButton")!.getChildByName("Label")!.getComponent(Label)!.string = GlobalManager.getGlobal().exitButton!;
          //this.node.getChildByName("Speed")!.getComponent(Label)!.string = GlobalManager.getGlobal().choseSpeedSettingsText!;
          // this.node.getChildByName("Inverse")!.getComponent(Label)!.string = GlobalManager.getGlobal().inverseSettingsText!;
        }

        turnOnSetting() {
          this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects).fadeInActive(); //this.genericTekst.getComponent(Label)!.string = tekst.toString();

          this.solveIntroTaskButton();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        turnOffSetting() {
          var _this$getComponent;

          (_this$getComponent = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.fadeOutActive();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameActive;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericTekst", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalRotationIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inverseRotationIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "normalSoundIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "muteSoundIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "speedSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "inversionToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "zvukCheckpoint", [_dec9], {
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
//# sourceMappingURL=SettingsUI.js.map