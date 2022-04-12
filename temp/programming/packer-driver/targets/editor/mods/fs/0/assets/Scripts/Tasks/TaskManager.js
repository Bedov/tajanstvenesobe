System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Quat, Animation, Prefab, instantiate, Checkpoint, FollowGoForward, GameManager, TrophiesManagment, ButtonDisabler, Task, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, TaskManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCheckpoint(extras) {
    _reporterNs.report("Checkpoint", "../Checkpoint/Checkpoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowGoForward(extras) {
    _reporterNs.report("FollowGoForward", "../FollowGoForward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrophiesManagment(extras) {
    _reporterNs.report("TrophiesManagment", "../TrophiesManagment", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonDisabler(extras) {
    _reporterNs.report("ButtonDisabler", "../Utilities/ButtonDisabler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Animation = _cc.Animation;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Checkpoint = _unresolved_2.Checkpoint;
    }, function (_unresolved_3) {
      FollowGoForward = _unresolved_3.FollowGoForward;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      TrophiesManagment = _unresolved_5.TrophiesManagment;
    }, function (_unresolved_6) {
      ButtonDisabler = _unresolved_6.ButtonDisabler;
    }, function (_unresolved_7) {
      Task = _unresolved_7.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9606fdFb8VE8JJFItYrtveI", "TaskManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TaskManager
       * DateTime = Thu Nov 18 2021 00:16:36 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = TaskManager.ts
       * FileBasenameNoExtension = TaskManager
       * URL = db://assets/Scripts/TaskManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("TaskManager", TaskManager = (_dec = ccclass('TaskManager'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Node
      }), _dec13 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class TaskManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericUI", _descriptor, this);

          _initializerDefineProperty(this, "genericUIimage", _descriptor2, this);

          _initializerDefineProperty(this, "genericUIABC", _descriptor3, this);

          _initializerDefineProperty(this, "genericUIinput", _descriptor4, this);

          _initializerDefineProperty(this, "canvas", _descriptor5, this);

          _initializerDefineProperty(this, "gameManager", _descriptor6, this);

          _initializerDefineProperty(this, "subtitle", _descriptor7, this);

          _initializerDefineProperty(this, "helpButton", _descriptor8, this);

          _initializerDefineProperty(this, "arrow", _descriptor9, this);

          _initializerDefineProperty(this, "loadingPanel", _descriptor10, this);

          _initializerDefineProperty(this, "follow", _descriptor11, this);

          _initializerDefineProperty(this, "followPrefab", _descriptor12, this);

          _defineProperty(this, "checkpoints", []);
        }

        onLoad() {
          this.checkpoints = this.node.children;
          this.giveOrderNumberToTasks();
        }

        start() {
          this.checkDoneTasks();
        }

        giveOrderNumberToTasks() {
          var tasks = this.getTasks();

          for (let index = 0; index < tasks.length; index++) {
            tasks[index].getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task).orderNumber = index;
          }
        }

        getTasks() {
          var tasks = [];
          this.checkpoints.forEach(checkpoint => {
            checkpoint.children.forEach(element => {
              if (element.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task) != undefined) tasks.push(element);
              element.children.forEach(element2 => {
                if (element.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task) != undefined) tasks.push(element2);
              });
            });
          });
          return tasks;
        }

        refreshCheckpoint(checkpoint) {
          var _getInstance$trophies, _getInstance$trophies2;

          var newProgress = this.checkpoints.indexOf(checkpoint) + 1;
          if (newProgress != undefined) if (newProgress > (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress) (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress = newProgress;
          (_getInstance$trophies = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().trophies) === null || _getInstance$trophies === void 0 ? void 0 : (_getInstance$trophies2 = _getInstance$trophies.getComponent(_crd && TrophiesManagment === void 0 ? (_reportPossibleCrUseOfTrophiesManagment({
            error: Error()
          }), TrophiesManagment) : TrophiesManagment)) === null || _getInstance$trophies2 === void 0 ? void 0 : _getInstance$trophies2.calculateLockedWithEffect();
        }

        checkReadinesForTasks() {
          var children = this.getTasks();
          children.forEach(element => {
            var _element$getComponent;

            if (element.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)) (_element$getComponent = element.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)) === null || _element$getComponent === void 0 ? void 0 : _element$getComponent.checkReadienes();
          });
        }

        checkDoneTasks() {
          var children = this.getTasks();
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress == 0) return;

          for (let index = Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress) - 1; index >= 0; index--) {
            console.log("PETLJA " + index);
            const checkpoint = this.checkpoints[index];
            checkpoint.children.forEach(task => {
              task.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task).executed = true;
            });
          }

          this.checkReadinesForTasks();
          this.checkActivityOfHelpButton();
          /*
          children.forEach(task => {
                if( GameManager.getInstance().Progress > task.getComponent(Task)!.checkPointBelong)
              task.getComponent(Task)!.executed = true;
            }); */
        }

        getDirection() {
          var _getComponent, _getComponent2;

          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Canvas.getChildByName("BottomUI").getChildByName("HelpNavigation").getComponent(_crd && ButtonDisabler === void 0 ? (_reportPossibleCrUseOfButtonDisabler({
            error: Error()
          }), ButtonDisabler) : ButtonDisabler).lockedByOutside = true;
          if (this.arrow != null) (_getComponent = this.arrow.getComponent(Animation)) === null || _getComponent === void 0 ? void 0 : _getComponent.play("ScaleIn");else (_getComponent2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Player.getChildByName("Arrow").getComponent(Animation)) === null || _getComponent2 === void 0 ? void 0 : _getComponent2.play("ScaleIn");
        }

        getDirectionFollow() {
          var itemPosition = new Vec3(this.checkpoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress)].getComponent(_crd && Checkpoint === void 0 ? (_reportPossibleCrUseOfCheckpoint({
            error: Error()
          }), Checkpoint) : Checkpoint).QuestionItem.worldPosition);
          const node1 = instantiate(this.followPrefab);
          node1.getComponent(_crd && FollowGoForward === void 0 ? (_reportPossibleCrUseOfFollowGoForward({
            error: Error()
          }), FollowGoForward) : FollowGoForward).setTarget(this.checkpoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress)].getComponent(_crd && Checkpoint === void 0 ? (_reportPossibleCrUseOfCheckpoint({
            error: Error()
          }), Checkpoint) : Checkpoint).QuestionItem); //let node1: Node= instantiate(this.followPrefab);  //instantiate(this.follow);

          node1.parent = this.node;
          node1.position = new Vec3((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Player.getChildByName("Arrow").worldPosition);
          node1.lookAt(itemPosition);
          var Vec3EulerRot = new Vec3();
          Quat.toEuler(Vec3EulerRot, node1.rotation);
          console.log("Rotation " + Vec3EulerRot.toString());
        }

        readAgain() {
          this.checkpoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress)].children.forEach(taskInCheckpoint => {
            var _this$checkpoints$Num;

            if (((_this$checkpoints$Num = this.checkpoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().Progress)].getComponent(_crd && Checkpoint === void 0 ? (_reportPossibleCrUseOfCheckpoint({
              error: Error()
            }), Checkpoint) : Checkpoint)) === null || _this$checkpoints$Num === void 0 ? void 0 : _this$checkpoints$Num.Question) != taskInCheckpoint) {
              if (taskInCheckpoint.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task).uvodniTask == false) {
                taskInCheckpoint.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task).executed = false; //taskInCheckpoint.getComponent(Task)?.startScheduling();
              }
            }
          });
          this.checkReadinesForTasks();
        }

        checkActivityOfHelpButton() {
          var _this$checkpoints$Num2;

          if (((_this$checkpoints$Num2 = this.checkpoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress)].getComponent(_crd && Checkpoint === void 0 ? (_reportPossibleCrUseOfCheckpoint({
            error: Error()
          }), Checkpoint) : Checkpoint)) === null || _this$checkpoints$Num2 === void 0 ? void 0 : _this$checkpoints$Num2.QuestionItem) != undefined) this.helpButton.active = false;else this.helpButton.active = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "genericUIimage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "genericUIABC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "genericUIinput", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "subtitle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "helpButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadingPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "follow", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "followPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
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
//# sourceMappingURL=TaskManager.js.map