System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, systemEvent, SystemEvent, Vec3, Camera, geometry, PhysicsSystem, GameStatuType, GlobalManager, DbuttonActivate, _dec, _class, _temp, _crd, ccclass, property, DbuttonRaycast;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameStatuType(extras) {
    _reporterNs.report("GameStatuType", "../GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalManager(extras) {
    _reporterNs.report("GlobalManager", "../GlobalManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDbuttonActivate(extras) {
    _reporterNs.report("DbuttonActivate", "../UI/3DbuttonActivate", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_unresolved_2) {
      GameStatuType = _unresolved_2.GameStatuType;
    }, function (_unresolved_3) {
      GlobalManager = _unresolved_3.GlobalManager;
    }, function (_unresolved_4) {
      DbuttonActivate = _unresolved_4.DbuttonActivate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "934004W0apF6p4lgxoYjh2m", "3DbuttonRaycast", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DbuttonRaycast
       * DateTime = Thu Nov 25 2021 15:49:34 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = 3DbuttonRaycast.ts
       * FileBasenameNoExtension = 3DbuttonRaycast
       * URL = db://assets/Scripts/3DbuttonRaycast.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("DbuttonRaycast", DbuttonRaycast = (_dec = ccclass('DbuttonRaycast'), _dec(_class = (_temp = class DbuttonRaycast extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "maxDepth", 15);

          _defineProperty(this, "tempItemArray", []);
        }

        start() {
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.children.forEach(element => {
            if (element.name == "Camera") this.cameraObject = element;
          });
        }

        sortList(r) {
          var sortedArray = r.sort(function (a, b) {
            return a.distance - b.distance;
          });
          /*var sortedArray: { hitPoint: math.Vec3; }[] = r.sort((n1,n2) => {
               if (n1.distance > n2.distance) {
                   return 1;
               }
                 if (n1.distance < n2.distance) {
                   return -1;
               }
                 return 0;
           }); */

          return sortedArray;
        }

        onTouchEnd(e) {
          var _this$cameraObject$ge;

          var _rayPrazan = new geometry.ray();

          (_this$cameraObject$ge = this.cameraObject.getComponent(Camera)) === null || _this$cameraObject$ge === void 0 ? void 0 : _this$cameraObject$ge.screenPointToRay(e._point.x, e._point.y, _rayPrazan); //var raycast: geometry.Ray = new geometry.Ray(this.node.position.x, this.node.position.y, this.node.position.z, 0, -1, 0);

          var hit = new Vec3();
          var distance = 0;

          if (PhysicsSystem.instance.raycast(_rayPrazan)) {
            var r = PhysicsSystem.instance.raycastResults;
            r.forEach(rayCastItem => {
              this.tempItemArray.forEach(touchStartItem => {
                if (rayCastItem.collider.node == touchStartItem && (_crd && GlobalManager === void 0 ? (_reportPossibleCrUseOfGlobalManager({
                  error: Error()
                }), GlobalManager) : GlobalManager).getInstance().gameStatus == (_crd && GameStatuType === void 0 ? (_reportPossibleCrUseOfGameStatuType({
                  error: Error()
                }), GameStatuType) : GameStatuType).gameActive) {
                  var _touchStartItem$getCo;

                  (_touchStartItem$getCo = touchStartItem.getComponent(_crd && DbuttonActivate === void 0 ? (_reportPossibleCrUseOfDbuttonActivate({
                    error: Error()
                  }), DbuttonActivate) : DbuttonActivate)) === null || _touchStartItem$getCo === void 0 ? void 0 : _touchStartItem$getCo.startAnimation();
                }
              });
            });
          }

          while (this.tempItemArray.length) {
            this.tempItemArray.pop();
          }
        }

        onTouchStart(e) {
          var _this$cameraObject$ge2;

          var _rayPrazan = new geometry.ray();

          (_this$cameraObject$ge2 = this.cameraObject.getComponent(Camera)) === null || _this$cameraObject$ge2 === void 0 ? void 0 : _this$cameraObject$ge2.screenPointToRay(e._point.x, e._point.y, _rayPrazan); //var raycast: geometry.Ray = new geometry.Ray(this.node.position.x, this.node.position.y, this.node.position.z, 0, -1, 0);

          var hit = new Vec3();
          var distance = 15;

          if (PhysicsSystem.instance.raycast(_rayPrazan)) {
            var r = PhysicsSystem.instance.raycastResults; //if( r[0].collider.node.getComponent(DbuttonActivate) )
            //    r[0].collider.node.getComponent(DbuttonActivate)?.startAnimation();

            if (this.maxDepth > r.length) var depth = r.length;else var depth = this.maxDepth;
            var rSorted = this.sortList(r);

            for (var i = 0; i < r.length; i++) {
              var item = rSorted[i];
              var shortestDistance = rSorted[0].distance;

              if (item.collider.node.getComponent(_crd && DbuttonActivate === void 0 ? (_reportPossibleCrUseOfDbuttonActivate({
                error: Error()
              }), DbuttonActivate) : DbuttonActivate)) {
                if (Math.abs(shortestDistance - item.distance) < distance) {
                  //item.collider.node.getComponent(DbuttonActivate)?.startAnimation();
                  this.tempItemArray.push(item.collider.node);
                }
              }
            }
          }
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
//# sourceMappingURL=3DbuttonRaycast.js.map