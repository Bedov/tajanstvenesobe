System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GlobalManager, _dec, _class, _temp, _crd, ccclass, property, PowerBar;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      GlobalManager = _unresolved_2.GlobalManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ff7bNHqqJImI+O/ATsQCXV", "PowerBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PowerBar", PowerBar = (_dec = ccclass('PowerBar'), _dec(_class = (_temp = class PowerBar extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "buttonsArray", []);
        }

        start() {
          this.buttonsArray.push(this.node.getChildByName("Kanister_energija1"));
          this.buttonsArray.push(this.node.getChildByName("Kanister_energija2"));
          this.buttonsArray.push(this.node.getChildByName("Kanister_energija3"));
          this.buttonsArray.push(this.node.getChildByName("Kanister_energija4"));
          this.buttonsArray.push(this.node.getChildByName("Kanister_energija5"));
          this.setBars();
        }

        setBars() {
          var generalProgress = (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
            error: Error()
          }), GlobalManager) : GlobalManager).getInstance().findGeneralProgress();

          for (var index = 0; index < generalProgress; index++) {
            this.buttonsArray[index].active = true;
          }
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
//# sourceMappingURL=PowerBar.js.map