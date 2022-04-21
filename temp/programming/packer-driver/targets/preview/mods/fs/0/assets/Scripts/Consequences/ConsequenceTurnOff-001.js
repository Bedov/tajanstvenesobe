System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ParticleSystem, Consequence, _dec, _class, _crd, ccclass, property, ConsequenceTurnOff;

  function _reportPossibleCrUseOfConsequence(extras) {
    _reporterNs.report("Consequence", "./Consequence", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      Consequence = _unresolved_2.Consequence;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0104Y25jNL5IRTjXsxhFis", "ConsequenceTurnOff-001", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ConsequenceTurnOff
       * DateTime = Mon Jan 10 2022 16:33:54 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ConsequenceTurnOff.ts
       * FileBasenameNoExtension = ConsequenceTurnOff
       * URL = db://assets/Scripts/Consequences/ConsequenceTurnOff.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("ConsequenceTurnOff", ConsequenceTurnOff = (_dec = ccclass('ConsequenceTurnOff'), _dec(_class = class ConsequenceTurnOff extends (_crd && Consequence === void 0 ? (_reportPossibleCrUseOfConsequence({
        error: Error()
      }), Consequence) : Consequence) {
        // [1]
        // dummy = '';
        start() {}

        resolve() {
          this.node.getComponent(ParticleSystem).loop = false; //this.node.active = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
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
//# sourceMappingURL=ConsequenceTurnOff-001.js.map