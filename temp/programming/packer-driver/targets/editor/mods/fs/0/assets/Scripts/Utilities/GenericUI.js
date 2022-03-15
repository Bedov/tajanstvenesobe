System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, AudioSource, Sprite, GameManager, GameStatuType, GlobalManager, Task, ScriptEffects, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GenericUI;

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

  function _reportPossibleCrUseOfJSONquestTekst(extras) {
    _reporterNs.report("JSONquestTekst", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONobject(extras) {
    _reporterNs.report("JSONobject", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../Tasks/Task", _context.meta, extras);
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
      Task = _unresolved_4.Task;
    }, function (_unresolved_5) {
      ScriptEffects = _unresolved_5.ScriptEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27b26tXhJpAmqyX0ZVyBte1", "GenericUI", undefined);

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

      _export("GenericUI", GenericUI = (_dec = ccclass('GenericUI'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class GenericUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericTekst", _descriptor, this);

          _initializerDefineProperty(this, "genericImage", _descriptor2, this);

          _defineProperty(this, "audioSource", null);

          _defineProperty(this, "soundParent", undefined);

          _defineProperty(this, "turningOff", false);

          _defineProperty(this, "tempTask", undefined);
        }

        start() {
          this.audioSource = this.node.getComponent(AudioSource);
        }

        turnOnGenericTaskJSONwithReturn(JSONtask, tempTask) {
          this.tempTask = tempTask;
          this.turnOnGenericTaskJSON(JSONtask);
        }

        turnOnGenericTaskJSON(JSONtask) {
          var _this$getComponent;

          this.JSONbasicReference = JSONtask;
          (_this$getComponent = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.fadeInActive();
          this.genericTekst.getComponent(Label).string = JSONtask.quest.toString();
          this.solveSoundActivness(JSONtask);
          this.solveIntroTaskButton();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        turnOnGenericTaskJSONimagewithReturn(JSONtask, tempTask) {
          this.tempTask = tempTask;
          this.turnOnGenericTaskJSONimage(JSONtask);
        }

        turnOnGenericTaskJSONimage(JSONimage) {
          var _this$getComponent2;

          this.JSONbasicReference = JSONimage;
          (_this$getComponent2 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent2 === void 0 ? void 0 : _this$getComponent2.fadeInActive();
          this.genericTekst.getComponent(Label).string = JSONimage.quest.toString();
          this.genericImage.getComponent(Sprite).spriteFrame = JSONimage.questImage;
          this.solveSoundActivness(JSONimage);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        solveIntroTaskButton() {
          var _this$tempTask$getCom;

          if (this.tempTask) if (((_this$tempTask$getCom = this.tempTask.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)) === null || _this$tempTask$getCom === void 0 ? void 0 : _this$tempTask$getCom.uvodniTask) == true) this.node.getChildByName("GenericButton").getChildByName("Label").getComponent(Label).string = ">";else this.node.getChildByName("GenericButton").getChildByName("Label").getComponent(Label).string = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getGlobal().goButton;
        }

        solveSoundActivness(task) {
          this.soundParent = this.node.getChildByName("SoundButtons");

          if (task.questAudio == undefined || task.questAudio == null) {
            this.soundParent.active = false;
            console.log("task.questAudio mi je undefined ili null" + task.questAudio);
          } else this.soundParent.active = true;

          this.turningOff = false;
        }

        turnOnGenericTaskWithReturn(tekst, tempTask) {
          var _this$getComponent3;

          this.tempTask = tempTask;
          (_this$getComponent3 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent3 === void 0 ? void 0 : _this$getComponent3.fadeInActive();
          this.genericTekst.getComponent(Label).string = tekst;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        turnOnGenericTask(tekst) {
          var _this$getComponent4;

          (_this$getComponent4 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent4 === void 0 ? void 0 : _this$getComponent4.fadeInActive();
          this.genericTekst.getComponent(Label).string = tekst;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
        }

        turnOffGenericTask() {
          var _this$getComponent5;

          (_this$getComponent5 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent5 === void 0 ? void 0 : _this$getComponent5.fadeOutActive();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameActive;

          if (this.tempTask != undefined) {
            this.tempTask.taskCompleted();
            this.tempTask = undefined;
          }
        }

        soundButtonClicked(event, customData) {
          this.audioSource.playOneShot(this.JSONbasicReference.questAudio, 1);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericTekst", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "genericImage", [_dec3], {
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
//# sourceMappingURL=GenericUI.js.map