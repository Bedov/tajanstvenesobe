System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, systemEvent, SystemEvent, macro, GameStatuType, GlobalManager, _dec, _class, _temp, _crd, ccclass, property, KEYCODE, DetectTypeOfDeviceElevator;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "./GlobalManager", _context.meta, extras);
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
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "585d7rn/aRJ5IMROkx8Nf4v", "DetectTypeOfDeviceElevator", undefined);

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

      _export("DetectTypeOfDeviceElevator", DetectTypeOfDeviceElevator = (_dec = ccclass('DetectTypeOfDeviceElevator'), _dec(_class = (_temp = class DetectTypeOfDeviceElevator extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_moveTimerBool", true);

          _defineProperty(this, "_moveTutorialEndBool", false);

          _defineProperty(this, "_movedontRepeatTutorialEndevent", false);

          _defineProperty(this, "_moveCounter", 1);

          _defineProperty(this, "_lookTimerBool", true);

          _defineProperty(this, "_lookTutorialEndBool", false);

          _defineProperty(this, "_lookdontRepeatTutorialEndevent", false);

          _defineProperty(this, "_lookCounter", 0.2);

          _defineProperty(this, "_tutorialEnded", false);

          _defineProperty(this, "_preTutorailEnded", false);
        }

        onLoad() {
          this.scheduleOnce(this.startTutorial, 6);
          this.scheduleOnce(this.endPretutoral, 5);
          this.MobileMoveJoystick = this.node.getChildByName("joystick");
        }

        endPretutoral() {
          this._preTutorailEnded = true;

          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().activeLevelData.levelProgress != 0) {
            this._moveTutorialEndBool = true;
            this._lookTutorialEndBool = true;
          }
        }

        startTutorial() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          this.KeyboardMoveSymbol = this.node.getChildByName("DesktopMoveTutorial");
          this.KeyboardSeeSymbol = this.node.getChildByName("DesktopLookTutorial");
          this.MobileSeeSymbol = this.node.getChildByName("MobileLookTutorial");
          this.MobileMoveSymbol = this.node.getChildByName("MobileMoveTutorial");
          this.setPlatform();
        }

        start() {
          this.setPlatformInitial();
        }

        setPlatformInitial() {
          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) {
            this.MobileMoveJoystick.active = true;
          } else this.MobileMoveJoystick.active = false;
        }

        setPlatform() {
          if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) {
            this.KeyboardMoveSymbol.active = false;
            this.MobileMoveSymbol.active = true;
            this.KeyboardSeeSymbol.active = false;
            this.MobileSeeSymbol.active = true;
          } else {
            this.KeyboardMoveSymbol.active = true;
            this.MobileMoveSymbol.active = false;
            this.KeyboardSeeSymbol.active = true;
            this.MobileSeeSymbol.active = false;
          }
        }

        checkProgressForTutorial() {
          //if(GlobalManager.getInstance().Progress != 0) {
          this._moveTutorialEndBool = true;
          this._moveTimerBool = false;
          this._lookdontRepeatTutorialEndevent = true;
          this._lookTimerBool = false; //}
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); //this.node.off(SystemEvent.EventType.TOUCH_MOVE, this.joystick_Mouse_Move, this); 
        }

        onKeyDown(e) {
          if (e.keyCode == KEYCODE.UP || e.keyCode == KEYCODE.LEFT || e.keyCode == KEYCODE.DOWN || e.keyCode == KEYCODE.RIGHT) this._moveTutorialEndBool = true;
        }

        update(deltaTime) {
          if (this._preTutorailEnded == false) return;

          if (this._lookTutorialEndBool && this._lookdontRepeatTutorialEndevent == false) {
            var mobileSeeSymbole = this.MobileSeeSymbol.getComponent('ScriptEffects');
            var keyboardSeeSymbol = this.KeyboardSeeSymbol.getComponent('ScriptEffects');
            if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) mobileSeeSymbole.fadeOutActive();else keyboardSeeSymbol.fadeOutActive();
            this._lookdontRepeatTutorialEndevent = true;
          }

          if (this._moveTutorialEndBool && this._movedontRepeatTutorialEndevent == false) {
            var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects');
            var keyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects');
            if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) MobileMoveSymbol.fadeOutActive();else keyboardMoveSymbol.fadeOutActive();
            this._movedontRepeatTutorialEndevent = true;
          }

          this._lookCounter -= deltaTime;

          if (this._lookCounter < 0 && this._lookTimerBool == true && !this._lookTutorialEndBool) {
            if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) {
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
            if ((_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().isMobileOrTablet) {
              var MobileMoveSymbol = this.MobileMoveSymbol.getComponent('ScriptEffects');
              MobileMoveSymbol.fadeInActive();
            } else {
              var KeyboardMoveSymbol = this.KeyboardMoveSymbol.getComponent('ScriptEffects');
              KeyboardMoveSymbol.fadeInActive();
            }

            this._moveTimerBool = false;
          }

          if (this._lookTutorialEndBool && this._moveTutorialEndBool && !this._tutorialEnded) {
            (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
              error: Error()
            }), GlobalManager) : GlobalManager).getInstance().gameStatus = (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
              error: Error()
            }), GameStatuType) : GameStatuType).gameActive;
            this._tutorialEnded = true;
          }
        }

        keyboard_Move() {
          if (!this._movedontRepeatTutorialEndevent && this._preTutorailEnded) this._moveTutorialEndBool = true;
        }

        joystick_Mouse_Move() {
          if (!this._lookdontRepeatTutorialEndevent && this._preTutorailEnded) this._lookTutorialEndBool = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
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
//# sourceMappingURL=DetectTypeOfDeviceElevator.js.map