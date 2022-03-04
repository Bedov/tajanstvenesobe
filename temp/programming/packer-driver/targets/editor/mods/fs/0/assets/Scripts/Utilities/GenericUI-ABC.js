System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, AudioSource, randomRangeInt, Animation, Task, ScriptEffects, TaskABCquestion, GameManager, GameStatuType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GenericUIABC;

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
    _reporterNs.report("JSONtask1", "../RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskABCquestion(extras) {
    _reporterNs.report("TaskABCquestion", "../Tasks/TaskABCquestion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
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
      randomRangeInt = _cc.randomRangeInt;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }, function (_unresolved_4) {
      TaskABCquestion = _unresolved_4.TaskABCquestion;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
      GameStatuType = _unresolved_5.GameStatuType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b0d18LctJAWqNwBufmwTVF", "GenericUI-ABC", undefined);

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

      _export("GenericUIABC", GenericUIABC = (_dec = ccclass('GenericUI-ABC'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class GenericUIABC extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericTekst", _descriptor, this);

          _initializerDefineProperty(this, "A", _descriptor2, this);

          _initializerDefineProperty(this, "B", _descriptor3, this);

          _initializerDefineProperty(this, "C", _descriptor4, this);

          _defineProperty(this, "soundParent", []);

          _defineProperty(this, "audioSource", null);

          _defineProperty(this, "ScriptableFromWrong", void 0);

          _defineProperty(this, "corespondingTask", void 0);

          _defineProperty(this, "correctAnswer", void 0);

          _defineProperty(this, "turningOff", false);
        }

        fillAudioWithAnswers() {
          this.node.children.forEach(element => {
            var _this$soundParent;

            if (element.name == "Aaudio" || element.name == "Baudio" || element.name == "Caudio" || element.name == "QuestionAudio") (_this$soundParent = this.soundParent) === null || _this$soundParent === void 0 ? void 0 : _this$soundParent.push(element);
            element.children.forEach(element2 => {
              var _this$soundParent2;

              if (element2.name == "Aaudio" || element2.name == "Baudio" || element2.name == "Caudio" || element2.name == "QuestionAudio") (_this$soundParent2 = this.soundParent) === null || _this$soundParent2 === void 0 ? void 0 : _this$soundParent2.push(element2);
            });
          });
        }

        fillAudioJustQuestion() {
          var _this$soundParent3;

          (_this$soundParent3 = this.soundParent) === null || _this$soundParent3 === void 0 ? void 0 : _this$soundParent3.push(this.node.getChildByName("QuestionAudio"));
        }

        start() {
          this.fillAudioJustQuestion();
          this.audioSource = this.node.getComponent(AudioSource);
          if (this.node.getChildByName("Wrong") != undefined && this.node.getChildByName("Wrong") != null) this.ScriptableFromWrong = this.node.getChildByName("Wrong").getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects);
        }

        solveSoundActivness() {
          // this.soundParent = this.node.getChildByName("SoundButtons")! ;
          if (this.JSONtask.questionAudio == undefined || this.JSONtask.questionAudio == null) this.soundParent.forEach(element => {
            element.active = false;
          });else this.soundParent.forEach(element => {
            element.active = true;
          });
          this.turningOff = false;
        }

        findThisSoundAndPlay(stringName) {
          switch (stringName) {
            case this.JSONtask.tacanOdgovor:
              if (this.JSONtask.tacanOdgovorAudio != undefined) this.audioSource.playOneShot(this.JSONtask.tacanOdgovorAudio, 1);
              break;

            case this.JSONtask.netacanOdgovor1:
              if (this.JSONtask.netacanOdgovor1Audio != undefined) this.audioSource.playOneShot(this.JSONtask.netacanOdgovor1Audio, 1);
              break;

            case this.JSONtask.netacanOdgovor2:
              if (this.JSONtask.netacanOdgovor2Audio != undefined) this.audioSource.playOneShot(this.JSONtask.netacanOdgovor2Audio, 1);
              break;

            default:
              break;
          }
        }

        soundButtonClicked(event, customData) {
          switch (parseInt(customData)) {
            case 0:
              this.findThisSoundAndPlay(this.A.getComponent(Label).string);
              break;

            case 1:
              this.findThisSoundAndPlay(this.B.getComponent(Label).string);
              break;

            case 2:
              this.findThisSoundAndPlay(this.C.getComponent(Label).string);
              break;

            case 3:
              if (this.JSONtask.questionAudio != undefined) this.audioSource.playOneShot(this.JSONtask.questionAudio, 1);
              break;

            default:
              break;
          }
        }

        answered(event, customData) {
          switch (parseInt(customData)) {
            case 0:
              if (this.A.getComponent(Label).string == this.JSONtask.tacanOdgovor) this.rightAnwer();else this.wrongAnswer();
              break;

            case 1:
              if (this.B.getComponent(Label).string == this.JSONtask.tacanOdgovor) this.rightAnwer();else this.wrongAnswer();
              break;

            case 2:
              if (this.C.getComponent(Label).string == this.JSONtask.tacanOdgovor) this.rightAnwer();else this.wrongAnswer();
              break;

            default:
              break;
          }
        }

        rightAnwer() {
          var _this$corespondingTas, _this$corespondingTas2;

          (_this$corespondingTas = this.corespondingTask) === null || _this$corespondingTas === void 0 ? void 0 : (_this$corespondingTas2 = _this$corespondingTas.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)) === null || _this$corespondingTas2 === void 0 ? void 0 : _this$corespondingTas2.taskCompleted();
          this.turnOffGenericTask();
          this.turningOff = true;
        }

        wrongAnswer() {
          this.node.getComponent(Animation).play("WrongNudge");
          this.setRandomTask();
        }

        putAnwersInPlace() {
          var nizOdgovora = new Array();
          nizOdgovora[0] = this.JSONtask.tacanOdgovor;
          nizOdgovora[1] = this.JSONtask.netacanOdgovor1;
          nizOdgovora[2] = this.JSONtask.netacanOdgovor2;
          nizOdgovora = this.randomizeAnswers(nizOdgovora);
          this.A.getComponent(Label).string = nizOdgovora[0];
          this.B.getComponent(Label).string = nizOdgovora[1];
          this.C.getComponent(Label).string = nizOdgovora[2];
        }

        randomizeAnswers(nizStringova) {
          var izlazniNiz = new Array(); //   [nizStringova.length];

          var lengthTemp = nizStringova.length;

          for (let index = 0; index < lengthTemp; index++) {
            var izabraniRandomIndex = randomRangeInt(0, nizStringova.length);
            izlazniNiz[index] = nizStringova[izabraniRandomIndex];
            nizStringova.splice(izabraniRandomIndex, 1);
          }

          return izlazniNiz;
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
          console.log("!!!! USAO OVDE SAM! ");
          this.setRandomTask();
        }

        setRandomTask() {
          this.JSONtask = this.corespondingTask.getComponent(_crd && TaskABCquestion === void 0 ? (_reportPossibleCrUseOfTaskABCquestion({
            error: Error()
          }), TaskABCquestion) : TaskABCquestion).getRandomTask();
          this.genericTekst.getComponent(Label).string = this.JSONtask.question;
          this.putAnwersInPlace();
          this.solveSoundActivness();
        }

        turnOffGenericTask() {
          var _this$getComponent2;

          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameActive;
          (_this$getComponent2 = this.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$getComponent2 === void 0 ? void 0 : _this$getComponent2.fadeOutActive(); //this.ScriptableFromWrong?.fadeOutActive();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericTekst", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "A", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "B", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "C", [_dec5], {
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
//# sourceMappingURL=GenericUI-ABC.js.map