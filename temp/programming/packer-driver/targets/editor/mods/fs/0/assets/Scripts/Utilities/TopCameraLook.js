System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Quat, systemEvent, SystemEvent, FirstPersonCameraMovement, GameManager, GameStatuType, SlideRotateCamera, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TopCameraLook;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFirstPersonCameraMovement(extras) {
    _reporterNs.report("FirstPersonCameraMovement", "../FirstPersonCameraMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlideRotateCamera(extras) {
    _reporterNs.report("SlideRotateCamera", "../SlideRotateCamera", _context.meta, extras);
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
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
    }, function (_unresolved_2) {
      FirstPersonCameraMovement = _unresolved_2.FirstPersonCameraMovement;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
      GameStatuType = _unresolved_3.GameStatuType;
    }, function (_unresolved_4) {
      SlideRotateCamera = _unresolved_4.SlideRotateCamera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96ae6+09F5HYa6C01wPMta+", "TopCameraLook", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TopCameraLook
       * DateTime = Fri Dec 24 2021 15:57:41 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = TopCameraLook.ts
       * FileBasenameNoExtension = TopCameraLook
       * URL = db://assets/Scripts/Utilities/TopCameraLook.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TopCameraLook", TopCameraLook = (_dec = ccclass('TopCameraLook'), _dec2 = property(Vec3), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class TopCameraLook extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "distanceScale", _descriptor, this);

          _initializerDefineProperty(this, "eulerRotation", _descriptor2, this);

          _initializerDefineProperty(this, "pin", _descriptor3, this);

          _defineProperty(this, "mainCamera", null);

          _defineProperty(this, "startedPositionVector", new Vec3());

          _defineProperty(this, "targetPositionVector", new Vec3());

          _defineProperty(this, "startedRotationVector", new Vec3());

          _defineProperty(this, "targetRotationVector", new Vec3());

          _defineProperty(this, "page1Vector", new Vec3(0, 0, 0));

          _defineProperty(this, "page2Vector", new Vec3(0, 0, 5));

          _defineProperty(this, "page3Vector", new Vec3(0, 0, 9));

          _defineProperty(this, "page4Vector", new Vec3(0, 0, 15));

          _defineProperty(this, "page5Vector", new Vec3(0, 0, 18));

          _defineProperty(this, "page6Vector", new Vec3(0, 0, 25));

          _defineProperty(this, "startedRotationVectorQuat", new Quat());

          _defineProperty(this, "targetRotationVectorQuat", new Quat());

          _defineProperty(this, "lerpCounter", 1);

          _defineProperty(this, "lerpCounterParrent", 1);

          _defineProperty(this, "lerpLenghtParrent", 0.1);

          _defineProperty(this, "lerpLenght", 1);

          _defineProperty(this, "tempPosition", new Vec3(0, 0, 0));

          _defineProperty(this, "tempPinPosition", new Vec3(0, 0, 0));
        }

        start() {
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this); //Vec3.copy(this._euler, this.node.eulerAngles);
          //Vec3.copy(this._position, this.node.position);
        }

        onTouchMove(e, even) {
          if (!this.pin.active) {
            return;
          }

          const delta = e.getDelta();
          const {
            x,
            y
          } = delta;
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.parent) (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.parent.rotation = Quat.rotateY(new Quat(), (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.parent.rotation, x * Math.PI / 180);else (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.rotation = Quat.rotateY(new Quat(), (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().WorldRoot.rotation, x * Math.PI / 180);
        }

        playAnimationTop() {
          if (this.getComponent(_crd && FirstPersonCameraMovement === void 0 ? (_reportPossibleCrUseOfFirstPersonCameraMovement({
            error: Error()
          }), FirstPersonCameraMovement) : FirstPersonCameraMovement).enabled == false) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
              error: Error()
            }), GameStatuType) : GameStatuType).gameActive;
            this.getComponent(_crd && FirstPersonCameraMovement === void 0 ? (_reportPossibleCrUseOfFirstPersonCameraMovement({
              error: Error()
            }), FirstPersonCameraMovement) : FirstPersonCameraMovement).enabled = true;
            this.getComponent(_crd && SlideRotateCamera === void 0 ? (_reportPossibleCrUseOfSlideRotateCamera({
              error: Error()
            }), SlideRotateCamera) : SlideRotateCamera).enabled = true;
            if (this.pin) this.pin.active = false;
            this.node.position = this.tempPosition;
            this.lerpCounter = 1;
            this.lerpCounterParrent = 1; //Vracamo rotaciju parent sveta na nulu

            var tempZeroQuat = new Quat();
            Quat.fromEuler(tempZeroQuat, 0, 0, 0);
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().WorldRoot.parent) (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().WorldRoot.parent.rotation = tempZeroQuat;else (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().WorldRoot.rotation = tempZeroQuat;
          } else {
            if (this.pin) {
              this.pin.active = true;
              this.pin.worldPosition = new Vec3(this.node.worldPosition);
            }

            this.tempPosition = new Vec3(this.node.position);
            this.tempPinPosition = new Vec3(this.node.worldPosition);
            this.getComponent(_crd && FirstPersonCameraMovement === void 0 ? (_reportPossibleCrUseOfFirstPersonCameraMovement({
              error: Error()
            }), FirstPersonCameraMovement) : FirstPersonCameraMovement).enabled = false;
            this.getComponent(_crd && SlideRotateCamera === void 0 ? (_reportPossibleCrUseOfSlideRotateCamera({
              error: Error()
            }), SlideRotateCamera) : SlideRotateCamera).enabled = false;
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
              error: Error()
            }), GameStatuType) : GameStatuType).gamePaused;
            this.lerpCounter = 0;
            this.targetPositionVector = new Vec3(-4.953, 4.293, 2.537);
            this.targetPositionVector.multiplyScalar(this.distanceScale);
            this.startedPositionVector = this.node.position;
            Quat.fromEuler(this.targetRotationVectorQuat, this.eulerRotation.x, this.eulerRotation.y, this.eulerRotation.z);
            this.startedRotationVectorQuat = this.node.rotation;
          }
        }

        update(deltaTime) {
          this.lerpCounter += deltaTime;
          this.lerpCounterParrent += deltaTime;

          if (this.lerpCounter < 0.7) {
            Vec3.lerp(this.node.position, this.startedPositionVector, this.targetPositionVector, this.lerpCounter);
            this.node.position = this.node.position;
            Quat.lerp(this.node.rotation, this.startedRotationVectorQuat, this.targetRotationVectorQuat, this.lerpCounter);
            this.node.rotation = this.node.rotation;
          } //GameManager.getInstance().WorldRoot?.rotate(Quat.x)
          //Quat.rotateY(GameManager.getInstance().WorldRoot!.rotation, GameManager.getInstance().WorldRoot!.rotation, 0.5);
          //Quat.rotateAround(this.node.rotation, GameManager.getInstance().WorldRoot.position ,Vec3.UP,0.5);
          //this.node.lookAt(this.target.position);
          //if(this.pin.active == true) {
          //  this.pin.position = this.tempPosition;
          //}

        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "distanceScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eulerRotation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(-30.962, -59.879, 3.898);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pin", [_dec3], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TopCameraLook.js.map