System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, LabelComponent, loader, Prefab, instantiate, v3, find, FollowCamera, _dec, _class, _temp, _crd, ccclass, property, TitleBar;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFollowCamera(extras) {
    _reporterNs.report("FollowCamera", "./FollowCamera", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      find = _cc.find;
    }, function (_unresolved_2) {
      FollowCamera = _unresolved_2.FollowCamera;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9efd88bfypDAJtmoh9/iIWl", "TitleBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TitleBar", TitleBar = (_dec = ccclass('TitleBar'), _dec(_class = (_temp = class TitleBar extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_titleBar", null);

          _defineProperty(this, "_hpBar", null);

          _defineProperty(this, "_mpBar", null);

          _defineProperty(this, "_nameTxt", null);

          _defineProperty(this, "_hpPercent", 1);

          _defineProperty(this, "_mpPercent", 1);

          _defineProperty(this, "_nameStr", '不要太酷哦');

          _defineProperty(this, "_targetPos", v3());

          _defineProperty(this, "_offsetY", 1);

          _defineProperty(this, "_lastUpdateTime", Date.now());

          _defineProperty(this, "_titleBarPoint", null);
        }

        start() {
          this._titleBarPoint = this.node.getChildByName('title_bar_point') || this.node;
          this.loadTitleBar();
        }

        loadTitleBar() {
          loader.loadRes('title_bar', Prefab, (err, asset) => {
            if (!this.isValid || !this.node.isValid) {
              return;
            }

            let titleBar = instantiate(asset);
            let root = find('Canvas'); //UIMgr.inst.getLayerNode(UILayer.GAME);

            root.addChild(titleBar);
            this._titleBar = titleBar;
            this._hpBar = titleBar.getChildByName('hp_bar');
            this._mpBar = titleBar.getChildByName('mp_bar');
            this._nameTxt = titleBar.getChildByName('name').getComponent(LabelComponent);
            this.setHPPercent(this._hpPercent);
            this.setMPPercent(this._mpPercent);
            this.setName(this._nameStr);
          });
        }

        onDestroy() {
          if (this._titleBar) {
            this._titleBar.removeFromParent();
          }

          this._titleBar = null;
        } //slow-update. fps = 10


        update(deltaTime) {
          if (!this._titleBar) {
            return;
          }

          let now = Date.now();

          if (now - this._lastUpdateTime < 100) {
            return;
          }

          this._titleBarPoint.getWorldPosition(this._targetPos); //this._targetPos.y += this._offsetY;


          (_crd && FollowCamera === void 0 ? (_reportPossibleCrUseOfFollowCamera({
            error: Error()
          }), FollowCamera) : FollowCamera).inst.camera.convertToUINode(this._targetPos, this._titleBar.parent, this._targetPos);
          this._titleBar.position = this._targetPos;
        }

        setHPPercent(percent) {
          this._hpPercent = percent;

          if (this._hpBar) {
            this._hpBar.setScale(percent, 1, 1);
          }
        }

        setMPPercent(percent) {
          this._mpPercent = percent;

          if (this._mpBar) {
            this._mpBar.setScale(percent, 1, 1);
          }
        }

        setName(name) {
          this._nameStr = name;

          if (this._nameTxt) {
            this._nameTxt.string = this._nameStr;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TitleBar.js.map