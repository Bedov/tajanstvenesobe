System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, MeshCollider, MeshRenderer, RigidBody, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, ComponentUtility;

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
      MeshCollider = _cc.MeshCollider;
      MeshRenderer = _cc.MeshRenderer;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a66f8v69b1JzKZyFYaNNW8n", "ComponentUtility", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ComponentUtility
       * DateTime = Mon Dec 20 2021 14:22:17 GMT+0100 (Central European Standard Time)
       * Author = stickandrope
       * FileBasename = ComponentUtility.ts
       * FileBasenameNoExtension = ComponentUtility
       * URL = db://assets/Scripts/Utilities/ComponentUtility.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("ComponentUtility", ComponentUtility = (_dec = ccclass('ComponentUtility'), _dec2 = property(Boolean), _dec3 = property(Boolean), _dec4 = property(Boolean), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class ComponentUtility extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "turnOffMesh", _descriptor, this);

          _initializerDefineProperty(this, "turnOnConvex", _descriptor2, this);

          _initializerDefineProperty(this, "rigidBody", _descriptor3, this);

          _initializerDefineProperty(this, "batchedRoot", _descriptor4, this);
        }

        setProperties(element) {
          if (this.turnOffMesh) element.getComponent(MeshRenderer).enabled = false;
          var meshic = new MeshCollider(); //meshic.

          element.addComponent(MeshCollider);
          element.getComponent(MeshCollider).mesh = element.getComponent(MeshRenderer).mesh;
          if (this.turnOnConvex) element.getComponent(MeshCollider).convex = true;

          if (this.rigidBody) {
            element.addComponent(RigidBody);
            element.getComponent(RigidBody).isStatic = true;
          } //if(element.getComponent(RigidBody))
          //    this.useCCD( element.getComponent(RigidBody)!, true);

        }

        start() {
          //PhysicsSystem.instance.enable = true;
          //var manager = director.getCollisionManager();
          //manager.enabled = true;
          this.node.children.forEach(element => {
            if (element.children.length != 0) {
              element.children.forEach(element => {
                if (element.getComponent(MeshRenderer) != null) {
                  this.setProperties(element);
                }

                if (element.children.length != 0) {
                  element.children.forEach(element => {
                    if (element.getComponent(MeshRenderer) != null) {
                      this.setProperties(element);
                    }

                    if (element.children.length != 0) {
                      element.children.forEach(element => {
                        if (element.getComponent(MeshRenderer) != null) {
                          this.setProperties(element);
                        }
                      });
                    }
                  });
                }
              });
            }

            if (element.getComponent(MeshRenderer) != null) {
              this.setProperties(element);
            }
            /*
            var mesh = element.addComponent(MeshCollider);
            
            var mesh2 = element.getComponent(MeshCollider);
            mesh2!.mesh = mesh2!.getComponent(MeshRenderer)!.mesh; */

          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "turnOffMesh", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "turnOnConvex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "batchedRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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
//# sourceMappingURL=ComponentUtility.js.map