System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, GlobalManager, levelObject, ScriptEffects, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, labelTemp, OpenLevelByName;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevelObject(extras) {
    _reporterNs.report("levelObject", "../GlobalManager", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GlobalManager = _unresolved_2.GlobalManager;
      levelObject = _unresolved_2.levelObject;
    }, function (_unresolved_3) {
      ScriptEffects = _unresolved_3.ScriptEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff492Jb5VJF54WfhLbZ2yTn", "OpenLevelByName", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      /**
       * Predefined variables
       * Name = OpenLevelByName
       * DateTime = Sun Dec 19 2021 13:54:02 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = OpenLevelByName.ts
       * FileBasenameNoExtension = OpenLevelByName
       * URL = db://assets/Scripts/Utilities/OpenLevelByName.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */
      _export("OpenLevelByName", OpenLevelByName = (_dec = ccclass('OpenLevelByName'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class OpenLevelByName extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loadingPanel", _descriptor, this);

          _initializerDefineProperty(this, "loadingPercentLable", _descriptor2, this);
        }

        start() {
          labelTemp = this.loadingPercentLable;
        }

        findSceneDataByName(sceneName) {
          var levelsArray = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().levelsArray;
          var returnLevel = new (_crd && levelObject === void 0 ? (_reportPossibleCrUseOflevelObject({
            error: Error()
          }), levelObject) : levelObject)();
          levelsArray.forEach(element => {
            if (element.sceneName == sceneName) returnLevel = element;
          });
          return returnLevel;
        }

        loadAndPlaySceneByName(event, customEventData) {
          var _this$loadingPanel$ge;

          (_this$loadingPanel$ge = this.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$loadingPanel$ge === void 0 ? void 0 : _this$loadingPanel$ge.fadeInActive();
          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData = this.findSceneDataByName(customEventData);
          director.preloadScene(customEventData, function (completedCount, totalCount, item) {
            if (labelTemp) {
              var percent = 0;

              if (totalCount > 0) {
                percent = 100 * completedCount / totalCount;
              }

              labelTemp.string = Math.round(percent) + '%';
            }
          }, function () {
            director.loadScene(customEventData);
          }); // director.loadScene(sceneName);
        }

        loadAndPlaySceneByNameD(customEventData) {
          var _this$loadingPanel$ge2;

          (_this$loadingPanel$ge2 = this.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _this$loadingPanel$ge2 === void 0 ? void 0 : _this$loadingPanel$ge2.fadeInActive();
          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData = this.findSceneDataByName(customEventData);
          console.log("ActiveLevel " + (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.sceneName);
          director.preloadScene(customEventData, function (completedCount, totalCount, item) {
            if (labelTemp) {
              var percent = 0;

              if (totalCount > 0) {
                percent = 100 * completedCount / totalCount;
              }

              labelTemp.string = Math.round(percent) + '%';
            }
          }, function () {
            director.loadScene(customEventData);
          }); // director.loadScene(sceneName);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingPercentLable", [_dec3], {
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
//# sourceMappingURL=OpenLevelByName.js.map