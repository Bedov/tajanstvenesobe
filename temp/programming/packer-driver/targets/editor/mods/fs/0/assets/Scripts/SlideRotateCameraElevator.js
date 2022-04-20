System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, math, macro, systemEvent, SystemEvent, setDisplayStats, find, GameStatuType, GlobalManager, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, Vec2, Vec3, Quat, v2_1, v2_2, v3_1, qt_1, KEYCODE, SlideRotateCameraElevator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDetectTypeOfDeviceElevator(extras) {
    _reporterNs.report("DetectTypeOfDeviceElevator", "./DetectTypeOfDeviceElevator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "./GlobalManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      macro = _cc.macro;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      setDisplayStats = _cc.setDisplayStats;
      find = _cc.find;
    }, function (_unresolved_2) {
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b96f4IE44FO/LUog8WQxGyg", "SlideRotateCameraElevator", undefined);

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

      _export("SlideRotateCameraElevator", SlideRotateCameraElevator = (_dec = ccclass('SlideRotateCameraElevator'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_temp = class SlideRotateCameraElevator extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "moveSpeedShiftScale", _descriptor2, this);

          _initializerDefineProperty(this, "damp", _descriptor3, this);

          _initializerDefineProperty(this, "_eventOn", _descriptor4, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor5, this);

          _initializerDefineProperty(this, "maxAngleUp", _descriptor6, this);

          _initializerDefineProperty(this, "maxAngleDown", _descriptor7, this);

          _defineProperty(this, "_euler", new Vec3());

          _defineProperty(this, "_velocity", new Vec3());

          _defineProperty(this, "_position", new Vec3());

          _defineProperty(this, "_speedScale", 1);

          _defineProperty(this, "canvas", void 0);
        }

        onLoad() {
          this.canvas = find("Canvas");
        }

        start() {
          this.scheduleOnce(this.startListening, 5);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
          setDisplayStats(false); // 关闭左下角显示FPS
        }

        startListening() {
          systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        update(dt) {
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
          this.node.setRotation(qt_1);
        }

        onMouseWheel(e) {
          const delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down

          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        }

        onTouchStart(_e) {
          //if ((game.canvas as HTMLCanvasElement).requestPointerLock)
          //    (game.canvas as HTMLCanvasElement).requestPointerLock();
          let location = _e.getLocation(); // 获取节点坐标

        }

        onTouchMove(e, even) {
          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().gameStatus == (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
            error: Error()
          }), GameStatuType) : GameStatuType).gamePaused) {
            return;
          }

          var detectType = this.canvas.getComponent("DetectTypeOfDeviceElevator");
          detectType.joystick_Mouse_Move();
          let touches = even.getTouches();
          e.getStartLocation(v2_1); //if (v2_1.x > view.getFrameSize().width * 0.4) { // rotation

          e.getDelta(v2_2);
          this._euler.y -= v2_2.x * this.rotateSpeed * 0.1 * this.inverseCalculus();
          this._euler.x += v2_2.y * this.rotateSpeed * 0.1 * this.inverseCalculus();

          if (this._euler.x <= -this.maxAngleDown) {
            this._euler.x = -this.maxAngleDown;
          }

          if (this._euler.x >= this.maxAngleUp) {
            this._euler.x = this.maxAngleUp;
          }
        }

        inverseCalculus() {
          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().invertedRotation) return -1;else return 1;
        }

        onTouchEnd(e) {//document.exitPointerLock();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxAngleUp", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 70;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "maxAngleDown", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      })), _class2)) || _class));

      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SlideRotateCameraElevator.js.map