System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, SystemEvent, systemEvent, Quat, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CameraControll;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "752424dbKFKm4do6KHihLfI", "CameraControll", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CameraControll
       * DateTime = Thu Nov 04 2021 15:54:44 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = CameraControll.ts
       * FileBasenameNoExtension = CameraControll
       * URL = db://assets/Scripts/CameraControll.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("CameraControll", CameraControll = (_dec = ccclass('CameraControll'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class CameraControll extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "followTarget", _descriptor, this);

          _initializerDefineProperty(this, "isFollowRotation", _descriptor2, this);

          _initializerDefineProperty(this, "offset", _descriptor3, this);

          _defineProperty(this, "moveSpeed", 3);

          _defineProperty(this, "_sensitivity", 0.1);

          _defineProperty(this, "isPlayingStart", false);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onKeyDown() {
          console.log("WAKA");
        }

        onMouseMove(event) {
          console.log(" Mouse event + " + event.getDeltaX + 1);
          var currentVector = new Vec3(); // = math.Quat.toEuler( this.node.getRotation()  );

          Quat.toEuler(currentVector, this.node.getRotation(), true);
          if (event.getDeltaY() > 40 || event.getDeltaX() > 40) return; //this.node.setWorldRotationFromEuler

          var tempXrotation = currentVector.x + event.getDeltaY() * this._sensitivity;

          var tempYrotation = currentVector.y - event.getDeltaX() * this._sensitivity;

          this.node.setRotationFromEuler(tempXrotation, tempYrotation, currentVector.z);
        }

        onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, event => {
            console.log('Mouse down');
          }, this);
          this.node.on('mousedown', function (event) {
            console.log('Mouse down');
          }, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this); //systemEvent.on(Node.EventType.MOUSE_LEAVE, this.onMouseMove, this)

          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
          /*this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
              log('Drag stated ...');
          }, this);
          this.node.on(Node.EventType.MOUSE_MOVE, function (event) {
              if (!this._down) {
                  event.stopPropagation();
                  return
              }
              this.node.opacity = 255;
              var delta = event.getDelta();
              this.node.x += delta.x;
              this.node.y += delta.y;
              if (!this.propagate)
                  event.stopPropagation();
          }, this);
          this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
              if (!this._down) {
                  event.stopPropagation();
                  return
              }
              this.node.opacity = 160;
              cc.log('Drag leave ...');
              this._down = false;
          }, this);
          this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
              if (!this._down) {
                  event.stopPropagation();
                  return
              }
              cc.log('Drag done ...');
              this.node.opacity = 160;
              this._down = false;
          }, this);   */
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isFollowRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      })), _class2)) || _class));
      /**
       * 
       * var TouchDragger = cc.Class({
          extends: cc.Component,
      
          properties: {
              propagate: {
                  default: false
              },
              // ...
          },
      
          // use this for initialization
          onLoad: function () {
              this._down = false;
              this.node.opacity = 160;
              this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                  cc.log('Drag stated ...');
                  this.node.opacity = 255;
                  this._down = true;
                  if (!this.propagate)
                      event.stopPropagation();
              }, this);
              this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
                  if (!this._down) {
                      event.stopPropagation();
                      return
                  }
                  this.node.opacity = 255;
                  var delta = event.getDelta();
                  this.node.x += delta.x;
                  this.node.y += delta.y;
                  if (!this.propagate)
                      event.stopPropagation();
              }, this);
              this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
                  if (!this._down) {
                      event.stopPropagation();
                      return
                  }
                  this.node.opacity = 160;
                  cc.log('Drag leave ...');
                  this._down = false;
              }, this);
              this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
                  if (!this._down) {
                      event.stopPropagation();
                      return
                  }
                  cc.log('Drag done ...');
                  this.node.opacity = 160;
                  this._down = false;
              }, this);
          },
      });
      
      
      
      
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
//# sourceMappingURL=CameraControll.js.map