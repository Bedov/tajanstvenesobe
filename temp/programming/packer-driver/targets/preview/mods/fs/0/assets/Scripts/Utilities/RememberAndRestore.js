System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Quat, RigidBody, Animation, GlobalManager, Trigger1, NodePosRot, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, RememberAndRestore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger1", "../Goldberg/Trigger1", _context.meta, extras);
  }

  _export("NodePosRot", void 0);

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
      RigidBody = _cc.RigidBody;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      GlobalManager = _unresolved_2.GlobalManager;
    }, function (_unresolved_3) {
      Trigger1 = _unresolved_3.Trigger1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2826+uvW5GJ7MGGyYcQK2x", "RememberAndRestore", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RememberAndRestore
       * DateTime = Thu Mar 31 2022 13:41:55 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = RememberAndRestore.ts
       * FileBasenameNoExtension = RememberAndRestore
       * URL = db://assets/Scripts/Utilities/RememberAndRestore.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RememberAndRestore", RememberAndRestore = (_dec = ccclass('RememberAndRestore'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property([_crd && Trigger1 === void 0 ? (_reportPossibleCrUseOfTrigger({
        error: Error()
      }), Trigger1) : Trigger1]), _dec(_class = (_class2 = (_temp = class RememberAndRestore extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animatedObjects", _descriptor, this);

          _defineProperty(this, "objectsNodePosRot", []);

          _initializerDefineProperty(this, "parentObjects", _descriptor2, this);

          _initializerDefineProperty(this, "triggersToRestart", _descriptor3, this);
        }

        start() {
          this.animatedObjects[0].getComponent(RigidBody).isStatic = true;
          this.animatedObjects.forEach(element => {
            var nodePosRot = new NodePosRot();
            nodePosRot.node = element;
            nodePosRot.position = new Vec3(element.position);
            nodePosRot.rotation = new Quat(element.rotation);
            this.objectsNodePosRot.push(nodePosRot);
          });
          this.scheduleOnce(this.setActive, 0.5); //this.setActive();
        }

        onLoad() {}

        setActive() {
          for (var index = 0; index < this.parentObjects.length; index++) {
            if (this.parentObjects[index].children != null) this.parentObjects[index].children.forEach(element => {
              element.active = true;
            });
            this.parentObjects[index].active = true;
          }

          console.log("General Progress: " + (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().findGeneralProgress());

          for (var _index = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().findGeneralProgress(); _index < this.parentObjects.length; _index++) {
            if (this.parentObjects[_index].children != null) this.parentObjects[_index].children.forEach(element => {
              element.active = false;
              console.log("Gasim element " + element.name);
            });
            this.parentObjects[_index].active = false;
            console.log("Gasim element " + this.parentObjects[_index].name);
          }
        }

        restart() {
          this.animatedObjects[0].getComponent(RigidBody).isStatic = false;
          this.objectsNodePosRot.forEach(element => {
            var _element$node$getComp;

            if (element.node.getComponent(Animation)) (_element$node$getComp = element.node.getComponent(Animation)) === null || _element$node$getComp === void 0 ? void 0 : _element$node$getComp.stop();
            element.node.setPosition(element.position);
            element.node.setRotation(element.rotation);

            if (element.node.getComponent(RigidBody)) {
              var _element$node$getComp2, _element$node$getComp3;

              (_element$node$getComp2 = element.node.getComponent(RigidBody)) === null || _element$node$getComp2 === void 0 ? void 0 : _element$node$getComp2.clearVelocity();
              (_element$node$getComp3 = element.node.getComponent(RigidBody)) === null || _element$node$getComp3 === void 0 ? void 0 : _element$node$getComp3.clearForces();
            }
          });
          this.triggersToRestart.forEach(element => {
            element.animationPlayed = false;
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animatedObjects", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentObjects", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "triggersToRestart", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _export("NodePosRot", NodePosRot = class NodePosRot {
        constructor() {
          _defineProperty(this, "position", void 0);

          _defineProperty(this, "rotation", void 0);
        }

      });
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RememberAndRestore.js.map