System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, Vec3, Animation, ParticleSystem2D, GameManager, TaskManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TrophiesManagment;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskManager(extras) {
    _reporterNs.report("TaskManager", "./Tasks/TaskManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      ParticleSystem2D = _cc.ParticleSystem2D;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      TaskManager = _unresolved_3.TaskManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cdd7h8Pm9OHoswZvpIMNss", "TrophiesManagment", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TrophiesManagment", TrophiesManagment = (_dec = ccclass('TrophiesManagment'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class TrophiesManagment extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "particleEffect", _descriptor, this);
        }

        start() {
          var _getInstance$TaskMana, _getInstance$TaskMana2;

          var trophyNode = this.node.children[0];
          (_getInstance$TaskMana = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().TaskManager) === null || _getInstance$TaskMana === void 0 ? void 0 : (_getInstance$TaskMana2 = _getInstance$TaskMana.getComponent(_crd && TaskManager === void 0 ? (_reportPossibleCrUseOfTaskManager({
            error: Error()
          }), TaskManager) : TaskManager)) === null || _getInstance$TaskMana2 === void 0 ? void 0 : _getInstance$TaskMana2.checkpoints.forEach(element => {
            var newTrophy = instantiate(trophyNode);
            newTrophy.parent = this.node;
          });
          this.calculateLocked(); //GameManager.getInstance().TaskManager?.getComponent(TaskManager)?.checkpoints.length
        }

        calculateLocked() {
          for (let index = 0; index < (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress; index++) {
            this.node.children[index].children[0].active = false;
          }

          for (let index = Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress); index < this.node.children.length; index++) {
            this.node.children[index].children[0].active = true;
          }

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress != 0) {
            var _this$particleEffect;

            var trophiePosition = this.node.children[Number((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().Progress)].worldPosition;
            (_this$particleEffect = this.particleEffect) === null || _this$particleEffect === void 0 ? void 0 : _this$particleEffect.setWorldPosition(new Vec3(trophiePosition));
            this.particleEffect.getComponent(Animation).play();
            this.particleEffect.children[0].active = false;
            this.particleEffect.children[0].active = true;
            this.particleEffect.children[0].getComponent(ParticleSystem2D).enabled = true;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particleEffect", [_dec2], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TrophiesManagment.js.map