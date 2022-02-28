System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, Director, _dec, _class, _temp, _crd, ccclass, property, GetFPS;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Director = _cc.Director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7888er9L5dD27D9n0HBZzZL", "GetFPS", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = GetFPS
       * DateTime = Wed Dec 15 2021 14:36:04 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = GetFPS.ts
       * FileBasenameNoExtension = GetFPS
       * URL = db://assets/Scripts/Utilities/GetFPS.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("GetFPS", GetFPS = (_dec = ccclass('GetFPS'), _dec(_class = (_temp = class GetFPS extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "tempFrames", 0);
        }

        start() {
          this.schedule(this.getFrames, 1);
        }

        getFrames() {
          this.getComponent(Label).string = (Director.instance.getTotalFrames() - this.tempFrames).toString();
          this.tempFrames = Director.instance.getTotalFrames();
        }

        update(deltaTime) {//this.fpsLabel.getComponent(Label)!.string  = profiler._stats!.fps.counter.value.toString() ;
          //this.fpsLabel.getComponent(Label)!.string  = Director.instance.getTotalFrames().toString();
        }

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
//# sourceMappingURL=GetFPS.js.map