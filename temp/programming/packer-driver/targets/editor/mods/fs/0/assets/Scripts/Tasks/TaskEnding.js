System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, director, macro, Task, elevator, GlobalManager, levelObject, levelStatus, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TaskEnding;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfelevator(extras) {
    _reporterNs.report("elevator", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevelObject(extras) {
    _reporterNs.report("levelObject", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevelStatus(extras) {
    _reporterNs.report("levelStatus", "../GlobalManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      Task = _unresolved_2.Task;
    }, function (_unresolved_3) {
      elevator = _unresolved_3.elevator;
      GlobalManager = _unresolved_3.GlobalManager;
      levelObject = _unresolved_3.levelObject;
      levelStatus = _unresolved_3.levelStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c696ZJ5oVMb5OaK9/2m3t8", "TaskEnding", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskEnding", TaskEnding = (_dec = ccclass('TaskEnding'), _dec2 = property(Boolean), _dec(_class = (_class2 = (_temp = class TaskEnding extends (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
        error: Error()
      }), Task) : Task) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "myTimeHasCome", true);

          _initializerDefineProperty(this, "debugEnding", _descriptor, this);
        }

        start() {
          this.schedule(this.checkExecution, 0.1, macro.REPEAT_FOREVER); //this.scheduleOnce(this.fetchTheData, this.orderNumber * 0.05);
        }

        update() {}

        checkExecution() {
          if (this.isItOkToExecute()) {
            this.showTask();
            this.unschedule(this.checkExecution);
          }
        }

        showTask() {
          (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.setLevelProgress(0);

          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.status == (_crd && levelStatus === void 0 ? (_reportPossibleCrUseOflevelStatus({
            error: Error()
          }), levelStatus) : levelStatus).unlocked) {
            (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().activeLevelData.status = (_crd && levelStatus === void 0 ? (_reportPossibleCrUseOflevelStatus({
              error: Error()
            }), levelStatus) : levelStatus).finished;
            var indexOfCurrentScene = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().levelsArray.indexOf((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().activeLevelData);
            console.log("Task ending active level: " + (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().activeLevelData.sceneName);
            console.log("indexOfCurrentScene " + indexOfCurrentScene);
            console.log("GlobalManager.getInstance().levelsArray.length: " + (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().levelsArray.length);

            if (indexOfCurrentScene < (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().levelsArray.length - 1) {
              (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                error: Error()
              }), GlobalManager) : GlobalManager).getInstance().levelsArray[indexOfCurrentScene + 1].status = (_crd && levelStatus === void 0 ? (_reportPossibleCrUseOflevelStatus({
                error: Error()
              }), levelStatus) : levelStatus).unlocked;
              (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                error: Error()
              }), GlobalManager) : GlobalManager).getInstance().activeLevelData = _crd && elevator === void 0 ? (_reportPossibleCrUseOfelevator({
                error: Error()
              }), elevator) : elevator; //  

              (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                error: Error()
              }), GlobalManager) : GlobalManager).getInstance().activeLevelData.setLevelProgress(1);
            } else {
              (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                error: Error()
              }), GlobalManager) : GlobalManager).getInstance().activeLevelData = _crd && elevator === void 0 ? (_reportPossibleCrUseOfelevator({
                error: Error()
              }), elevator) : elevator; //  

              (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                error: Error()
              }), GlobalManager) : GlobalManager).getInstance().activeLevelData.setLevelProgress(3);
            }
          }

          director.loadScene("MainMenuLift1");
          this.executed = true;
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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debugEnding", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
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
//# sourceMappingURL=TaskEnding.js.map