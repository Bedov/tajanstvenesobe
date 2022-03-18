System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, AudioSource, Animation, EditBoxComponent, Task, ScriptEffects, GameManager, GameStatuType, TaskInput, GlobalManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GenericUIinput;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../Tasks/Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "./ScriptEffects", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONtask(extras) {
    _reporterNs.report("JSONtask2", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInput(extras) {
    _reporterNs.report("TaskInput", "../Tasks/TaskInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
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
      Animation = _cc.Animation;
      EditBoxComponent = _cc.EditBoxComponent;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
      GameStatuType = _unresolved_4.GameStatuType;
    }, function (_unresolved_5) {
      TaskInput = _unresolved_5.TaskInput;
    }, function (_unresolved_6) {
      GlobalManager = _unresolved_6.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6be17T1cABOeK5AD2965d47", "GenericUI-Input", undefined);

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

      _export("GenericUIinput", GenericUIinput = (_dec = ccclass('GenericUI-Input'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class GenericUIinput extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "genericTekst", _descriptor, this);

          _initializerDefineProperty(this, "turnOffSoundButton", _descriptor2, this);

          _defineProperty(this, "editBoxPC", void 0);

          _defineProperty(this, "soundParent", undefined);

          _defineProperty(this, "audioSource", null);

          _defineProperty(this, "ScriptableFromWrong", void 0);

          _defineProperty(this, "corespondingTask", void 0);

          _defineProperty(this, "correctAnswer", void 0);

          _defineProperty(this, "typeInputResult", void 0);

          _defineProperty(this, "turningOff", false);
        }

        start() {
          this.turnOffSoundButton.active = true;
          this.audioSource = this.node.getComponent(AudioSource);
          if (this.node.getChildByName("Wrong") != undefined && this.node.getChildByName("Wrong") != null) this.ScriptableFromWrong = this.node.getChildByName("Wrong").getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects);
          this.setPCorMobileKeyboard();
        }

        setPCorMobileKeyboard() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().isMobileOrTablet) {
            this.node.getChildByName("EditBox").active = true;
            this.node.getChildByName("EditBoxPC").active = false;
            this.typeInputResult = this.node.getChildByName("EditBox").getChildByName("Result").getComponent(Label);
          } else {
            this.node.getChildByName("EditBox").active = false;
            this.node.getChildByName("EditBoxPC").active = true;
            this.typeInputResult = this.node.getChildByName("EditBoxPC").getChildByName("Result").getComponent(Label);
            this.editBoxPC = this.node.getChildByName("EditBoxPC").getComponent(EditBoxComponent);
          }
        }

        solveSoundActivness() {
          console.log("Solve Sound Activness!!! " + this.JSONtask.questionAudio);
          this.soundParent = this.node.getChildByName("SoundButton");
          if (this.JSONtask.questionAudio == undefined || this.JSONtask.questionAudio == null) this.soundParent.active = false;else this.soundParent.active = true;
          this.turningOff = false;
        }

        solveIntroTaskButton() {
          this.node.getChildByName("GenericButton").getChildByName("Label").getComponent(Label).string = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getGlobal().goButton;
        }

        soundButtonClicked(event, customData) {
          if (!this.audioSource.playing) {
            this.audioSource.clip = this.JSONtask.questionAudio;
            if (this.JSONtask.questionAudio != undefined) this.audioSource.play();
          } else this.audioSource.stop();
        }

        answered(event, customData) {
          var _this$typeInputResult;

          if (((_this$typeInputResult = this.typeInputResult) === null || _this$typeInputResult === void 0 ? void 0 : _this$typeInputResult.string) == this.JSONtask.tacanOdgovor) this.rightAnwer();else this.wrongAnswer();
        }

        rightAnwer() {
          var _this$corespondingTas, _this$corespondingTas2;

          (_this$corespondingTas = this.corespondingTask) === null || _this$corespondingTas === void 0 ? void 0 : (_this$corespondingTas2 = _this$corespondingTas.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)) === null || _this$corespondingTas2 === void 0 ? void 0 : _this$corespondingTas2.taskCompleted(); //this.ScriptableFromWrong?.fadeOutActive();

          this.clearStringFromEditBox();
          this.turnOffGenericTask();
          this.turningOff = true;
        }

        clearStringFromEditBox() {
          this.typeInputResult.string = "";
          if (this.editBoxPC) this.editBoxPC.string = "";
        }

        wrongAnswer() {
          //if(!this.turningOff)
          //    this.ScriptableFromWrong?.fadeInActive();
          this.node.getComponent(Animation).play("WrongNudge");
          this.setRandomTask();
          this.clearStringFromEditBox();
        }

        turnOnGenericTask(task) {
          var _this$getComponent;

          this.corespondingTask = task;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused;
          (_this$getComponent = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.fadeInActive();
          this.setRandomTask();
          this.solveIntroTaskButton();

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().isMobileOrTablet) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().inputKeyboard.active = true;
          }
        }

        setRandomTask() {
          this.JSONtask = this.corespondingTask.getComponent(_crd && TaskInput === void 0 ? (_reportPossibleCrUseOfTaskInput({
            error: Error()
          }), TaskInput) : TaskInput).questionTemp;
          this.genericTekst.getComponent(Label).string = this.JSONtask.question;
          this.solveSoundActivness();
        }

        turnOffGenericTask() {
          var _this$getComponent2;

          if (this.audioSource.playing) this.audioSource.stop();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameActive;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().inputKeyboard.active = false;
          (_this$getComponent2 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent2 === void 0 ? void 0 : _this$getComponent2.fadeOutActive(); //this.ScriptableFromWrong?.fadeOutActive();
        }

        update() {
          if (this.audioSource.playing) {
            console.log("Sta koji kurac+ " + this.turnOffSoundButton.name);
            this.turnOffSoundButton.active = true;
          } else {
            this.turnOffSoundButton.active = false;
            console.log("Nisam ovde " + this.turnOffSoundButton.name);
          }

          this.turnOffSoundButton.active = true;
          console.log("AKTIVNOST: + " + this.turnOffSoundButton.active.toString());
          this.turnOffSoundButton.setPosition(this.soundParent.position);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericTekst", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "turnOffSoundButton", [_dec3], {
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
//# sourceMappingURL=GenericUI-Input.js.map