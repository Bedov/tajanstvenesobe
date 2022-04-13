System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GeneralInformations, _decorator, Component, Node, assetManager, Label, EditBoxComponent, Animation, sys, GameStatuType, OpenLevelByName, levelObject, globalProgress, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _temp, _crd, downloading, settingData, ccclass, property, globalInformations, kinderGardenData, birthdayPartyData, playfulCityData, springFestData, medivalVillageData, christmasVillage, easterVillageData, happyStreetData, undergroundChamberData, invisablePeopleCity, GlobalManager, levelStatus;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenLevelByName(extras) {
    _reporterNs.report("OpenLevelByName", "./Utilities/OpenLevelByName", _context.meta, extras);
  }

  _export({
    GeneralInformations: void 0,
    levelObject: void 0,
    globalProgress: void 0,
    levelStatus: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      Label = _cc.Label;
      EditBoxComponent = _cc.EditBoxComponent;
      Animation = _cc.Animation;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      OpenLevelByName = _unresolved_3.OpenLevelByName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b73808StSRJNbd0es5AR9IN", "GlobalManager", undefined);

      _export("GeneralInformations", GeneralInformations = class GeneralInformations {
        constructor() {
          _defineProperty(this, "globalProgress", 0);

          _defineProperty(this, "springFest", void 0);

          _defineProperty(this, "playfullCity", void 0);

          _defineProperty(this, "easterVillage", void 0);

          _defineProperty(this, "birthdayParty", void 0);

          _defineProperty(this, "christmasVillage", void 0);

          _defineProperty(this, "medievalTown", void 0);

          _defineProperty(this, "happyStreet", void 0);

          _defineProperty(this, "backToKindergarden", void 0);

          _defineProperty(this, "undergroundChamber", void 0);

          _defineProperty(this, "invisablePeopleCity", void 0);

          _defineProperty(this, "tutorialInstroction", void 0);

          _defineProperty(this, "goButton", void 0);

          _defineProperty(this, "exitButton", void 0);

          _defineProperty(this, "inverseSettingsText", void 0);

          _defineProperty(this, "choseSpeedSettingsText", void 0);

          this.springFest = "! Spring Fest";
          this.playfullCity = "! Playful City";
          this.easterVillage = "! Easter Village";
          this.birthdayParty = "! Birthday Party";
          this.christmasVillage = "! Christmas Village";
          this.medievalTown = "! Medieval Town";
          this.happyStreet = "! Happy Street";
          this.backToKindergarden = "! Back To Kindergarden";
          this.undergroundChamber = "! Underground Chamber";
          this.invisablePeopleCity = "! City of the invisable people";
          this.tutorialInstroction = "! Try to controll the player, so you can get your first task!";
          this.goButton = "! GO";
          this.exitButton = "! EXIT";
          this.inverseSettingsText = "! Inverse the look controls";
          this.choseSpeedSettingsText = "! Choose the speed of the player";
        }

      });

      downloading = false;
      settingData = false;
      ({
        ccclass,
        property
      } = _decorator);

      _export("levelObject", levelObject = class levelObject {
        constructor() {
          _defineProperty(this, "sceneName", void 0);

          _defineProperty(this, "ID", void 0);

          _defineProperty(this, "status", void 0);

          _defineProperty(this, "levelProgress", void 0);

          this.sceneName = "";
          this.ID = 0;
          this.status = 0;
          this.levelProgress = 0;
        }

        setData(level) {
          this.sceneName = level.sceneName;
          this.ID = level.ID;
          this.status = level.status;
          this.levelProgress = level.levelProgress;
        }

      });

      _export("globalInformations", globalInformations = new GeneralInformations()); //Prvi Razred


      _export("kinderGardenData", kinderGardenData = new levelObject());

      kinderGardenData.sceneName = "KinderGarden";

      _export("birthdayPartyData", birthdayPartyData = new levelObject());

      birthdayPartyData.sceneName = "BirthdayParty";

      _export("playfulCityData", playfulCityData = new levelObject());

      playfulCityData.sceneName = "RaziganiGrad";

      _export("springFestData", springFestData = new levelObject());

      springFestData.sceneName = "ProlecniKarneval";

      _export("medivalVillageData", medivalVillageData = new levelObject());

      medivalVillageData.sceneName = "MedivalVillage"; //Drugi Razred

      _export("christmasVillage", christmasVillage = new levelObject());

      _export("easterVillageData", easterVillageData = new levelObject());

      _export("happyStreetData", happyStreetData = new levelObject());

      _export("undergroundChamberData", undergroundChamberData = new levelObject());

      _export("invisablePeopleCity", invisablePeopleCity = new levelObject());

      _export("GlobalManager", GlobalManager = (_dec = ccclass('GlobalManager'), _dec2 = property(Number), _dec3 = property(Node), _dec4 = property(String), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(EditBoxComponent), _dec(_class = (_class2 = (_temp = _class3 = class GlobalManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isMobileOrTablet", false);

          _defineProperty(this, "moveSpeed", 1.5);

          _defineProperty(this, "invertedRotation", false);

          _defineProperty(this, "gameStatus", (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gameTutorial);

          _initializerDefineProperty(this, "projectNumber", _descriptor, this);

          _defineProperty(this, "levelsArray", []);

          _initializerDefineProperty(this, "canvas", _descriptor2, this);

          _initializerDefineProperty(this, "LanguageName", _descriptor3, this);

          _initializerDefineProperty(this, "springFest", _descriptor4, this);

          _initializerDefineProperty(this, "playfullCity", _descriptor5, this);

          _initializerDefineProperty(this, "easterVillage", _descriptor6, this);

          _initializerDefineProperty(this, "birthdayParty", _descriptor7, this);

          _initializerDefineProperty(this, "christmasVillage", _descriptor8, this);

          _initializerDefineProperty(this, "medievalTown", _descriptor9, this);

          _initializerDefineProperty(this, "happyStreet", _descriptor10, this);

          _initializerDefineProperty(this, "backToKindergarden", _descriptor11, this);

          _initializerDefineProperty(this, "undergroundChamber", _descriptor12, this);

          _initializerDefineProperty(this, "invisablePeopleCity", _descriptor13, this);

          _initializerDefineProperty(this, "Player", _descriptor14, this);

          _defineProperty(this, "openLevelByName", void 0);

          _initializerDefineProperty(this, "LanguageBox", _descriptor15, this);

          _defineProperty(this, "originUrl", "https://abedov.com/json");
        }

        static getGlobal() {
          return globalInformations;
        }

        static getInstance() {
          if (!this.instance) {
            GlobalManager.instance = new GlobalManager();
          }

          return GlobalManager.instance;
        }

        setWorldArray() {
          switch (this.projectNumber) {
            case 1:
              this.levelsArray.push(kinderGardenData);
              this.levelsArray.push(birthdayPartyData);
              this.levelsArray.push(playfulCityData);
              this.levelsArray.push(springFestData);
              this.levelsArray.push(medivalVillageData);
              break;

            case 2:
              this.levelsArray.push(christmasVillage);
              this.levelsArray.push(easterVillageData);
              this.levelsArray.push(happyStreetData);
              this.levelsArray.push(undergroundChamberData);
              this.levelsArray.push(invisablePeopleCity);
              break;

            default:
              break;
          }
        }

        onLoad() {
          GlobalManager.instance = this;
          this.setWorldArray();
          this.openLevelByName = this.canvas.getComponent(_crd && OpenLevelByName === void 0 ? (_reportPossibleCrUseOfOpenLevelByName({
            error: Error()
          }), OpenLevelByName) : OpenLevelByName);
          this.setPlatformType();
        }

        addProgressTest() {
          globalInformations.globalProgress++;
          this.refreshLevelButtons();
        }

        refreshLevelButtons() {}

        setPlatformType() {
          if (sys.os == sys.OS.ANDROID || sys.os == sys.OS.IOS || sys.platform == sys.Platform.MOBILE_BROWSER) this.isMobileOrTablet = true;
        }

        languageChanged() {}

        changeLanguage() {
          var _this$LanguageBox, _this$LanguageBox2, _this$LanguageBox3, _this$LanguageBox5;

          this.LanguageName = (_this$LanguageBox = this.LanguageBox) === null || _this$LanguageBox === void 0 ? void 0 : _this$LanguageBox.string;

          if (((_this$LanguageBox2 = this.LanguageBox) === null || _this$LanguageBox2 === void 0 ? void 0 : _this$LanguageBox2.string) == "SRB" || ((_this$LanguageBox3 = this.LanguageBox) === null || _this$LanguageBox3 === void 0 ? void 0 : _this$LanguageBox3.string) == "ENG") {
            var _this$LanguageBox4;

            this.fetchGeneralDictionary();
            ((_this$LanguageBox4 = this.LanguageBox) === null || _this$LanguageBox4 === void 0 ? void 0 : _this$LanguageBox4.node.getComponent(Animation)).play("Approved");
          } else ((_this$LanguageBox5 = this.LanguageBox) === null || _this$LanguageBox5 === void 0 ? void 0 : _this$LanguageBox5.node.getComponent(Animation)).play("WrongNudge");
        }

        fetchGeneralDictionary() {
          let remoteUrlRoot = this.originUrl + "/" + this.LanguageName + "/" + "generalinfo.txt";
          downloading = true;
          settingData = true;

          try {
            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {
              try {
                var parsedJSON = JSON.parse(textAsset.toString());
                globalInformations.backToKindergarden = parsedJSON["backToKindergarden"].toString();
                globalInformations.birthdayParty = parsedJSON["birthdayParty"].toString();
                globalInformations.choseSpeedSettingsText = parsedJSON["choseSpeedSettingsText"].toString();
                globalInformations.christmasVillage = parsedJSON["christmasVillage"].toString();
                globalInformations.easterVillage = parsedJSON["easterVillage"].toString();
                globalInformations.exitButton = parsedJSON["exitButton"].toString();
                globalInformations.goButton = parsedJSON["goButton"].toString();
                globalInformations.happyStreet = parsedJSON["happyStreet"].toString();
                globalInformations.inverseSettingsText = parsedJSON["inverseSettingsText"].toString();
                globalInformations.invisablePeopleCity = parsedJSON["invisablePeopleCity"].toString();
                globalInformations.medievalTown = parsedJSON["medievalTown"].toString();
                globalInformations.playfullCity = parsedJSON["playfullCity"].toString();
                globalInformations.springFest = parsedJSON["springFest"].toString();
                globalInformations.tutorialInstroction = parsedJSON["tutorialInstroction"].toString();
                globalInformations.undergroundChamber = parsedJSON["undergroundChamber"].toString();
              } catch (error) {
                console.log("Nisam nasao trazeno polje za parsiranje");
                return false;
              }

              downloading = false;
            });
            return true;
          } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2");
            return false;
          }
        }

        update() {
          if (settingData == true) if (downloading == false) {
            this.setWorldsNames();
            settingData = false;
          }
        }

        setWorldsNames() {
          this.springFest.string = globalInformations.springFest;
          this.playfullCity.string = globalInformations.playfullCity;
          this.easterVillage.string = globalInformations.easterVillage;
          this.birthdayParty.string = globalInformations.birthdayParty;
          this.christmasVillage.string = globalInformations.christmasVillage;
          this.medievalTown.string = globalInformations.medievalTown;
          this.happyStreet.string = globalInformations.happyStreet;
          this.backToKindergarden.string = globalInformations.backToKindergarden;
          this.undergroundChamber.string = globalInformations.undergroundChamber;
          this.invisablePeopleCity.string = globalInformations.invisablePeopleCity;
        }

      }, _defineProperty(_class3, "instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "projectNumber", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "LanguageName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "springFest", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playfullCity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "easterVillage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "birthdayParty", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "christmasVillage", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "medievalTown", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "happyStreet", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "backToKindergarden", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "undergroundChamber", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "invisablePeopleCity", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "LanguageBox", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      (function (levelStatus) {
        levelStatus[levelStatus["locked"] = 0] = "locked";
        levelStatus[levelStatus["unlocked"] = 1] = "unlocked";
        levelStatus[levelStatus["finished"] = 2] = "finished";
      })(levelStatus || _export("levelStatus", levelStatus = {}));

      _export("globalProgress", globalProgress = class globalProgress {
        constructor() {
          _defineProperty(this, "KinderGardenLevel", new levelObject());
        }

      });
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GlobalManager.js.map