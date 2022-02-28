System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, macro, GameManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, KEYCODE, DetectTypeOfDevice;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "./Utilities/ScriptEffects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10766yRyDZO/YoOzw3yin5X", "DetectTypeOfDevice", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DetectTypeOfDevice
       * DateTime = Mon Nov 15 2021 18:42:05 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = DetectTypeOfDevice.ts
       * FileBasenameNoExtension = DetectTypeOfDevice
       * URL = db://assets/Scripts/DetectTypeOfDevice.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      KEYCODE = {
        UP: macro.KEY.up,
        DOWN: macro.KEY.down,
        LEFT: macro.KEY.left,
        RIGHT: macro.KEY.right,
        SHIFT: macro.KEY.shift
      };

      _export("DetectTypeOfDevice", DetectTypeOfDevice = (_dec = ccclass('DetectTypeOfDevice'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class DetectTypeOfDevice extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "KeyboardMoveSymbol", _descriptor, this);

          _initializerDefineProperty(this, "MobileMoveSymbol", _descriptor2, this);

          _initializerDefineProperty(this, "MobileMoveJoystick", _descriptor3, this);

          _initializerDefineProperty(this, "KeyboardSeeSymbol", _descriptor4, this);

          _initializerDefineProperty(this, "MobileSeeSymbol", _descriptor5, this);

          _defineProperty(this, "_moveTimerBool", true);

          _defineProperty(this, "_moveTutorialEndBool", false);

          _defineProperty(this, "_movedontRepeatTutorialEndevent", false);

          _defineProperty(this, "_moveCounter", 1);

          _defineProperty(this, "_lookTimerBool", true);

          _defineProperty(this, "_lookTutorialEndBool", false);

          _defineProperty(this, "_lookdontRepeatTutorialEndevent", false);

          _defineProperty(this, "_lookCounter", 0.2);
        }

        onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          this.checkProgressForTutorial(); //this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.joystick_Mouse_Move, this);
        }

        checkProgressForTutorial() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().Progress != 0) {
            this._moveTutorialEndBool = true;
            this._moveTimerBool = false;
            this._lookdontRepeatTutorialEndevent = true;
            this._lookTimerBool = false;
          }
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); //this.node.off(SystemEvent.EventType.TOUCH_MOVE, this.joystick_Mouse_Move, this); 
        }

        onKeyDown(e) {
          if (e.keyCode == KEYCODE.UP || e.keyCode == KEYCODE.LEFT || e.keyCode == KEYCODE.DOWN || e.keyCode == KEYCODE.RIGHT) this._moveTutorialEndBool = true;
        }

        update(deltaTime) {
          if (this._lookTutorialEndBool && this._lookdontRepeatTutorialEndevent == false) {
            var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects');
            var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects');
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().isMobileOrTablet) mobileSeeSymbole.fadeOutActive();else keyboardSeeSymbol.fadeOutActive();
            this._lookdontRepeatTutorialEndevent = true;
          }

          if (this._moveTutorialEndBool && this._movedontRepeatTutorialEndevent == false) {
            var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects');
            var keyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects');
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().isMobileOrTablet) MobileMoveSymbol.fadeOutActive();else keyboardMoveSymbol.fadeOutActive();
            this._movedontRepeatTutorialEndevent = true;
          }

          this._lookCounter -= deltaTime;

          if (this._lookCounter < 0 && this._lookTimerBool == true && !this._lookTutorialEndBool) {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().isMobileOrTablet) {
              var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects');
              mobileSeeSymbole.fadeInActive();
            } else {
              var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects');
              keyboardSeeSymbol.fadeInActive();
            }

            this._lookTimerBool = false;
          }

          if (this._lookTutorialEndBool) {
            this._moveCounter -= deltaTime;
          }

          if (this._moveCounter < 0 && this._moveTimerBool == true && this._lookTutorialEndBool && !this._moveTutorialEndBool) {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().isMobileOrTablet) {
              var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects');
              MobileMoveSymbol.fadeInActive();
            } else {
              var KeyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects');
              KeyboardMoveSymbol.fadeInActive();
            }

            this._moveTimerBool = false;
          }
        }

        keyboard_Move() {
          if (!this._movedontRepeatTutorialEndevent) this._moveTutorialEndBool = true;
        }

        joystick_Mouse_Move() {
          if (!this._lookdontRepeatTutorialEndevent) this._lookTutorialEndBool = true;
        }

        start() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().isMobileOrTablet) {
            this.KeyboardMoveSymbol.active = false;
            this.MobileMoveJoystick.active = true;
            this.MobileMoveSymbol.active = true;
            this.KeyboardSeeSymbol.active = false;
            this.MobileSeeSymbol.active = true;
          } else {
            this.KeyboardMoveSymbol.active = true;
            this.MobileMoveJoystick.active = false;
            this.MobileMoveSymbol.active = false;
            this.KeyboardSeeSymbol.active = true;
            this.MobileSeeSymbol.active = false;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "KeyboardMoveSymbol", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MobileMoveSymbol", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MobileMoveJoystick", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "KeyboardSeeSymbol", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MobileSeeSymbol", [_dec6], {
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
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DetectTypeOfDevice.js.map