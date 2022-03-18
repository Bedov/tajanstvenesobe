System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, assetManager, AudioClip, SpriteFrame, Texture2D, GameManager, JSONtask2, JSONtask1, JSONobject, JSONquestTekst, JSONimage, _dec, _class, _temp, _crd, ccclass, property, tasksInProgress, JSONloader;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  _export({
    JSONtask2: void 0,
    JSONtask1: void 0,
    JSONobject: void 0,
    JSONquestTekst: void 0,
    JSONimage: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "688cbJkASVLcZYh6gn++ERZ", "JSONloader", undefined);

      ({
        ccclass,
        property
      } = _decorator); //const fs = require('fs');
      //import{  fs} from 'fs-extra';
      //https://docs.cocos.com/creator/3.1/manual/en/asset/dynamic-load-resources.html

      /**
       * Predefined variables
       * Name = JSONloader
       * DateTime = Fri Nov 26 2021 15:46:48 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = JSONloader.ts
       * FileBasenameNoExtension = JSONloader
       * URL = db://assets/Scripts/RemoteScripts/JSONloader.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */
      //var static instance: JSONloader;

      tasksInProgress = 0;

      _export("JSONloader", JSONloader = (_dec = ccclass('JSONloader'), _dec(_class = (_temp = class JSONloader extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "gameManager", void 0);

          _defineProperty(this, "downloadTask", 0);

          _defineProperty(this, "originUrl", "http://abedov.com/json");
        }

        onLoad() {
          this.gameManager = this.node.getComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager); //assetManager.
        }

        fetchQuestions(folderURL, taskJSON, expectedQuestions) {
          var _this$gameManager, _this$gameManager2;

          let remoteUrlRoot = this.originUrl + "/" + ((_this$gameManager = this.gameManager) === null || _this$gameManager === void 0 ? void 0 : _this$gameManager.LanguageName) + "/" + ((_this$gameManager2 = this.gameManager) === null || _this$gameManager2 === void 0 ? void 0 : _this$gameManager2.LevelName) + "/" + folderURL + "/";

          for (let index = 1; index < Number(expectedQuestions) + 1; index++) {
            //console.log("URL: " + remoteUrlRoot + index.toString() + ".txt");
            var questionURL = remoteUrlRoot + index.toString() + ".txt";

            if (!this.returnQuestion(remoteUrlRoot, questionURL, taskJSON, index)) {
              taskJSON.pop();
              index = 13;
            }
          }
        }

        returnQuestionInput(questionURL, taskJSON) {
          var _this$gameManager3, _this$gameManager4, _this$gameManager5, _this$gameManager6;

          let remoteUrlRoot = this.originUrl + "/" + ((_this$gameManager3 = this.gameManager) === null || _this$gameManager3 === void 0 ? void 0 : _this$gameManager3.LanguageName) + "/" + ((_this$gameManager4 = this.gameManager) === null || _this$gameManager4 === void 0 ? void 0 : _this$gameManager4.LevelName) + "/" + questionURL;
          var audioURL = this.originUrl + "/" + ((_this$gameManager5 = this.gameManager) === null || _this$gameManager5 === void 0 ? void 0 : _this$gameManager5.LanguageName) + "/" + ((_this$gameManager6 = this.gameManager) === null || _this$gameManager6 === void 0 ? void 0 : _this$gameManager6.LevelName) + "/";

          try {
            tasksInProgress++;
            assetManager.loadRemote(remoteUrlRoot.toString(), function (err, textAsset) {
              try {
                var parsedJSON = JSON.parse(textAsset.toString());
                taskJSON.question = parsedJSON["question"];
                taskJSON.tacanOdgovor = parsedJSON["tacanOdgovor"];

                if (parsedJSON["questionAudio"] != undefined) {
                  try {
                    tasksInProgress++;
                    assetManager.loadRemote(audioURL + parsedJSON["questionAudio"], AudioClip, (err, audioClip) => {
                      taskJSON.questionAudio = audioClip;
                      tasksInProgress--;
                    });
                  } catch (error) {
                    console.log("Zvuk nije dobro ucitan");
                    taskJSON.audioIsLoaded = false;
                  }
                } else console.log("Ne postoje zvukovi za ovu putanju");

                tasksInProgress--;
              } catch (error) {
                console.log("Nisam nasao trazeno polje za parsiranje" + error);
                return false;
              }

              console.log(" BITNOOO  " + taskJSON.questionAudio);
            });
            return true;
          } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error);
            return false;
          }
        }

        returnQuestion(remoteUrlRoot, questionURL, taskJSON, index) {
          var _this$gameManager7, _this$gameManager8;

          let remoteUrl = this.originUrl + "/" + ((_this$gameManager7 = this.gameManager) === null || _this$gameManager7 === void 0 ? void 0 : _this$gameManager7.LevelName) + "/" + ((_this$gameManager8 = this.gameManager) === null || _this$gameManager8 === void 0 ? void 0 : _this$gameManager8.LanguageName) + "/" + questionURL + ".txt";

          try {
            assetManager.loadRemote(questionURL, function (err, textAsset) {
              try {
                tasksInProgress++;
                var tempTask = new JSONtask1();
                var parsedJSON = JSON.parse(textAsset.toString());
                tempTask.question = parsedJSON["question"];
                tempTask.tacanOdgovor = parsedJSON["tacanOdgovor"];
                tempTask.netacanOdgovor1 = parsedJSON["netacanOdgovor1"];
                tempTask.netacanOdgovor2 = parsedJSON["netacanOdgovor2"];

                if (parsedJSON["questionAudio"] != undefined) {
                  try {
                    tasksInProgress++;
                    assetManager.loadRemote(remoteUrlRoot + parsedJSON["questionAudio"], AudioClip, (err, audioClip) => {
                      tempTask.questionAudio = audioClip;
                      tasksInProgress--;
                    });
                  } catch (error) {
                    console.log("Zvuk nije dobro ucitan");
                    tempTask.audioIsLoaded = false;
                  }
                } else console.log("Ne postoje zvukovi za ovu putanju");

                if (tempTask.question != undefined) taskJSON.push(tempTask);
                tasksInProgress--;
              } catch (error) {
                console.log("Nisam nasao trazeno polje za parsiranje" + error);
                return false;
              }
            });
            return true;
          } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error);
            return false;
          }
        }

        update() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).instance.taskInProgressManager = Number(tasksInProgress);
        }

        fetchQuestTekst(questURL, tekstObject) {
          var _this$gameManager9, _this$gameManager10, _this$gameManager11, _this$gameManager12;

          let remoteUrlRoot = this.originUrl + "/" + ((_this$gameManager9 = this.gameManager) === null || _this$gameManager9 === void 0 ? void 0 : _this$gameManager9.LanguageName) + "/" + ((_this$gameManager10 = this.gameManager) === null || _this$gameManager10 === void 0 ? void 0 : _this$gameManager10.LevelName) + "/" + questURL;
          var audioURL = this.originUrl + "/" + ((_this$gameManager11 = this.gameManager) === null || _this$gameManager11 === void 0 ? void 0 : _this$gameManager11.LanguageName) + "/" + ((_this$gameManager12 = this.gameManager) === null || _this$gameManager12 === void 0 ? void 0 : _this$gameManager12.LevelName) + "/"; //let questURLfull = remoteUrlRoot 

          try {
            tasksInProgress++;
            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {
              try {
                var parsedJSON = JSON.parse(textAsset.toString());
                tekstObject.quest = parsedJSON["quest"];

                if (parsedJSON["questAudio"] != undefined) {
                  try {
                    tasksInProgress++;
                    assetManager.loadRemote(audioURL + parsedJSON["questAudio"], AudioClip, (err, audioClip) => {
                      tekstObject.questAudio = audioClip;
                      tasksInProgress--;
                    });
                  } catch (error) {
                    console.log("Zvuk nije dobro ucitan");
                    tekstObject.audioIsLoaded = false;
                  }
                } else console.log("Ne postoje zvukovi za ovu putanju");

                tasksInProgress--;
              } catch (error) {
                console.log("Nisam nasao trazeno polje za parsiranje" + error);
                return false;
              }
            });
            return true;
          } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error);
            return false;
          }
        }

        fetchImageQuestTekst(questURL, imageObject) {
          var _this$gameManager13, _this$gameManager14, _this$gameManager15, _this$gameManager16;

          let remoteUrlRoot = this.originUrl + "/" + ((_this$gameManager13 = this.gameManager) === null || _this$gameManager13 === void 0 ? void 0 : _this$gameManager13.LanguageName) + "/" + ((_this$gameManager14 = this.gameManager) === null || _this$gameManager14 === void 0 ? void 0 : _this$gameManager14.LevelName) + "/" + questURL;
          var rootURL = this.originUrl + "/" + ((_this$gameManager15 = this.gameManager) === null || _this$gameManager15 === void 0 ? void 0 : _this$gameManager15.LanguageName) + "/" + ((_this$gameManager16 = this.gameManager) === null || _this$gameManager16 === void 0 ? void 0 : _this$gameManager16.LevelName) + "/"; //let questURLfull = remoteUrlRoot 

          try {
            tasksInProgress++;
            assetManager.loadRemote(remoteUrlRoot, function (err, textAsset) {
              try {
                var parsedJSON = JSON.parse(textAsset.toString());
                imageObject.quest = parsedJSON["quest"];

                if (parsedJSON["questAudio"] != undefined) {
                  try {
                    tasksInProgress++;
                    assetManager.loadRemote(rootURL + parsedJSON["questAudio"], AudioClip, (err, audioClip) => {
                      imageObject.questAudio = audioClip;
                      tasksInProgress--;
                    });
                  } catch (error) {
                    console.log("Zvuk nije dobro ucitan");
                    imageObject.audioIsLoaded = false;
                  }
                } else console.log("Ne postoje zvukovi za ovu putanju");

                if (parsedJSON["questImage"] != undefined) {
                  try {
                    assetManager.loadRemote(rootURL + parsedJSON["questImage"], (err, fetchedImage) => {
                      console.log("Sta skidam " + rootURL + parsedJSON["questImage"]);
                      const spriteFrame = new SpriteFrame();
                      const texture = new Texture2D();
                      texture.image = fetchedImage;
                      spriteFrame.texture = texture;
                      imageObject.questImage = spriteFrame;
                    });
                  } catch (error) {
                    console.log("Slika nije dobro ucitana");
                    imageObject.audioIsLoaded = false;
                  }
                } else console.log("Ne postoji slika za ovu putanju");

                tasksInProgress--;
              } catch (error) {
                console.log("Nisam nasao trazeno polje za parsiranje" + error);
                return false;
              }
            });
            return true;
          } catch (error) {
            console.log("Nisam nasao trazenu adresu za parsiranje 2" + error);
            return false;
          }
        }

      }, _temp)) || _class));

      _export("JSONtask2", JSONtask2 = class JSONtask2 {
        constructor() {
          _defineProperty(this, "type", void 0);

          _defineProperty(this, "question", void 0);

          _defineProperty(this, "questionAudio", void 0);

          _defineProperty(this, "tacanOdgovor", void 0);

          _defineProperty(this, "tacanOdgovorAudio", void 0);

          _defineProperty(this, "audioIsLoaded", void 0);

          this.type = "";
          this.question = "";
          this.questionAudio = undefined;
          this.tacanOdgovor = "";
          this.tacanOdgovorAudio = undefined;
          this.audioIsLoaded = true;
        }

      });

      _export("JSONtask1", JSONtask1 = class JSONtask1 {
        constructor() {
          _defineProperty(this, "type", void 0);

          _defineProperty(this, "question", void 0);

          _defineProperty(this, "questionAudio", void 0);

          _defineProperty(this, "tacanOdgovor", void 0);

          _defineProperty(this, "tacanOdgovorAudio", void 0);

          _defineProperty(this, "netacanOdgovor1", void 0);

          _defineProperty(this, "netacanOdgovor1Audio", void 0);

          _defineProperty(this, "netacanOdgovor2", void 0);

          _defineProperty(this, "netacanOdgovor2Audio", void 0);

          _defineProperty(this, "audioIsLoaded", void 0);

          this.type = "";
          this.question = "";
          this.questionAudio = undefined;
          this.tacanOdgovor = "";
          this.tacanOdgovorAudio = undefined;
          this.netacanOdgovor1 = "";
          this.netacanOdgovor1 = undefined;
          this.netacanOdgovor2 = "";
          this.netacanOdgovor2 = undefined;
          this.audioIsLoaded = true;
        }

      });

      _export("JSONobject", JSONobject = class JSONobject {
        constructor() {
          _defineProperty(this, "quest", void 0);

          _defineProperty(this, "questImage", void 0);

          _defineProperty(this, "questAudio", void 0);

          _defineProperty(this, "audioIsLoaded", void 0);

          this.quest = undefined;
          this.questImage = undefined;
          this.questAudio = undefined;
          this.audioIsLoaded = true;
        }

      });

      _export("JSONquestTekst", JSONquestTekst = class JSONquestTekst extends JSONobject {
        constructor() {
          super();

          _defineProperty(this, "quest", void 0);

          this.quest = "";
        }

      });

      _export("JSONimage", JSONimage = class JSONimage extends JSONobject {
        constructor() {
          super();

          _defineProperty(this, "quest", void 0);

          _defineProperty(this, "questImage", void 0);

          this.quest = "";
          this.questImage = undefined;
        }

      });
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
//# sourceMappingURL=JSONloader.js.map