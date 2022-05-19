System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, DisplayScreenChange;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0931iPk5tNabc56afJQZ2c", "DisplayScreenChange", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DisplayScreenChange
       * DateTime = Thu May 19 2022 15:10:11 GMT+0200 (Central European Summer Time)
       * Author = stickandrope
       * FileBasename = DisplayScreenChange.ts
       * FileBasenameNoExtension = DisplayScreenChange
       * URL = db://assets/Scripts/DisplayScreenChange.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DisplayScreenChange", DisplayScreenChange = (_dec = ccclass('DisplayScreenChange'), _dec(_class = (_temp = _class2 = class DisplayScreenChange extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          DisplayScreenChange.instance = this.node;
          this.turnOffNodes();
          this.node.getChildByName("Ekran").active = true;
        }

        static setDisplayToSceneName(sceneName) {
          var _DisplayScreenChange$;

          (_DisplayScreenChange$ = DisplayScreenChange.instance.getComponent(DisplayScreenChange)) === null || _DisplayScreenChange$ === void 0 ? void 0 : _DisplayScreenChange$.turnOffNodes();
          DisplayScreenChange.instance.getChildByName(sceneName).active = true;
        }

        turnOffNodes() {
          var children = DisplayScreenChange.instance.children;
          children.forEach(element => {
            element.active = false;
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));
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
//# sourceMappingURL=DisplayScreenChange.js.map