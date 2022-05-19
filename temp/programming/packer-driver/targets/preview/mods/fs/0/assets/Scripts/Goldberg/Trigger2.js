System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, MeshCollider, EndGameLogic, GameManager, _dec, _class, _temp, _crd, ccclass, property, Trigger2;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEndGameLogic(extras) {
    _reporterNs.report("EndGameLogic", "../EndGameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshCollider = _cc.MeshCollider;
    }, function (_unresolved_2) {
      EndGameLogic = _unresolved_2.EndGameLogic;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6476fS3AsVFcrqSwz7lwRfD", "Trigger2", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Trigger1
       * DateTime = Wed Mar 30 2022 23:16:47 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = Trigger1.ts
       * FileBasenameNoExtension = Trigger1
       * URL = db://assets/Scripts/Goldberg/Trigger1.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Trigger2", Trigger2 = (_dec = ccclass('Trigger2'), _dec(_class = (_temp = class Trigger2 extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "endGameLogic", void 0);

          _defineProperty(this, "animationPlayed", false);
        }

        start() {
          this.endGameLogic = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().node.getComponent(_crd && EndGameLogic === void 0 ? (_reportPossibleCrUseOfEndGameLogic({
            error: Error()
          }), EndGameLogic) : EndGameLogic);
          var collider = this.getComponent(MeshCollider);
          collider.on("onTriggerEnter", this.onTrigger, this);
        }

        onTrigger(event) {
          var _this$endGameLogic;

          (_this$endGameLogic = this.endGameLogic) === null || _this$endGameLogic === void 0 ? void 0 : _this$endGameLogic.startEndGame(); //console.log(event.type, event);
          //console.log("DODIRUJEM ");
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=Trigger2.js.map