System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, MeshCollider, MeshRenderer, _dec, _class, _crd, ccclass, property, ComponentUtility;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshCollider = _cc.MeshCollider;
      MeshRenderer = _cc.MeshRenderer;
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

      _export("ComponentUtility", ComponentUtility = (_dec = ccclass('ComponentUtility'), _dec(_class = class ComponentUtility extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.node.children.forEach(element => {
            if (element.children.length != 0) {
              element.children.forEach(element => {
                if (element.getComponent(MeshRenderer) != null) {
                  element.addComponent(MeshCollider);
                  element.getComponent(MeshCollider).mesh = element.getComponent(MeshRenderer).mesh;
                }

                if (element.children.length != 0) {
                  element.children.forEach(element => {
                    if (element.getComponent(MeshRenderer) != null) {
                      element.addComponent(MeshCollider);
                      element.getComponent(MeshCollider).mesh = element.getComponent(MeshRenderer).mesh;
                    }

                    if (element.children.length != 0) {
                      element.children.forEach(element => {
                        if (element.getComponent(MeshRenderer) != null) {
                          element.addComponent(MeshCollider);
                          element.getComponent(MeshCollider).mesh = element.getComponent(MeshRenderer).mesh;
                        }
                      });
                    }
                  });
                }
              });
            }

            if (element.getComponent(MeshRenderer) != null) {
              element.addComponent(MeshCollider);
              element.getComponent(MeshCollider).mesh = element.getComponent(MeshRenderer).mesh;
            }
            /*
            var mesh = element.addComponent(MeshCollider);
            
            var mesh2 = element.getComponent(MeshCollider);
            mesh2!.mesh = mesh2!.getComponent(MeshRenderer)!.mesh; */

          });
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