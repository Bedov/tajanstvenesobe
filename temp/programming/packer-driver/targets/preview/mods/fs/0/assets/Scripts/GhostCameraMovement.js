System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, macro, systemEvent, SystemEvent, Node, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, KEYCODE, _pointerLockGeneral, _keyEvent, GhostCameraMovement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFirstPersonCameraRotate(extras) {
    _reporterNs.report("FirstPersonCameraRotate", "./FirstPersonCameraRotate", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41347u6GVhAkIaaucCuzKDy", "GhostCameraMovement", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      KEYCODE = {
        W: 'W'.charCodeAt(0),
        S: 'S'.charCodeAt(0),
        A: 'A'.charCodeAt(0),
        D: 'D'.charCodeAt(0),
        Q: 'Q'.charCodeAt(0),
        E: 'E'.charCodeAt(0),
        SHIFT: macro.KEY.shift
      };
      _pointerLockGeneral = false;
      _keyEvent = [false];

      _export("GhostCameraMovement", GhostCameraMovement = (_dec = ccclass('GhostCameraMovement'), _dec2 = property(Node), _dec3 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_temp = class GhostCameraMovement extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tackaOkretanja", _descriptor, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "damp", _descriptor3, this);

          _defineProperty(this, "_gotStartLocation", false);

          _defineProperty(this, "_finalMoveVector", new Vec3());

          _defineProperty(this, "_position", new Vec3());

          _defineProperty(this, "_keyPresed", false);
        }

        onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          Vec3.copy(this._position, this.node.position);
          this.fpsMovement = this.getComponent('FirstPersonCameraRotate');
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        }

        update(dt) {
          /* var vX = Math.cos(this.node.rotation * Math.PI / 180) * this.speed;
          var vY = Math.sin(this.node.rotation * Math.PI / 180) * this.speed;
          this.node.x += vX * dt;
          this.node.y += vY * dt; */
          //Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          //Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
          //this.node.setRotation(qt_1);
          //if(this._keyPresed && this.fpsMovement._pointerLockLocal ) 
          if (this._keyPresed) {
            this.creatingFinalVector();
            this.node.position.add(this._finalMoveVector);
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

        calculateForward() {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
          return vectorForward;
        }

        calculateLeft() {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);
          return vectorForward.negative();
        }

        calculateRight() {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.RIGHT);
          return vectorForward;
        }

        calculateBack() {
          var vectorForward = this.multiplyQuatVec3(this.node.rotation, Vec3.FORWARD);
          return vectorForward.negative();
        }

        creatingFinalVector() {
          var e = _keyEvent;

          if (_keyEvent[KEYCODE.W] == true) {
            console.log('Press W key');

            this._finalMoveVector.add(this.calculateForward());
          }

          if (_keyEvent[KEYCODE.A] == true) {
            console.log('Press a key');

            this._finalMoveVector.add(this.calculateLeft());
          }

          if (_keyEvent[KEYCODE.S] == true) {
            console.log('Press S key');

            this._finalMoveVector.add(this.calculateBack());
          }

          if (_keyEvent[KEYCODE.D] == true) {
            console.log('Press D key');

            this._finalMoveVector.add(this.calculateRight());
          }

          this._finalMoveVector.normalize().multiplyScalar(this.moveSpeed);
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
          this._keyPresed = true; //_keyEvent = e;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tackaOkretanja", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GhostCameraMovement.js.map