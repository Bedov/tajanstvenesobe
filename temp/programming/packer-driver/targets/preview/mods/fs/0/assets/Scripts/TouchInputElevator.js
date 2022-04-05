System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec2, SystemEvent, Vec3, UITransform, GameManager, GlobalManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TouchInputElevator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFirstPersonCameraMovementElevator(extras) {
    _reporterNs.report("FirstPersonCameraMovementElevator", "./FirstPersonCameraMovementElevator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDetectTypeOfDeviceElevator(extras) {
    _reporterNs.report("DetectTypeOfDeviceElevator", "./DetectTypeOfDeviceElevator", _context.meta, extras);
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
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8a78k8+pxJtobQg/pF6+uw", "TouchInputElevator", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TouchInput
       * DateTime = Mon Nov 15 2021 18:58:12 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = TouchInput.ts
       * FileBasenameNoExtension = TouchInput
       * URL = db://assets/Scripts/TouchInput.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("TouchInputElevator", TouchInputElevator = (_dec = ccclass('TouchInputElevator'), _dec2 = property(Node), _dec3 = property(Vec3), _dec(_class = (_class2 = (_temp = class TouchInputElevator extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "Player", void 0);

          _initializerDefineProperty(this, "Joystick_Ball", _descriptor, this);

          _initializerDefineProperty(this, "Joystick_Vector", _descriptor2, this);

          _initializerDefineProperty(this, "Joystick_Max", _descriptor3, this);

          _defineProperty(this, "_JoystickSize", 0);
        }

        update() {
          var vec3ForMovement = new Vec3(this.Joystick_Ball.position); //new Vec3( this.Joystick_Ball.position.);

          vec3ForMovement.multiplyScalar(1 / this.Joystick_Max);

          this._firstPersonCameraMovement.creatingFinalVectorTouch(vec3ForMovement); //this.Joystick_Ball.position.x

        }

        start() {
          this.Player = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Player;
          this.node.on(SystemEvent.EventType.TOUCH_START, this.Joystick_Touch_Start, this);
          this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.Joystick_Touch_Move, this);
          this.node.on(SystemEvent.EventType.TOUCH_END, this.Joystick_Touch_End, this);
          this.node.on(SystemEvent.EventType.TOUCH_CANCEL, this.Joystick_Touch_End, this); //GameManager.instance

          this._firstPersonCameraMovement = this.Player.getComponent("FirstPersonCameraMovementElevator");
          if (this.getComponent(UITransform) != null) this._JoystickSize = this.getComponent(UITransform).width;
        }

        onDestroy() {
          this.node.off(SystemEvent.EventType.TOUCH_START, this.Joystick_Touch_Start, this);
          this.node.off(SystemEvent.EventType.TOUCH_MOVE, this.Joystick_Touch_Move, this);
          this.node.off(SystemEvent.EventType.TOUCH_END, this.Joystick_Touch_End, this);
          this.node.off(SystemEvent.EventType.TOUCH_CANCEL, this.Joystick_Touch_End, this);
        }

        Joystick_Touch_Start(event) {
          this._firstPersonCameraMovement._keyPresed = true;
          var touch_pos = new Vec3(event.getUIStartLocation().x, event.getUIStartLocation().y, 0);
          var local_touch_pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(touch_pos);
          this.Limit_joystick_Vector(local_touch_pos);
          this.Set_Joystick_Ball_Position(local_touch_pos);
          this.Joystick_Vector = local_touch_pos;
        }

        Joystick_Touch_Move(event) {
          var detectType = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).instance.canvas.getComponent("DetectTypeOfDeviceElevator");
          detectType.joystick_Mouse_Move(); //Treba mozda pokriti dva prsta

          var touch_pos = new Vec3(event.getUILocation().x, event.getUILocation().y, 0);
          var local_touch_pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(touch_pos);
          this.Limit_joystick_Vector(local_touch_pos);
          this.Set_Joystick_Ball_Position(local_touch_pos);
          this.Joystick_Vector = local_touch_pos;
        }

        Joystick_Touch_End() {
          this._firstPersonCameraMovement._keyPresed = false;
          this.Joystick_Vector = new Vec3(Vec2.ZERO.x, Vec2.ZERO.y, 0);
          this.Set_Joystick_Ball_Position(new Vec3(Vec2.ZERO.x, Vec2.ZERO.y, 0));
        }

        Set_Joystick_Ball_Position(pos) {
          //console.log("SetJoystick " + pos);
          this.Joystick_Ball.setPosition(pos);
        }

        Limit_joystick_Vector(joystick_vector) {
          var input_mag = joystick_vector.length();

          if (input_mag > this.Joystick_Max) {
            joystick_vector.multiplyScalar(this.Joystick_Max / input_mag); //  mulSelf();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Joystick_Ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Joystick_Vector", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Joystick_Max", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
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
//# sourceMappingURL=TouchInputElevator.js.map