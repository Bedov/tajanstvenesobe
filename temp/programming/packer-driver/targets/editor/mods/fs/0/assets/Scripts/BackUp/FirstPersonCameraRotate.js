System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, math, macro, systemEvent, SystemEvent, game, view, setDisplayStats, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Vec2, Vec3, Quat, v2_1, v2_2, v3_1, qt_1, KEYCODE, _pointerLockGeneral, FirstPersonCameraRotate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      macro = _cc.macro;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      game = _cc.game;
      view = _cc.view;
      setDisplayStats = _cc.setDisplayStats;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fa8bv2N0tF4pYNbzLlbPV/", "FirstPersonCameraRotate", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        Vec2,
        Vec3,
        Quat
      } = math);
      v2_1 = new Vec2();
      v2_2 = new Vec2();
      v3_1 = new Vec3();
      qt_1 = new Quat();
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

      _export("FirstPersonCameraRotate", FirstPersonCameraRotate = (_dec = ccclass('FirstPersonCameraRotate'), _dec2 = property(Boolean), _dec3 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_temp = class FirstPersonCameraRotate extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "degreesLocked", _descriptor, this);

          _initializerDefineProperty(this, "damp", _descriptor2, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor3, this);

          _defineProperty(this, "_gotStartLocation", false);

          _defineProperty(this, "_pointerLockLocal", false);

          _defineProperty(this, "_pointerLockPosition", new Vec3());

          _defineProperty(this, "_euler", new Vec3());

          _defineProperty(this, "_velocity", new Vec3());

          _defineProperty(this, "_position", new Vec3());

          _defineProperty(this, "_speedScale", 1);
        }

        onLoad() {
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.pointerLock, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
          setDisplayStats(false); // 关闭左下角显示FPS
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.pointerLock, this);
        }

        update(dt) {
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
          this.node.setRotation(qt_1);
          this._pointerLockLocal = _pointerLockGeneral; // if(_pointerLockGeneral)
          //      this.touchDisplay.active = false;
          // else
          //     this.touchDisplay.active = true;
        }

        pointerLock() {
          if (game.canvas.requestPointerLock) game.canvas.requestPointerLock();
          document.addEventListener('pointerlockchange', this.lockChangeAlert, false); //document.addEventListener('mozpointerlockchange', this.lockChangeAlert, false);
        }

        lockChangeAlert() {
          if (document.pointerLockElement === game.canvas) {
            console.log('The pointer lock status is now locked');
            _pointerLockGeneral = true;
          } else {
            console.log('The pointer lock status is now unlocked');
            _pointerLockGeneral = false;
          }
        }

        onMouseMove(e) {
          if (!this._gotStartLocation) {
            e.getLocation(v2_1);
            this._gotStartLocation = true;
          }

          if (_pointerLockGeneral) {
            //v2_1 = this._pointerLockPosition;
            if (v2_1.x > view.getFrameSize().width * 0.4) {
              // rotation
              e.getDelta(v2_2);
              this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
              this._euler.x += v2_2.y * this.rotateSpeed * 0.1;

              if (this.degreesLocked) {
                if (this._euler.x <= -70) {
                  this._euler.x = -70;
                }

                if (this._euler.x >= 45) {
                  this._euler.x = 45;
                }
              } //console.log(this._euler);

            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "degreesLocked", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FirstPersonCameraRotate.js.map