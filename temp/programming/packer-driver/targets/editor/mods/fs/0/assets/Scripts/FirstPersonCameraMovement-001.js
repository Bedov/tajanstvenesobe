System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, geometry, KeyCode, PhysicsSystem, RigidBody, GameManager, GameStatuType, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, KEYCODE, _pointerLockGeneral, _keyEvent, FirstPersonCameraMovement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDetectTypeOfDevice(extras) {
    _reporterNs.report("DetectTypeOfDevice", "./DetectTypeOfDevice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      geometry = _cc.geometry;
      KeyCode = _cc.KeyCode;
      PhysicsSystem = _cc.PhysicsSystem;
      RigidBody = _cc.RigidBody;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
      GameStatuType = _unresolved_2.GameStatuType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aff9fcmgnRAv6/ZwXTsi9l9", "FirstPersonCameraMovement-001", undefined);

      ({
        ccclass,
        property
      } = _decorator); //const outRay = new ray(0, -1, 0, 0, 1, 0);

      KEYCODE = {
        UP: KeyCode.ARROW_UP,
        DOWN: KeyCode.ARROW_DOWN,
        LEFT: KeyCode.ARROW_LEFT,
        RIGHT: KeyCode.ARROW_RIGHT,
        W: 'W'.charCodeAt(0),
        S: 'S'.charCodeAt(0),
        A: 'A'.charCodeAt(0),
        D: 'D'.charCodeAt(0),
        Q: 'Q'.charCodeAt(0),
        E: 'E'.charCodeAt(0),
        SPACE: KeyCode.SPACE,
        SHIFT: KeyCode.SHIFT_LEFT
      };
      _pointerLockGeneral = false;
      _keyEvent = [false];

      _export("FirstPersonCameraMovement", FirstPersonCameraMovement = (_dec = ccclass('FirstPersonCameraMovement'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_temp = class FirstPersonCameraMovement extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "forceStrenght", _descriptor2, this);

          _initializerDefineProperty(this, "damp", _descriptor3, this);

          _defineProperty(this, "_gotStartLocation", false);

          _initializerDefineProperty(this, "_eventOn", _descriptor4, this);

          _defineProperty(this, "_finalMoveVector", new Vec3());

          _defineProperty(this, "_position", new Vec3());

          _defineProperty(this, "_keyPresed", false);

          _defineProperty(this, "_tutorialEnded", false);

          _initializerDefineProperty(this, "heightFromGround", _descriptor5, this);

          _defineProperty(this, "_jumpTemp", 0);

          _defineProperty(this, "_jumpHeight", .5);

          _defineProperty(this, "_jumpSpeed", 2);

          _defineProperty(this, "_jumpRise", true);

          _defineProperty(this, "_jumpBool", false);

          _defineProperty(this, "scaledSpeedCoeficient", 1);

          _defineProperty(this, "phoneCoeficient", 1.3);
        }

        start() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          this.scaledSpeedCoeficient = 1; //GameManager.getInstance().WorldRoot!.scale.x / 100 ;
          //director.getPhysicsManager().enabled = true;

          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().isMobileOrTablet) this.phoneCoeficient = 1;
          Vec3.copy(this._position, this.node.position);
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        }

        jump() {
          if (!this._jumpBool) {
            this._jumpBool = true;
            this._jumpRise = true;
          }
        }

        update(dt) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameStatus == (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused) return;
          var hit = new Vec3();
          var distance = 0;

          if (this._jumpBool) {
            if (this._jumpRise) this._jumpTemp += dt * this._jumpSpeed;else this._jumpTemp -= dt * this._jumpSpeed;
            if (this._jumpTemp > this._jumpHeight && this._jumpRise) this._jumpRise = false;

            if (this._jumpTemp <= 0 && !this._jumpRise) {
              this._jumpBool = false;
            }
          }

          var raycast = new geometry.Ray(this.node.position.x, this.node.position.y, this.node.position.z, 0, -1, 0);

          if (PhysicsSystem.instance.raycast(raycast)) {
            const r = PhysicsSystem.instance.raycastResults;
            var visina = new Vec3(0, -200, 0);

            for (let i = 0; i < r.length; i++) {
              const item = r[i];

              try {
                if (item != undefined && item != null) {
                  if (item.collider.node.name == "Ground002") {
                    if (visina.y < item.hitPoint.y + this.heightFromGround + this._jumpTemp) visina = new Vec3(item.hitPoint.x, item.hitPoint.y + this.heightFromGround + this._jumpTemp, item.hitPoint.z);
                  }
                }
              } catch (error) {}
            }

            this.node.position = visina;
          }

          raycast.computeHit(hit, distance);
          var runningSpeed = 0;
          if (_keyEvent[KEYCODE.SHIFT] == true) runningSpeed = 1; //if(this._keyPresed && this.fpsMovement._pointerLockLocal ) 

          if (this._keyPresed) {
            var _this$node$getCompone;

            if (this.phoneCoeficient == 1) this.creatingFinalVectorKeyboard(); //this.node.getComponent(RigidBody)?.applyImpulse(this._finalMoveVector.multiplyScalar(this.forceStrenght));
            //this.node.getComponent(RigidBody)?.applyForce(this._finalMoveVector.multiplyScalar(this.forceStrenght));

            (_this$node$getCompone = this.node.getComponent(RigidBody)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone.setLinearVelocity(this._finalMoveVector.multiplyScalar((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().moveSpeed * this.moveSpeed * this.scaledSpeedCoeficient * this.phoneCoeficient + runningSpeed)); //this.node.position.add(this._finalMoveVector.multiplyScalar(this.moveSpeed) );
          }
        }

        multiplyQuatVec3(rotation, point) {
          var num1 = rotation.x * 2;
          var num2 = rotation.y * 2;
          var num3 = rotation.z * 2;
          var num4 = rotation.x * num1;
          var num5 = rotation.y * num2;
          var num6 = rotation.z * num3;
          var num7 = rotation.x * num2;
          var num8 = rotation.x * num3;
          var num9 = rotation.y * num3;
          var num10 = rotation.w * num1;
          var num11 = rotation.w * num2;
          var num12 = rotation.w * num3;
          var vector3 = new Vec3();
          vector3.x = (1.0 - (num5 + num6)) * point.x + (num7 - num12) * point.y + (num8 + num11) * point.z;
          vector3.y = (num7 + num12) * point.x + (1.0 - (num4 + num6)) * point.y + (num9 - num10) * point.z;
          vector3.z = (num8 - num11) * point.x + (num9 + num10) * point.y + (1.0 - (num4 + num5)) * point.z;
          return vector3;
        }

        calculateForward(sila) {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
          vectorForward.y = 0;
          return vectorForward.multiplyScalar(sila);
        }

        calculateLeft(sila) {
          var vectorLeft = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);
          return vectorLeft.negative().multiplyScalar(sila);
        }

        calculateRight(sila) {
          var vectorRight = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);
          return vectorRight.multiplyScalar(sila);
        }

        calculateBack(sila) {
          var vectorBack = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
          vectorBack.y = 0;
          return vectorBack.negative().multiplyScalar(sila);
        }

        creatingFinalVectorKeyboard() {
          var e = _keyEvent;

          if (_keyEvent[KEYCODE.UP] == true || _keyEvent[KEYCODE.W] == true) {
            this._finalMoveVector.add(this.calculateForward(1));

            this.tutorialEnd();
          }

          if (_keyEvent[KEYCODE.LEFT] == true || _keyEvent[KEYCODE.A] == true) {
            this._finalMoveVector.add(this.calculateLeft(1));

            this.tutorialEnd();
          }

          if (_keyEvent[KEYCODE.DOWN] == true || _keyEvent[KEYCODE.S] == true) {
            this._finalMoveVector.add(this.calculateBack(1));

            this.tutorialEnd();
          }

          if (_keyEvent[KEYCODE.RIGHT] == true || _keyEvent[KEYCODE.D] == true) {
            this._finalMoveVector.add(this.calculateRight(1));

            this.tutorialEnd();
          }

          this._finalMoveVector.normalize().multiplyScalar((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().moveSpeed);
        }

        tutorialEnd() {
          if (this._tutorialEnded == false) {
            var detectType = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).instance.Canvas.getComponent("DetectTypeOfDevice");
            detectType.keyboard_Move();
            this._tutorialEnded = true;
          }
        }

        creatingFinalVectorTouch(moveVec) {
          var temp = new Vec3(moveVec.x, 0, -moveVec.y);
          this._finalMoveVector = this.multiplyQuatVec3(this.node.rotation, temp);

          this._finalMoveVector.multiplyScalar((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().moveSpeed * this.phoneCoeficient);

          if (moveVec.x != 0 || moveVec.y != 0) this.tutorialEnd();
        }

        onKeyUp(e) {
          _keyEvent[e.keyCode] = false;
          this._finalMoveVector = new Vec3(0, 0, 0);
          var sviPodignuti = true;

          _keyEvent.forEach(element => {
            if (element == true) sviPodignuti = false;
          });

          if (sviPodignuti) this._keyPresed = false;
        }

        onKeyDown(e) {
          _keyEvent[e.keyCode] = true;
          this._keyPresed = true;
          if (_keyEvent[KEYCODE.SPACE] == true) this.jump();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "forceStrenght", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_eventOn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "heightFromGround", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.6;
        }
      })), _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FirstPersonCameraMovement-001.js.map