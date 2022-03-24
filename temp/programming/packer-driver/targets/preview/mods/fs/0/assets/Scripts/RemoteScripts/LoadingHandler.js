System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ScriptEffects, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LoadingHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfScriptEffects(extras) {
    _reporterNs.report("ScriptEffects", "../Utilities/ScriptEffects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ScriptEffects = _unresolved_2.ScriptEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1a91TDAYxGxoE8SUSQ4ovd", "LoadingHandler", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LoadingHandler
       * DateTime = Wed Mar 23 2022 21:49:35 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = LoadingHandler.ts
       * FileBasenameNoExtension = LoadingHandler
       * URL = db://assets/Scripts/RemoteScripts/LoadingHandler.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("LoadingHandler", LoadingHandler = (_dec = ccclass('LoadingHandler'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class LoadingHandler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loadingPanel", _descriptor, this);
        }

        turnOnLoading() {
          var _getComponent;

          (_getComponent = this.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _getComponent === void 0 ? void 0 : _getComponent.fadeInActive();
        }

        turnOffLoading() {
          var _getComponent2;

          (_getComponent2 = this.loadingPanel.getComponent(_crd && ScriptEffects === void 0 ? (_reportPossibleCrUseOfScriptEffects({
            error: Error()
          }), ScriptEffects) : ScriptEffects)) === null || _getComponent2 === void 0 ? void 0 : _getComponent2.fadeOutActive();
        }

        start() {// [3]
        }

        update() {//if(GameManager.getInstance().downloadedCheckpoint < GameManager.getInstance().TaskManager!.getComponent(TaskManager)?.checkpoints[Number(GameManager.getInstance().Progress)].children[0].getComponent(Task)!.orderNumber! );
          //    console.log();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=LoadingHandler.js.map