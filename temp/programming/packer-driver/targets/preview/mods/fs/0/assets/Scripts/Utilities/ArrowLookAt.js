System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Animation, Checkpoint, GameManager, TaskManager, ButtonDisabler, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ArrowLookAt;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCheckpoint(extras) {
    _reporterNs.report("Checkpoint", "../Checkpoint/Checkpoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskManager(extras) {
    _reporterNs.report("TaskManager", "../Tasks/TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonDisabler(extras) {
    _reporterNs.report("ButtonDisabler", "./ButtonDisabler", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Checkpoint = _unresolved_2.Checkpoint;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      TaskManager = _unresolved_4.TaskManager;
    }, function (_unresolved_5) {
      ButtonDisabler = _unresolved_5.ButtonDisabler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3607dRmrqJLM7d1d76n8BmS", "ArrowLookAt", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ArrowLookAt
       * DateTime = Fri Jan 14 2022 13:26:16 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ArrowLookAt.ts
       * FileBasenameNoExtension = ArrowLookAt
       * URL = db://assets/Scripts/Utilities/ArrowLookAt.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ArrowLookAt", ArrowLookAt = (_dec = ccclass('ArrowLookAt'), _dec2 = property(Node), _dec3 = property(Number), _dec(_class = (_class2 = (_temp = class ArrowLookAt extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "arrowDot", _descriptor, this);

          _initializerDefineProperty(this, "arrowHeight", _descriptor2, this);

          _defineProperty(this, "checkPoints", []);

          _defineProperty(this, "sceduled", false);

          _defineProperty(this, "worldScale", 1);

          _defineProperty(this, "helpButon", new Node());
        }

        start() {
          this.checkPoints = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().TaskManager.getComponent(_crd && TaskManager === void 0 ? (_reportPossibleCrUseOfTaskManager({
            error: Error()
          }), TaskManager) : TaskManager).checkpoints;
          this.worldScale = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.scale.z;
          this.helpButon = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Canvas.getChildByName("HelpPanel").getChildByName("HelpNavigation");
        }

        update(deltaTime) {
          if (this.node.scale.x < 1) this.sceduled = false;

          if (this.sceduled == false && Number(this.node.scale.x) == 1) {
            this.scheduleOnce(this.turnOffArrow, 5);
            this.sceduled = true;
          } //console.log("COnsole " + GameManager.getInstance().Progress);
          //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)]);
          //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)].getComponent(Checkpoint));
          //console.log("COnsole " +  this.checkPoints[ Number(GameManager.getInstance().Progress)].getComponent(Checkpoint)!.QuestionItem);


          if (this.node.scale.x > 0) {
            var itemPosition = new Vec3(this.checkPoints[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().Progress)].getComponent(_crd && Checkpoint === void 0 ? (_reportPossibleCrUseOfCheckpoint({
              error: Error()
            }), Checkpoint) : Checkpoint).QuestionItem.worldPosition);
            if (this.arrowDot != undefined) this.node.worldPosition = new Vec3(this.arrowDot.worldPosition.x, Number(this.arrowHeight), this.arrowDot.worldPosition.z);
            this.node.lookAt(itemPosition); //    itemPosition.x * this.worldScale, itemPosition.y * this.worldScale, itemPosition.z * this.worldScale) );
          }
        }

        turnOffArrow() {
          this.helpButon.getComponent(_crd && ButtonDisabler === void 0 ? (_reportPossibleCrUseOfButtonDisabler({
            error: Error()
          }), ButtonDisabler) : ButtonDisabler).lockedByOutside = false;
          this.getComponent(Animation).play("ScaleIn-Reverse");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowDot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrowHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.13;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=ArrowLookAt.js.map