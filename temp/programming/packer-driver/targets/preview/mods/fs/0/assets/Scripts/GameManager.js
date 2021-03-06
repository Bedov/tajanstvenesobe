System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, sys, find, DetectTypeOfDevice, DetectTypeOfDeviceElevator, elevator, GlobalManager, JSONloader, LoadingHandler, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp, _crd, ccclass, property, GameStatuType, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDetectTypeOfDevice(extras) {
    _reporterNs.report("DetectTypeOfDevice", "./DetectTypeOfDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDetectTypeOfDeviceElevator(extras) {
    _reporterNs.report("DetectTypeOfDeviceElevator", "./DetectTypeOfDeviceElevator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfelevator(extras) {
    _reporterNs.report("elevator", "./GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "./GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSONloader(extras) {
    _reporterNs.report("JSONloader", "./RemoteScripts/JSONloader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingHandler(extras) {
    _reporterNs.report("LoadingHandler", "./RemoteScripts/LoadingHandler", _context.meta, extras);
  }

  _export("GameStatuType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      Label = _cc.Label;
      sys = _cc.sys;
      find = _cc.find;
    }, function (_unresolved_2) {
      DetectTypeOfDevice = _unresolved_2.DetectTypeOfDevice;
    }, function (_unresolved_3) {
      DetectTypeOfDeviceElevator = _unresolved_3.DetectTypeOfDeviceElevator;
    }, function (_unresolved_4) {
      elevator = _unresolved_4.elevator;
      GlobalManager = _unresolved_4.GlobalManager;
    }, function (_unresolved_5) {
      JSONloader = _unresolved_5.JSONloader;
    }, function (_unresolved_6) {
      LoadingHandler = _unresolved_6.LoadingHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69fcft23j9BQb5GQtrenmFo", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = GameManager
       * DateTime = Tue Nov 30 2021 13:26:28 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = GameManager.ts
       * FileBasenameNoExtension = GameManager
       * URL = db://assets/Scripts/GameManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
      
       */

      (function (GameStatuType) {
        GameStatuType[GameStatuType["gamePaused"] = 0] = "gamePaused";
        GameStatuType[GameStatuType["gameActive"] = 1] = "gameActive";
        GameStatuType[GameStatuType["gameTutorial"] = 2] = "gameTutorial";
      })(GameStatuType || _export("GameStatuType", GameStatuType = {}));

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Boolean), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(String), _dec8 = property(String), _dec(_class = (_class2 = (_temp = _class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "gameStatus", GameStatuType.gameTutorial);

          _defineProperty(this, "typeInputResult", void 0);

          _defineProperty(this, "jsonLoader", void 0);

          _defineProperty(this, "loadingHandler", void 0);

          _initializerDefineProperty(this, "elevatorScript", _descriptor, this);

          _defineProperty(this, "inputKeyboard", void 0);

          _defineProperty(this, "settingsUI", void 0);

          _initializerDefineProperty(this, "Canvas", _descriptor2, this);

          _initializerDefineProperty(this, "WorldRoot", _descriptor3, this);

          _initializerDefineProperty(this, "TaskManager", _descriptor4, this);

          _initializerDefineProperty(this, "Player", _descriptor5, this);

          _initializerDefineProperty(this, "LevelName", _descriptor6, this);

          _initializerDefineProperty(this, "LanguageName", _descriptor7, this);

          _defineProperty(this, "moveSpeed", 1.5);

          _defineProperty(this, "invertedRotation", false);

          _defineProperty(this, "isMobileOrTablet", false);

          _defineProperty(this, "taskInProgressManager", 1);

          _defineProperty(this, "downloadedCheckpoint", 0);

          _defineProperty(this, "audioArray", []);

          _defineProperty(this, "trophies", void 0);

          _defineProperty(this, "startProgress", 0);

          _defineProperty(this, "detectType", void 0);

          _defineProperty(this, "debugMode", false);
        }

        static getInstance() {
          if (!this.instance) {
            GameManager.instance = new GameManager();
          }

          return GameManager.instance;
        }

        setProgress(tempProgress) {
          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.levelProgress = tempProgress;
        }

        getProgress() {
          return (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.levelProgress;
        }

        onLoad() {
          var _this$Canvas, _this$Canvas$getChild, _this$Canvas$getChild2;

          GameManager.instance = this;

          if (this.elevatorScript) {
            this.startProgress = Number((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().activeLevelData.levelProgress);
            this.detectType = find("Canvas").getComponent(_crd && DetectTypeOfDeviceElevator === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDeviceElevator({
              error: Error()
            }), DetectTypeOfDeviceElevator) : DetectTypeOfDeviceElevator); //assetManager.cacheManager!.autoClear = true;
            //assetManager.cacheManager!.clearCache();
            //assetManager.releaseUnusedAssets();
            //sys.garbageCollect();
          } // this.Player!.getComponent(FirstPersonCameraMovementElevator)!;
          else {
              this.detectType = find("Canvas").getComponent(_crd && DetectTypeOfDevice === void 0 ? (_reportPossibleCrUseOfDetectTypeOfDevice({
                error: Error()
              }), DetectTypeOfDevice) : DetectTypeOfDevice);
            }

          this.jsonLoader = this.node.getComponent(_crd && JSONloader === void 0 ? (_reportPossibleCrUseOfJSONloader({
            error: Error()
          }), JSONloader) : JSONloader);
          this.loadingHandler = this.node.getComponent(_crd && LoadingHandler === void 0 ? (_reportPossibleCrUseOfLoadingHandler({
            error: Error()
          }), LoadingHandler) : LoadingHandler);
          this.typeInputResult = ((_this$Canvas = this.Canvas) === null || _this$Canvas === void 0 ? void 0 : (_this$Canvas$getChild = _this$Canvas.getChildByName("GenericUI-Input")) === null || _this$Canvas$getChild === void 0 ? void 0 : (_this$Canvas$getChild2 = _this$Canvas$getChild.getChildByName("EditBoxPC")) === null || _this$Canvas$getChild2 === void 0 ? void 0 : _this$Canvas$getChild2.getChildByName("Result")).getComponent(Label);
          this.trophies = this.Canvas.getChildByName("BottomUI").getChildByName("TrofejiLayout");
          console.log("GameManager onLoad aktivan level: " + (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.sceneName);
          this.setPlatformType();
        }

        setTheKeyboard() {
          if (this.isMobileOrTablet) {
            this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBox").active = true;
            this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBoxPC").active = false;
            this.typeInputResult = this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBox").getChildByName("Result").getComponent(Label);
          } else {
            this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBox").active = false;
            this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBoxPC").active = true;
            this.typeInputResult = this.Canvas.getChildByName("GenericUI-Input").getChildByName("EditBoxPC").getChildByName("Result").getComponent(Label);
          }
        }

        getTaskManager() {
          return this.TaskManager;
        }

        pushMeToAudioArray(audioComponent) {
          var _this$audioArray;

          (_this$audioArray = this.audioArray) === null || _this$audioArray === void 0 ? void 0 : _this$audioArray.push(audioComponent);
        }

        setVolume(volume) {
          var _this$audioArray2, _this$audioArray3, _this$audioArray4;

          console.log("Lenght " + ((_this$audioArray2 = this.audioArray) === null || _this$audioArray2 === void 0 ? void 0 : _this$audioArray2.length));
          (_this$audioArray3 = this.audioArray) === null || _this$audioArray3 === void 0 ? void 0 : _this$audioArray3.forEach(element => {
            console.log("element " + element.name + "  VOLUME: " + element.volume);
          });
          (_this$audioArray4 = this.audioArray) === null || _this$audioArray4 === void 0 ? void 0 : _this$audioArray4.forEach(element => {
            element.volume = volume;
            console.log("Volumen " + element.volume);
          });
        }

        setPlatformType() {
          this.inputKeyboard = this.Canvas.getChildByName("BottomUI").getChildByName("Keyboard");
          this.settingsUI = this.Canvas.getChildByName("Settings");
          if (sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS || sys.platform == sys.Platform.MOBILE_BROWSER) this.isMobileOrTablet = true;
          this.setTheKeyboard();
        }

        backToMenu() {
          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData = _crd && elevator === void 0 ? (_reportPossibleCrUseOfelevator({
            error: Error()
          }), elevator) : elevator; //  this.findSceneDataByName("MainMenuLift1");

          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.levelProgress = 2;
          if (this.debugMode == true) director.loadScene("MainMenu");else {
            (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().activeLevelData = _crd && elevator === void 0 ? (_reportPossibleCrUseOfelevator({
              error: Error()
            }), elevator) : elevator;
            director.loadScene("MainMenuLift1");
          }
        }

      }, _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "elevatorScript", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "WorldRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "TaskManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "LevelName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "LanguageName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameManager.js.map